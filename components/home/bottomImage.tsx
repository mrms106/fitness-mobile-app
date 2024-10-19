import React from "react";
import back from '../../assets/images/back.png'
import cardio from '../../assets/images/cardio.png'
import chest from '../../assets/images/chest.png'
import lowerarm from '../../assets/images/lowerArms.png'
import lowerleg from '../../assets/images/lowerLegs.png'
import neck from '../../assets/images/neck.png'
import shoulder from '../../assets/images/shoulders.png'
import upperArm from '../../assets/images/upperArms.png'
import upperLeg from '../../assets/images/upperLegs.png'
import waist from '../../assets/images/waist.png'
import { Image, StyleSheet } from "react-native";

export default function BottomImage():React.JSX.Element{
    return(
    <>
      <Image source={back} style={style.btmimg}/>
    </>
    )
}

const style=StyleSheet.create({
    btmimg:{
        width:100,
        height:100
    }
})