import { StyleSheet, TouchableOpacity,View } from "react-native";
import Icons2 from 'react-native-vector-icons/Ionicons';
import Icons3 from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";

export default function NotificationIcon(){
    const navigation=useNavigation()
    return(
        <View style={styles.section2}>
        <TouchableOpacity style={styles.profile} onPress={()=>navigation.navigate("Geminiai")}>
        <Icons3 name="chat" size={25} color={'black'} />
      </TouchableOpacity>
        <TouchableOpacity style={styles.noti} onPress={()=>navigation.navigate("Setnotification")}>
                <Icons2 name="notifications" size={25} color={'gray'} />
            </TouchableOpacity>
            </View>
    )
}

const styles=StyleSheet.create({
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
    noti: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 25
    },
})