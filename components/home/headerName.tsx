import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icons from 'react-native-vector-icons/FontAwesome'
import Icons2 from 'react-native-vector-icons/Ionicons'
import Imagecmp from "./images";


export default function HeaderName():React.JSX.Element{
    return(
    <>
        <View style={styles.mainheader}>
           <View style={styles.maintitle}>
           <Text style={styles.title1}>
                READY TO
            </Text>
            <Text style={styles.title2}>
                 WORKOUT
            </Text>
           </View>
           <View style={styles.section2}>
            <View style={styles.profile}>
            <Icons2 name="person-outline" size={25} color={'black'}/>
            </View>
            <View style={styles.noti}>
            <Icons2 name="notifications" size={25} color={'gray'}/>
            </View>
           </View>
           
        </View>
        <Imagecmp/>
        <Text style={styles.exrsize}>Exersizes</Text>
      </>  
    )
}

const styles=StyleSheet.create({
    mainheader:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:20
    },
    maintitle:{
      marginLeft:20,
    },
    title1:{
      fontSize:35,
      color:'black',
      textDecorationStyle:'solid',
      fontFamily:'Ubuntu-Bold'

    },
    title2:{
        fontSize:35,
        color:'red',
        textDecorationStyle:'solid',
        fontFamily:'Ubuntu-Bold',
        marginTop:5
    },
    section2:{
      marginRight:15,
    },
    profile:{
         padding:10,
         borderRadius:25,
         marginBottom:7,
         borderColor:'gray',
         borderWidth:1
    },
    noti:{
        borderColor:'gray',
         borderWidth:1,
        padding:10,
        borderRadius:25
    },
    exrsize:{
    fontSize:28,
    color:'black',
     margin:15,
    fontFamily:'Ubuntu-Bold',
    }
})