import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconsNoti from "../notification/icon";
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
           <IconsNoti/>
           
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
   
    exrsize:{
    fontSize:28,
    color:'black',
     margin:15,
    fontFamily:'Ubuntu-Bold',
    }
})