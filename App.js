import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import DiaryListScreen from './src/screens/DiaryListScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* Tambahkan flex: 1 agar SafeAreaView memenuhi seluruh layar */}
      <SafeAreaView style={{ flex: 1 }}>
        <DiaryListScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}