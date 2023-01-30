import notifee, { EventType } from '@notifee/react-native';
import { useEffect } from 'react';

/**
 * Listening for Foreground events.
 * An application is deemed in the "foreground" only under the following situation:
 * The device is unlocked, and the application is running & is in view (foreground).
 * @see https://notifee.app/react-native/docs/events#listening-for-events
 */
export function useForegroundEvents() {
  useEffect(() => {
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DELIVERED:
          console.log(
            'A notification has been delivered to the device.',
            detail.notification
          );
          break;
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification);
          break;
      }
    });
  }, []);
}
