// NotificationContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NotificationContextType {
  hour: number | null;
  minute: number | null;
  setNotificationTime: (hour: number, minute: number) => Promise<void>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hour, setHour] = useState<number | null>(null);
  const [minute, setMinute] = useState<number | null>(null);

  // Load notification time from AsyncStorage
  useEffect(() => {
    const loadStoredTime = async () => {
      try {
        const storedTime = await AsyncStorage.getItem('notificationTime');
        if (storedTime !== null) {
          const { hour, minute } = JSON.parse(storedTime);
          setHour(Number(hour));
          setMinute(Number(minute));
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
    await AsyncStorage.setItem('notificationTime', JSON.stringify({ hour, minute }));
  };

  return (
    <NotificationContext.Provider value={{ hour, minute, setNotificationTime }}>
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
