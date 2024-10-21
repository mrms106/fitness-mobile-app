import React, { useEffect } from "react";
import { Alert } from 'react-native';
import { StyleSheet, View, Text } from "react-native";
import Icons2 from 'react-native-vector-icons/Ionicons';
import notifee, { TimestampTrigger, TriggerType, AndroidImportance } from '@notifee/react-native';


export default function IconsNoti(): React.JSX.Element {

    async function createNotificationChannel() {
        await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
            importance: AndroidImportance.HIGH,
            sound: 'default',  // Ensure the notification plays the default sound
            vibration: true,   // Enable vibration
            vibrationPattern: [300, 500], // Custom vibration pattern (optional)
        });
    }
    
    function getNextScheduledTime(hour:any, minute:any) {
        const now = new Date();
        const target = new Date();
    
        // Set the target time (hour and minute)
        target.setHours(hour);
        target.setMinutes(minute);
        target.setSeconds(0);  // No seconds or milliseconds for precise time
        target.setMilliseconds(0);
    
        // If the target time has already passed today, schedule for tomorrow
        if (target.getTime() <= now.getTime()) {
            target.setDate(target.getDate() + 1);
        }
    
        return target;
    }
    
    async function scheduleNotification(hour:any, minute:any, title:any, body:any) {
        const date = getNextScheduledTime(hour, minute);
    
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
                    sound: 'default',    // Play the default notification sound
                    vibrationPattern: [300, 500], // Custom vibration pattern (optional)
                    pressAction: {
                        id: 'default',
                    },
                },
            },
            trigger
        );
    }
    
    useEffect(() => {
        // Create notification channel
        createNotificationChannel();
    
        // Schedule notifications for specific times
        scheduleNotification(6, 30, 'Good Morning', 'Hey freind,Its time to Morning workout');
        scheduleNotification(16, 46, 'Good Evening', 'Hey freind,Its time to evening workout');
    }, []);

    // battery optimization cheack
    async function checkBatteryOptimization() {
        const isBatteryOptimizationEnabled = await notifee.isBatteryOptimizationEnabled();
      
        if (isBatteryOptimizationEnabled) {
          // Show an alert to ask for user's confirmation
          Alert.alert(
            'Disable Battery Optimization',
            'To ensure notifications are received on time, please disable battery optimization for this app.',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Allow',
                onPress: async () => {
                  // Open battery optimization settings for the user to disable it
                  await notifee.openBatteryOptimizationSettings();
                },
              },
            ],
            { cancelable: true }
          );
        }
      }
      
      useEffect(() => {
        checkBatteryOptimization();
      }, []);
    return (
        <View style={styles.section2}>
            <View style={styles.profile}>
                <Icons2 name="person-outline" size={25} color={'black'} />
            </View>
            <View style={styles.noti}>
                <Icons2 name="notifications" size={25} color={'gray'} />
            </View>
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
        borderWidth: 1
    },
    noti: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 25
    },
});
