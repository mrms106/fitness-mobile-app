import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert } from "react-native";

export default function SetNotification() {
  const [hour, setHour] = useState(7);
  const [minute, setMinute] = useState(0);

  // Function to handle submission
  const onSubmit = () => {
    console.log("Hour:", hour, "Minute:", minute);
    Alert.alert("Submitted", `Hour: ${hour}, Minute: ${minute}`);
  };

  // Function to handle hour input with limit
  const handleHourChange = (val) => {
    const newHour = Number(val);
    if (newHour >= 0 && newHour <= 24) {
      setHour(newHour);
    } else {
      Alert.alert("Invalid Input", "Hour must be between 0 and 24");
    }
  };

  // Function to handle minute input with limit
  const handleMinuteChange = (val) => {
    const newMinute = Number(val);
    if (newMinute >= 0 && newMinute < 60) {
      setMinute(newMinute);
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
