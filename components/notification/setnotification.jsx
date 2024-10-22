import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert } from "react-native";
import { useNotification } from './NotificationContext';

export default function SetNotification() {
  const { setNotificationTime, setNotificationTime2 } = useNotification();
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour2, setHour2] = useState(0);
  const [minute2, setMinute2] = useState(0);

  const onSubmit = async () => {
    try {
      await setNotificationTime(hour, minute);
      Alert.alert("Saved", `Notification set for Hour: ${hour}, Minute: ${minute}`);
    } catch (e) {
      console.error("Failed to save notification time.", e);
    }
  };

  const onSubmit2 = async () => {
    try {
      await setNotificationTime2(hour2, minute2);
      Alert.alert("Saved", `Notification set for Hour: ${hour2}, Minute: ${minute2}`);
    } catch (e) {
      console.error("Failed to save notification time.", e);
    }
  };

  const handleHourChange = (val) => {
    const newHour = Number(val);
    if (newHour >= 0 && newHour <= 24) {
      setHour(newHour);
    } else {
      Alert.alert("Invalid Input", "Hour must be between 0 and 24");
    }
  };

  const handleMinuteChange = (val) => {
    const newMinute = Number(val);
    if (newMinute >= 0 && newMinute < 60) {
      setMinute(newMinute);
    } else {
      Alert.alert("Invalid Input", "Minute must be between 0 and 59");
    }
  };

  const handleHourChange2 = (val) => {
    const newHour = Number(val);
    if (newHour >= 0 && newHour <= 24) {
      setHour2(newHour);
    } else {
      Alert.alert("Invalid Input", "Hour must be between 0 and 24");
    }
  };

  const handleMinuteChange2 = (val) => {
    const newMinute = Number(val);
    if (newMinute >= 0 && newMinute < 60) {
      setMinute2(newMinute);
    } else {
      Alert.alert("Invalid Input", "Minute must be between 0 and 59");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter hour"
        keyboardType="numeric"
        value={String(hour)}
        onChangeText={handleHourChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter minute"
        keyboardType="numeric"
        value={String(minute)}
        onChangeText={handleMinuteChange}
      />
      <Button title="Submit" onPress={onSubmit} />

      <TextInput
        style={styles.input}
        placeholder="Enter hour for second notification"
        keyboardType="numeric"
        value={String(hour2)}
        onChangeText={handleHourChange2}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter minute for second notification"
        keyboardType="numeric"
        value={String(minute2)}
        onChangeText={handleMinuteChange2}
      />
      <Button title="Submit" onPress={onSubmit2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
