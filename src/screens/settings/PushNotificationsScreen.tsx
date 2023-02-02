import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { ChevronLeftIcon } from 'src/assets/icons';
import { CustomButton, Header, ScreenContainer } from 'src/components';
import { SettingsStackParamList } from 'src/navigation/types';
import { notificationService } from 'src/services';
import { theme } from 'src/theme';

type Props = NativeStackScreenProps<
  SettingsStackParamList,
  'PushNotifications'
>;

export function PushNotificationsScreen({ navigation }: Props) {
  const [notificationIdState, setNotificationIdState] = useState('');

  // https://notifee.app/react-native/docs/displaying-a-notification
  function handleDisplayLocalNotification() {
    try {
      notificationService.displayNotification(
        'Notification Title',
        'Main body content of the notification'
      );
    } catch (error) {
      console.log(error);
    }
  }

  function handleCancelNotification(notificationId: string) {
    try {
      notificationService.cancelNotification(notificationId);
    } catch (error) {
      console.log(error);
    }
  }

  function handleCancelAllNotifications() {
    try {
      notificationService.cancelAllNotifications();
      Alert.alert('Cancel all notifications successfully.');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScreenContainer hasBackground hasHorizontalPadding>
      <Header
        headerTitle="Push Notifications"
        headerLeft={
          <TouchableOpacity
            hitSlop={theme.hitSlopIcon}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </TouchableOpacity>
        }
      />

      <CustomButton
        onPress={() => handleDisplayLocalNotification()}
        text="Push a Notification"
      />
      <CustomButton
        onPress={() => handleCancelNotification(notificationIdState)}
        text="Cancel Notifications"
      />
      <CustomButton
        onPress={() => handleCancelAllNotifications()}
        text="Cancel All Notifications"
      />
    </ScreenContainer>
  );
}
