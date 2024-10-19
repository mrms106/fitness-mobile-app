import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HeaderName():React.JSX.Element{
    return(
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
            <View style={styles.profile}></View>
            <View style={styles.noti}></View>
           </View>
        </View>
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
         width:40,
         height:40,
         backgroundColor:'black',
         borderRadius:25,
         marginBottom:7
    },
    noti:{
        width:40,
        height:40,
        backgroundColor:'black',
        borderRadius:25
    }
})