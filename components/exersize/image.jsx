import { View,TouchableOpacity,Image,StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export default function ExersixeImg({exersizetype}){
    const navigation=useNavigation()
    return(
        <View>
              <Image style={styles.exersizeImg} source={exersizetype.image} />
              <TouchableOpacity style={styles.backbtn} onPress={()=>navigation.goBack()}>
                <Icon style={styles.btnicon} name="caretleft"/></TouchableOpacity>
                <Text style={styles.exrsizetext}>{exersizetype.label} Exersizes</Text>
           </View>
    )
}
const styles=StyleSheet.create({
    exersizeImg:{
     width:'100%',
     height:450,
     borderBottomRightRadius:50,
     borderBottomLeftRadius:50
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
    exrsizetext:{
        textAlign:'center',
        fontSize:28,
        color:'black',
        fontFamily:'Ubuntu-Medium',
        marginTop:10
    }
})