import React, { useEffect, useState } from "react";
import { Alert, View, StyleSheet } from 'react-native';
import Icons2 from 'react-native-vector-icons/Ionicons';
import notifee, { TimestampTrigger, TriggerType, AndroidImportance } from '@notifee/react-native';
import NotificationIcon from "./notificationicon";
import { useNotification } from "./NotificationContext";

export default function IconsNoti(): React.JSX.Element {
    const { hour, minute } = useNotification();
  // Create notification channel
  async function createNotificationChannel() {
    await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
      sound: 'default',
      vibration: true,
      vibrationPattern: [300, 500],
    });
  }

  // Get next scheduled time
  function getNextScheduledTime(hour: number, minute: number) {
    const now = new Date();
    const target = new Date();
    target.setHours(hour);
    target.setMinutes(minute);
    target.setSeconds(0);
    target.setMilliseconds(0);
    if (target.getTime() <= now.getTime()) {
      target.setDate(target.getDate() + 1); // Schedule for tomorrow if the time has passed
    }
    return target;
  }

   // Schedule daily notification
  async function scheduleDailyNotification(hour: number, minute: number, title: string, body: string) {
    // Get the next scheduled time
    const date = getNextScheduledTime(hour, minute);

    // Create a TimestampTrigger to schedule the notification daily
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
    };

    await notifee.createTriggerNotification(
      {
        title,
        body,
        android: {
          channelId: 'default',
          sound: 'default',
          vibrationPattern: [300, 500],
          pressAction: { id: 'default' },
        },
      },
      trigger
    );

    // After scheduling the first notification, also set up daily notifications
    // For Android, we can use a daily trigger to repeat the notification every day
    await notifee.createTriggerNotification(
      {
        title,
        body,
        android: {
          channelId: 'default',
          sound: 'default',
          vibrationPattern: [300, 500],
          pressAction: { id: 'default' },
        },
      },
      {
        type: TriggerType.REPEATING,
        interval: 24 * 60 * 60 * 1000, // Daily interval in milliseconds
        timestamp: date.getTime(), // Start from the calculated timestamp
      }
    );
  }

  // Schedule notifications whenever hour or minute changes
  useEffect(() => {
    const schedule = async () => {
      if (hour !== null && minute !== null) {
        await createNotificationChannel();

        // Schedule the notification for the stored time (don't reset the time)
        scheduleDailyNotification(hour, minute, 'Good Evening', 'Time for your evening workout!');
        
      }
    };

    schedule();
  }, [hour, minute]);
  return (
    <View style={styles.section2}>
      <View style={styles.profile}>
        <Icons2 name="person-outline" size={25} color={'black'} />
      </View>
      <NotificationIcon />
    </View>
  );
}

const styles = StyleSheet.create({
  section2: {
    marginRight: 15,
  },
  profile: {
    padding: 10,
    borderRadius: 25,
    marginBottom: 7,
    borderColor: 'gray',
    borderWidth: 1,
  },
});
