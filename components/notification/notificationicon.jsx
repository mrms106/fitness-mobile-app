import { StyleSheet, TouchableOpacity } from "react-native";
import Icons2 from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

export default function NotificationIcon(){
    const navigation=useNavigation()
    return(
        <TouchableOpacity style={styles.noti} onPress={()=>navigation.navigate("Setnotification")}>
                <Icons2 name="notifications" size={25} color={'gray'} />
            </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    noti: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 25
    },
})