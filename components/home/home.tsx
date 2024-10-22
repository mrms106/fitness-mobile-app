import React, { useState } from "react";
import { View ,Text} from "react-native";
import HeaderName from "./headerName";
import BottomImage from "./bottomImage";
import WlcomeScreen from "./welcome";
export default function Home():React.JSX.Element{
    const[iswelcome,setiswelcome]=useState(true)

    if(iswelcome){
        return(
            <WlcomeScreen setiswelcome={setiswelcome}/>
        )
    }
    return(
        <View>

              <HeaderName/>
              <BottomImage/>   
        </View>
    )
}