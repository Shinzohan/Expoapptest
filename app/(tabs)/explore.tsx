// This app is an assignment test app embedded with a web view Next.js app, which uses MUI and Firebase for login and sign-up handling.
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

// Removed the explorer and bottom navigation for production readiness
export default function TabTwoScreen() {
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText type="title" style={{ textAlign: 'center', color: '#FFFf' }}>
        This app is an assignment test app embedded with a web view Next.js app, which uses MUI and Firebase for login and sign-up handling.
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({});
