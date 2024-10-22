import React, { useEffect } from "react";
import { View, StyleSheet } from 'react-native';
import Icons2 from 'react-native-vector-icons/Ionicons';
import NotificationIcon from "./notificationicon";
import { useNotification } from "./NotificationContext"; // Adjust the path as needed
import notifee, { RepeatFrequency, TriggerType, TimestampTrigger,AndroidImportance } from '@notifee/react-native';
export default function IconsNoti(): React.JSX.Element {
  const { hour, minute, hour2, minute2 } = useNotification();

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
async function scheduleDailyNotification(id: string, hour: number, minute: number, title: string, body: string) {
  const date = getNextScheduledTime(hour, minute);

  console.log(`Scheduling notification (${id}) for:`, date); // Log for debugging

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
    repeatFrequency: RepeatFrequency.DAILY // Set this to repeat daily
  };

  await notifee.createTriggerNotification(
    {
      id,  // Use a unique id for each notification
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
}

  

useEffect(() => {
  const schedule = async () => {
    if (hour !== null && minute !== null && hour2 !== null && minute2 !== null) {
      await createNotificationChannel();

      // Schedule the first notification to repeat daily
      await scheduleDailyNotification('first_notification', hour, minute, 'Good Evening', 'Time for your evening workout!');

      // Schedule the second notification to repeat daily
      await scheduleDailyNotification('second_notification', hour2, minute2, 'Second Reminder', 'Time for your second activity!');
    }
  };

  schedule();
}, [hour, minute, hour2, minute2]);

  
  

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