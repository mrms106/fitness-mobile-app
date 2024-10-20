import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import { RouteProp } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";


type ShowMainRouteProps = RouteProp<{ params: { item: Record<string, any> } }, 'params'>;

interface ShowMainProps {
  route: ShowMainRouteProps;
}

export default function ShowMain({ route }: ShowMainProps): React.JSX.Element {
  const navigation=useNavigation()
  const { item } = route.params;

  return (
    <View>
        <FastImage
            style={styles.showgif}
            source={{ uri: item.gifUrl }}
            resizeMode={FastImage.resizeMode.cover} 
        />
        <TouchableOpacity style={styles.closebtn} onPress={()=>navigation.goBack()}>
                <Icon style={styles.closeicon} name="cross"/></TouchableOpacity>
                <Text style={styles.showexrsizetext}>{item.name} </Text>
    </View>
  );
}

const styles=StyleSheet.create({
showgif:{
    width:'100%',
     height:450,
     borderBottomRightRadius:50,
     borderBottomLeftRadius:50
},
closebtn:{
    width:50,
    height:50,
    backgroundColor:'red',
    padding:8,
    borderRadius:25,
    position: 'absolute',
    top: 14,  
    right:15
},
closeicon:{
    color:'white',
    fontSize:35
},
showexrsizetext:{
    textAlign:'center',
    fontSize:28,
    color:'black',
    fontFamily:'Ubuntu-Medium',
    marginTop:10
}
})