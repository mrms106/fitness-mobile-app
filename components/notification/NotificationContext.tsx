import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NotificationContextType {
  hour: number | null;
  minute: number | null;
  setNotificationTime: (hour: number, minute: number) => Promise<void>;
  hour2: number | null;
  minute2: number | null;
  setNotificationTime2: (hour: number, minute2: number) => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hour, setHour] = useState<number | null>(null);
  const [minute, setMinute] = useState<number | null>(null);
  const [hour2, setHour2] = useState<number | null>(null);
  const [minute2, setMinute2] = useState<number | null>(null);

  // Load notification time from AsyncStorage
  useEffect(() => {
    const loadStoredTime = async () => {
      try {
        const storedTime = await AsyncStorage.getItem('notificationTime');
        console.log('Stored notification time:', storedTime); // Add this line
        if (storedTime !== null) {
          const { hour, minute, hour2, minute2 } = JSON.parse(storedTime);
          setHour(Number(hour));
          setMinute(Number(minute));
          setHour2(Number(hour2));
          setMinute2(Number(minute2));
        }
      } catch (e) {
        console.error("Failed to load notification time.", e);
      }
    };
  
    loadStoredTime();
  }, []);
  
  // Set notification time and update AsyncStorage
  const setNotificationTime = async (hour: number, minute: number) => {
    setHour(hour);
    setMinute(minute);
    // Store all four values together to avoid overwriting
    await AsyncStorage.setItem('notificationTime', JSON.stringify({ hour, minute, hour2, minute2 }));
  };
  
  const setNotificationTime2 = async (hour2: number, minute2: number) => {
    setHour2(hour2);
    setMinute2(minute2);
    // Store all four values together to avoid overwriting
    await AsyncStorage.setItem('notificationTime', JSON.stringify({ hour, minute, hour2, minute2 }));
  };
  

  return (
    <NotificationContext.Provider value={{ hour, minute, setNotificationTime, hour2, minute2, setNotificationTime2 }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Create a custom hook to use the NotificationContext
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
