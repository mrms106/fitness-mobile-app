import React from "react";
import { Image, StyleSheet, ScrollView, View, Text } from "react-native";
import back from '../../assets/images/back.png';
import cardio from '../../assets/images/cardio.png';
import chest from '../../assets/images/chest.png';
import lowerarm from '../../assets/images/lowerArms.png';
import lowerleg from '../../assets/images/lowerLegs.png';
import neck from '../../assets/images/neck.png';
import shoulder from '../../assets/images/shoulders.png';
import upperArm from '../../assets/images/upperArms.png';
import upperLeg from '../../assets/images/upperLegs.png';
import waist from '../../assets/images/waist.png';

export default function BottomImage(): React.JSX.Element {
    const data = [
        { image: back, label: "Back" },
        { image: cardio, label: "Cardio" },
        { image: chest, label: "Chest" },
        { image: lowerarm, label: "LowerArm" },
        { image: lowerleg, label: "LowerLeg" },
        { image: neck, label: "Neck" },
        { image: shoulder, label: "Shoulder" },
        { image: upperArm, label: "UpperArm" },
        { image: upperLeg, label: "UpperLeg" },
        { image: waist, label: "Waist" }
      ];
      

    return (
        <ScrollView>
            <View style={styles.container}>
                {data.map((item, index) => (
                    <View key={index} style={styles.imageWrapper}>
                        <Image style={styles.btmimg} source={item.image} />
                        <View style={styles.overlay}></View>
                        <Text style={styles.btmimgtxt}>{item.label}</Text>
                       
                    </View>
                    
                ))}
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Allows wrapping of the images
        justifyContent: 'center',
        marginBottom:400
    },
    imageWrapper: {
        width: '45%', // Adjusted to fit two images in a row (with some margin)
        alignItems: 'center', // Center the image horizontally
        margin: 10,
    },
    btmimg: {
        width: 170,
        height: 190,
        borderRadius: 17,
    },
    btmimgtxt:{
        color:'white',
        fontSize:20,
        marginTop:-27,
        marginBottom:10,
        fontFamily:'Ubuntu-Bold'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 7,
        right: 7,
        bottom: 7,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', 
        borderRadius: 17, 
      },
});
