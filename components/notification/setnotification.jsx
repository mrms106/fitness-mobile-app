import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Alert, Touchable, TouchableOpacity, Text } from "react-native";
import { useNotification } from './NotificationContext';
import Icon from 'react-native-vector-icons/Entypo'
import Icon2 from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
export default function SetNotification() {
  const navigation=useNavigation()
  const { setNotificationTime, setNotificationTime2 } = useNotification();
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour2, setHour2] = useState(0);
  const [minute2, setMinute2] = useState(0);

  const onSubmit = async () => {
    try {
      await setNotificationTime(hour, minute);
      Alert.alert("Saved", `Reminder set for Hour: ${hour}, Minute: ${minute}`);
    } catch (e) {
      console.error("Failed to save notification time.", e);
    }
  };

  const onSubmit2 = async () => {
    try {
      await setNotificationTime2(hour2, minute2);
      Alert.alert("Saved", `Reminder set for Hour: ${hour2}, Minute: ${minute2}`);
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
      <Text style={{fontSize:30,color:'black', marginBottom:15,marginTop:70,fontFamily:'Ubuntu-Medium'}}>Add reminder</Text>
      <Text style={{fontSize:15,color:'black' ,fontFamily:'Ubuntu-Medium'}}>Add for morning workout</Text>
      <View style={styles.maininput}>
        
     <View style={styles.inputview}>
     <View style={{flexDirection:'column'}}>
     <TextInput
        style={styles.input}
        placeholder="Enter hour"
        keyboardType="numeric"
        value={String(hour)}
        onChangeText={handleHourChange}
      />
      <Text style={styles.inputtext}>Hour</Text>
      </View>
       <View style={{flexDirection:'column'}}>
      <TextInput
        style={styles.input}
        placeholder="Enter minute"
        keyboardType="numeric"
        value={String(minute)}
        onChangeText={handleMinuteChange}
      />
      <Text style={styles.inputtext}>Min</Text>
      </View>
     </View>
     <View style={{justifyContent:'center'}}>
      <TouchableOpacity  onPress={onSubmit} style={styles.iconbtn}><Icon name="plus" size={40} color={'white'} /></TouchableOpacity>
      </View>
      </View>
      <Text style={{fontSize:15,color:'black',fontFamily:'Ubuntu-Medium'}}>Add for Evening workout</Text>
      <View style={styles.maininput}>
      <View style={styles.inputview}>
      <View style={{flexDirection:'column'}}>
      <TextInput
        style={styles.input}
        placeholder="Enter hour for second notification"
        keyboardType="numeric"
        value={String(hour2)}
        onChangeText={handleHourChange2}
      />
      <Text style={styles.inputtext}>Hour</Text>
      </View>
      <View style={{flexDirection:'column'}}>
      <TextInput
        style={styles.input}
        placeholder="Enter minute for second notification"
        keyboardType="numeric"
        value={String(minute2)}
        onChangeText={handleMinuteChange2}
      />
      <Text style={styles.inputtext}>Min</Text>
      </View>
      </View>
      <View style={{justifyContent:'center'}}>
      <TouchableOpacity  onPress={onSubmit2} style={styles.iconbtn} ><Icon name="plus" size={40} color={'white'}/></TouchableOpacity>
      </View>
      </View>
      <TouchableOpacity style={styles.backbtn} onPress={()=>navigation.goBack()}>
                <Icon2 style={styles.btnicon} name="caretleft"/></TouchableOpacity>
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
    paddingHorizontal: 10,
    width:80,
    height:60,
    margin:2,
    borderRadius:15,
    fontSize:25,
    textAlign:'center',
    padding:5,
    borderColor:'white',
    color:'white',
    marginLeft:10,
    fontFamily:'Ubuntu-Medium'

  },
  inputview:{
    flexDirection:'row',
    width:230,
    height:120,
    backgroundColor:'gray',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    margin:10,
  },
  maininput:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  inputtext:{
    textAlign:'center',
    color:'white',
    fontFamily:'Ubuntu-Medium'
  },

  iconbtn:{
    justifyContent:'center',
    alignItems:'center',
    width:100,
    height:100,
    backgroundColor:'skyblue',
    borderRadius:25,
  },
  backbtn:{
    width:50,
    height:50,
    backgroundColor:'red',
    padding:13,
    borderRadius:25,
    position: 'absolute',
    top: 14,  
    left: 15,
},
btnicon:{
  color:'white',
  fontSize:25
},
});
