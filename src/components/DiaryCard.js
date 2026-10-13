import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Props moodUri diganti menjadi moodImage, dan ditambahkan props mood
export default function DiaryCard({ title, date, preview, moodImage, mood }) {
  
  // Memenuhi tugas: Variasi border berdasarkan mood
  const getBorderColor = () => {
    switch (mood) {
      case 'happy': return '#fde047'; // Kuning
      case 'focus': return '#93c5fd'; // Biru
      case 'calm': return '#86efac';  // Hijau
      case 'sad': return '#d1d5db';   // Abu-abu
      case 'excited': return '#fca5a5'; // Merah
      default: return '#e5e7eb';
    }
  };

  return (
    // Menggabungkan style statis dengan style dinamis (borderColor)
    <View style={[styles.card, { borderColor: getBorderColor() }]}>
      
      {/* Menggunakan prop moodImage secara langsung */}
      <Image source={moodImage} style={styles.mood} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview}>{preview}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 2, // Border ditebalkan sedikit agar variasinya lebih terlihat
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#fafafa', // Latar belakang abu sangat terang
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
  },
});