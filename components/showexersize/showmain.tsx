import React from "react";
import { View, Text, StyleSheet,TouchableOpacity, ScrollView } from "react-native";
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
    <View style={{flex:1}}>
        <FastImage
            style={styles.showgif}
            source={{ uri: item.gifUrl }}
            resizeMode={FastImage.resizeMode.cover} 
        />
        <TouchableOpacity style={styles.closebtn} onPress={()=>navigation.goBack()}>
                <Icon style={styles.closeicon} name="cross"/></TouchableOpacity>
                <Text style={styles.showexrsizetext}>{item.name} </Text>
        <ScrollView style={{marginTop:20,marginBottom:20}}>
            <Text style={styles.outertxt}>Equipment <Text style={styles.innertxt}>{item.equipment}</Text></Text>
            <Text style={styles.outertxt}>Secondary Muscules 
            {
            item.secondaryMuscles && item.secondaryMuscles.length>0 && item.secondaryMuscles.map((val:string)=>(
                 <Text style={styles.innertxt}> {val},</Text>
            ))
            }
            </Text>
            <Text style={styles.outertxt}>Target <Text style={styles.innertxt}>{item.target}</Text></Text>
            <Text style={styles.instrmain}>Instruction</Text>
            {
                 item.instructions && item.instructions.length>0 && item.instructions.map((val:string)=>(
                    <Text style={styles.instrtext} > {val},</Text>
               ))
            }
        </ScrollView>
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
},
outertxt:{
marginLeft:25,
marginBottom:5,
fontSize:16,
color:'black',
fontFamily:'Ubuntu-Light'
},
innertxt:{
fontFamily:'Ubuntu-Bold',
},
instrmain:{
    fontSize:22,
    fontFamily:'Ubuntu-Medium',
    marginLeft:15,
    marginTop:10,
    marginBottom:10,
    color:'black'
},
instrtext:{
    marginBottom:7,
    color:'black',
    marginLeft:20,
    fontSize:15,
    fontFamily:'Ubuntu-Light'
}
})