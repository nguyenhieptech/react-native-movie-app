import notifee, {
  RepeatFrequency,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';

/**
 * Notifee provides Reference documentation for all publicly available APIs.
 * The public JavaScript API for React Native is written with TypeScript.
 * The Notifee reference documentation is automatically generated
 * to provide users with further detail into the full API.
 *
 * @see https://notifee.app/react-native/reference
 */
export const notificationService = {
  /** Immediately display or update a notification on the users device. */
  async displayNotification(title: string, body: string) {
    // Create a channel required for Android Notifications
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Required for iOS
    // See https://notifee.app/react-native/docs/ios/permissions
    await notifee.requestPermission();

    // Display a notification
    const notificationId = notifee.displayNotification({
      // id: "string" | updates Notification instead if provided id already exists
      title: title,
      body: body,
      android: {
        channelId,
        /* smallIcon: "smallIcon" | defaults to 'ic_launcher', respectively your app icon. */
      },
    });

    return notificationId;
  },

  /**
   * API used to create a trigger notification.
   * All channels/categories should be created before
   * calling this method during the apps lifecycle.
   *
   * @param title Title of Notification
   * @param body Body content of Notification
   * @param timestamp The timestamp when the notification should first be shown, in milliseconds since 1970.
   * @param repeatFrequency The frequency at which the trigger repeats. If unset, the notification will only be displayed once.
   */
  async displayTriggerNotification(
    title: string,
    body: string,
    timestamp: number,
    repeatFrequency: RepeatFrequency | undefined = undefined
  ) {
    // Create a channel required for Android Notifications
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp, // fire at the provided date
      repeatFrequency, // repeat the notification on a hourly/daily/weekly basis
      alarmManager: {
        allowWhileIdle: true,
      },
    };
    // Please note, for iOS, a repeating trigger does not work the same as Android
    // The initial trigger cannot be delayed

    // Create a trigger notification
    const triggerNotificationId = await notifee.createTriggerNotification(
      {
        // id: "string" | updates Notification instead if provided id already exists
        title,
        body,
        android: {
          channelId,
        },
      },
      trigger // use displayNotification to update triggerNotifications which trigger already fired
    );

    return triggerNotificationId;
  },

  /** Return the ids of trigger notifications that are pending. */
  async getTriggerNotificationIds() {
    const triggerNotificationIds = await notifee.getTriggerNotificationIds();
    return triggerNotificationIds;
  },

  /**
   * Cancel all notifications. Removes any displayed notifications from
   * the users device and any pending trigger notifications.
   * This method does not cancel Android Foreground Service notifications.
   */
  async cancelAllNotifications(notificationIds?: string[] | undefined) {
    await notifee.cancelAllNotifications(notificationIds);
  },

  /** Cancel a single trigger notification. */
  async cancelTriggerNotification(notificationId: string) {
    await notifee.cancelTriggerNotification(notificationId);
  },

  /** Cancel any trigger notifications. */
  async cancelTriggerNotifications(notificationIds?: string[] | undefined) {
    await notifee.cancelTriggerNotifications(notificationIds);
  },

  /** Cancel notification via notificationId or tag. */
  async cancelNotification(notificationId: string, tag?: string | undefined) {
    await notifee.cancelNotification(notificationId, tag);
  },
};

export type NotificationService = typeof notificationService;
