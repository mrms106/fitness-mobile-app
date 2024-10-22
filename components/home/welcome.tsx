import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import welcomeimg from '../../assets/images/welcome.png'
import Icons2 from 'react-native-vector-icons/AntDesign';

export default function WlcomeScreen({setiswelcome}):React.JSX.Element{
    return(
        <View style={{justifyContent:'center',alignItems:'center', alignContent:'center' }}>
             <Image source={welcomeimg} style={styles.wlcmimg} />
             <TouchableOpacity style={styles.backbtn} onPress={()=>setiswelcome(false)}><Text style={styles.btntxt}>Getting Started </Text><Icons2 size={30} color={'white'} name="arrowright"/></TouchableOpacity>

             <View style={styles.textmain}>
                <Text style={styles.text1}>Best <Text style={{color:'red'}}>WorkOuts</Text></Text>
             </View>
        </View>
    )
}

const styles=StyleSheet.create({
    wlcmimg:{
       width:'100%',
       height:'100%',
       position:'relative',
       opacity:0.98
    },
    backbtn:{
        borderColor:'white',
        borderWidth:1,
        width:250,
        height:60,
        backgroundColor:'red',
        borderRadius:25,
        position: 'absolute',
        bottom: 80,  
        left: '25%',
        padding:10,
        flexDirection:'row'
    },
    btntxt:{
        textAlign:'center',
        color:'white',
        fontSize:25,
        fontFamily:'Ubuntu-Medium'
    },
    textmain:{
        position:'absolute',
        bottom:20,
        left:50,

    },
    text1:{
        color:'white',
        fontSize:40,
        fontFamily:'Ubuntu-Medium',
        marginLeft:'7%'
    }
})