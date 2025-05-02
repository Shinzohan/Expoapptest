import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

export async function requestFCMPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
    // Save or send token to your backend if needed
  }
}

export function listenToFCM() {
  return messaging().onMessage(async remoteMessage => {
    Alert.alert(remoteMessage?.notification?.title ?? 'Notification', remoteMessage?.notification?.body ?? '');
  });
}
