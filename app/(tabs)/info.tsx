import React, { useRef } from 'react';
import { useFocusEffect } from 'expo-router';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Platform, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Info as InfoIcon, MapPin, ExternalLink, Globe } from 'lucide-react-native';

// Importazione della locandina aggiornata
import LocandinaImageSource from '../../assets/images/locandinadef.jpeg';

export default function InfoScreen() {
  const scrollRef = useRef<ScrollView>(null);

  useFocusEffect(
    React.useCallback(() => {
      scrollRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  // Dati Teatro San Raffaele
  const teatroAddress = 'Teatro San Raffaele, Via di S. Raffaele, 6, 00148 Roma RM';
  const teatroWebsite = 'https://www.teatrosanraffaele.it/';

  const openMaps = () => {
    const scheme = Platform.OS === 'ios' ? 'maps:0,0?q=' : 'geo:0,0?q=';
    const url = scheme + encodeURIComponent(teatroAddress);
    Linking.openURL(url);
  };

  const openWebsite = () => {
    Linking.openURL(teatroWebsite);
  };

  return (
    <ScrollView
      ref={scrollRef}
      style={styles.container}
      contentContainerStyle={styles.scrollContentContainer}
    >
      {/* Header con gradiente */}
      <LinearGradient
        colors={['#1A1A1A', '#c8151b']}
        style={styles.header}>
        <View style={styles.headerContent}>
          <InfoIcon size={48} color="#D4AF37" />
          <Text style={styles.title}>Info Serata</Text>
        </View>
      </LinearGradient>

      <View style={styles.content}>

        {/* SEZIONE INTRODUTTIVA */}
        <View style={styles.introSection}>
          <Text style={styles.descriptionText}>
            <Text style={styles.boldItalic}>Dieci anni dopo il primo passo</Text> è un viaggio tra ricordi, sogni, paure e traguardi che hanno segnato il cammino della nostra scuola.{"\n\n"}
            A guidare questo racconto sono <Text style={styles.semiBold}>Insicurezza, Coraggio e Ambizione</Text>: tre voci che accompagnano il pubblico attraverso dieci anni di crescita, emozioni e passione, celebrando non solo le persone che hanno reso possibile questa storia, ma anche tutti quei momenti indimenticabili che hanno lasciato un segno nel cuore della nostra scuola.
          </Text>
        </View>

        {/* CONTENITORE LOCANDINA */}
        <View style={styles.imageContainer}>
          <Image
            source={LocandinaImageSource}
            style={styles.locandinaImage}
            resizeMode="contain"
          />
        </View>

        {/* SEZIONE TEATRO */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Il Teatro</Text>
          <View style={styles.infoCard}>
            <MapPin size={24} color="#c8151b" style={{ marginRight: 15, marginTop: 5 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.theaterName}>Teatro San Raffaele</Text>
              <Text style={styles.theaterAddress}>Via di S. Raffaele, 6, 00148 Roma RM</Text>

              {/* Link Mappe */}
              <TouchableOpacity style={styles.linkContainer} onPress={openMaps}>
                <Text style={styles.linkText}>👉 Apri in Mappe</Text>
                <ExternalLink size={16} color="#c8151b" />
              </TouchableOpacity>

              {/* Link Sito Web */}
              <TouchableOpacity style={[styles.linkContainer, { marginTop: 15 }]} onPress={openWebsite}>
                <Globe size={18} color="#c8151b" style={{ marginRight: 8 }} />
                <Text style={styles.linkText}>Sito Ufficiale</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 16,
  },
  content: {
    padding: 20,
  },
  introSection: {
    marginBottom: 35,
    paddingHorizontal: 5,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter-Regular',
    color: '#333333',
    textAlign: 'center',
  },
  boldItalic: {
    fontFamily: 'Inter-Bold',
    fontStyle: 'italic',
  },
  semiBold: {
    fontFamily: 'Inter-SemiBold',
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#1A1A1A',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1131 / 1600,
    marginBottom: 45,
    borderRadius: 12,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  locandinaImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  theaterName: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#1A1A1A',
  },
  theaterAddress: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginTop: 4,
    lineHeight: 22,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  linkText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#c8151b',
    marginRight: 8,
  },
});