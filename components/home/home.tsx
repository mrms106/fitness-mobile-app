import React from "react";
import { View } from "react-native";
import HeaderName from "./headerName";
import BottomImage from "./bottomImage";
export default function Home():React.JSX.Element{
    return(
        <View>
              <HeaderName/>
              <BottomImage/>
        </View>
    )
}