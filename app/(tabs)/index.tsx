import React, { useRef, useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, Dimensions, Easing, Image } from 'react-native';
import { useFocusEffect } from 'expo-router';

import LeftCurtainImage from '../../assets/images/curtain-left.png';
import RightCurtainImage from '../../assets/images/curtain-right.png';

const { width: screenWidth } = Dimensions.get('window');

export default function HomeScreen() {
  const scrollRef = useRef<ScrollView>(null);
  const curtainAnimation = useRef(new Animated.Value(0)).current;
  const [isAnimationComplete, setIsAnimationComplete] = useState(false); 


  useFocusEffect(
    useCallback(() => {
      curtainAnimation.setValue(0);
      setIsAnimationComplete(false);
      
      const animation = Animated.timing(curtainAnimation, {
        toValue: 1,
        duration: 2500,
        delay: 500,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: false,
      });
      animation.start(() => setIsAnimationComplete(true));

      return () => {
        animation.stop(); 
        curtainAnimation.setValue(0);
        setIsAnimationComplete(false);
      };
    }, [])
  );

  const leftCurtainTranslateX = curtainAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, -screenWidth / 2] });
  const rightCurtainTranslateX = curtainAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, screenWidth / 2] });
  const curtainOpacity = curtainAnimation.interpolate({ inputRange: [0, 0.7, 1], outputRange: [1, 1, 0] });

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={styles.scrollContentContainer}
        scrollEnabled={isAnimationComplete}
        removeClippedSubviews={false}
      >
        {/* CORREZIONE 2 (CRITICA): Tutto il contenuto ora è DENTRO questo View */}
      <View style={styles.content}>
         
          
          <View style={styles.textSection}>
            <Text style={styles.introText}>
              Ci sono momenti che si attendono a lungo.{'\n\n'}
              Momenti in cui il cuore batte più forte, le luci si abbassano, il silenzio avvolge la sala… e poi tutto inizia.{'\n\n'}
              Questa sera è uno di quei momenti.{'\n\n'}
              È con grande gioia che vi accogliamo al nostro saggio di fine anno: una celebrazione di ogni singolo passo compiuto dalle nostre allieve – dalle più piccole alle più grandi.{'\n\n'}
              Quello che vedrete sul palco è il risultato di mesi di impegno, disciplina, emozioni condivise.{'\n\n'}
              Quando si danza, si cresce. Si scopre sé stessi, si trova il coraggio di brillare davanti agli altri.{'\n\n'}
              Grazie per essere qui. Buon spettacolo!
            </Text>
          </View>

          <View style={styles.dedicationSection}>
            <Text style={styles.dedicationTitle}>Dediche</Text>
            <Text style={styles.dedicationText}>
              "A chi ha creduto in sé stesso per la prima volta."
            </Text>
            <Text style={styles.dedicationText}>
              "A chi ha scelto di brillare, nonostante la fatica."
            </Text>
            <Text style={styles.dedicationText}>
              "A chi ha danzato con il cuore e con l'anima."
            </Text>
            <Text style={styles.dedicationFooter}>
              Questo saggio è per voi.
            </Text>
          </View>

          <View style={styles.signatureSection}>
            <Text style={styles.signatureName}>Matteo D'Alessio</Text>
            <Text style={styles.signatureTitle}>Direzione Artistica – Centro Studi Arti Sceniche</Text>
          </View>
        </View> 
        {/* CORREZIONE 3: Il tag </View> di troppo è stato rimosso da qui */}
      </ScrollView>

      {/* Il sipario animato */}
      {!isAnimationComplete && (
        <View style={StyleSheet.absoluteFillObject} pointerEvents="none">
          <Animated.Image 
            source={LeftCurtainImage}
            style={[styles.curtain, styles.leftCurtain, { transform: [{ translateX: leftCurtainTranslateX }], opacity: curtainOpacity }]}
            resizeMode="cover"
          /> 
          <Animated.Image
            source={RightCurtainImage} 
            style={[styles.curtain, styles.rightCurtain, { transform: [{ translateX: rightCurtainTranslateX }], opacity: curtainOpacity }]}
            resizeMode="cover"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  scrollContentContainer: { 
    paddingBottom: 120,
  },
  content: {
    paddingHorizontal: 0, 
    paddingTop: 5,
  },
  textSection: {
    marginBottom: 40, 
    paddingHorizontal: 20, // Aggiungiamo padding solo qui per non staccare il testo dai bordi
  },
  introText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
  },
  dedicationSection: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  dedicationTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#c8151b',
    textAlign: 'center',
    marginBottom: 20,
  },
  dedicationText: {
    fontSize: 16,
    fontFamily: 'Inter-Italic', 
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  dedicationFooter: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#c8151b',
    textAlign: 'center',
    marginTop: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.25)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  signatureSection: {
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 2,
    borderTopColor: '#E0E0E0',
    marginHorizontal: 20,
  },
  signatureName: {
    fontSize: 20,
    fontFamily: 'Inter-BoldItalic',
    fontStyle: 'italic',
    fontWeight: 'bold', 
    color: '#1A1A1A',
    marginBottom: 8,
  },
  signatureTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    textAlign: 'center',
  },
  curtain: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '51%',
    zIndex: 10,
  },
  leftCurtain: {
    left: 0,
  },
  rightCurtain: {
    right: 0,
  },
});