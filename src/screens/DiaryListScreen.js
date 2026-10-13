import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodImage: require('../../assets/moods/happy.png'), 
    mood: 'happy',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodImage: { uri: 'https://picsum.photos/seed/focus/80' },
    mood: 'focus',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodImage: { uri: 'https://picsum.photos/seed/calm/80' },
    mood: 'calm',
  },
  {
    id: 4,
    title: 'Hujan di Sore Hari',
    date: '2025-10-03',
    preview: 'Hujan deras membuatku terkurung di kamar, tapi sangat pas untuk mencoba kode React Native baru.',
    moodImage: { uri: 'https://picsum.photos/seed/sad/80' },
    mood: 'sad',
  },
  {
    id: 5,
    title: 'Berhasil Debugging!',
    date: '2025-10-02',
    preview: 'Akhirnya aplikasi berjalan lancar di Expo Go setelah mencari error di komponen.',
    moodImage: { uri: 'https://picsum.photos/seed/excited/80' },
    mood: 'excited',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.content}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Buku Harian</Text>
        <Image 
          // Menggunakan link MyAnimeList agar gambar avatar Sanji termuat sempurna
          source={{ uri: 'https://cdn.myanimelist.net/images/characters/5/136769.jpg' }} 
          style={styles.avatar} 
        />
      </View>
      
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodImage={entry.moodImage}
          mood={entry.mood}
        />
      ))}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#e5e7eb',
  },
});