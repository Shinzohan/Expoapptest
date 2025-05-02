// app/index.tsx
import { listenToFCM, requestFCMPermission } from '@/firebase/notification';
import React, { useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default function HomeScreen() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      requestFCMPermission();
      const unsubscribe = listenToFCM();
      return () => unsubscribe();
    }
  }, []);

  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://appassigment.vercel.app/' }} style={styles.webview} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
