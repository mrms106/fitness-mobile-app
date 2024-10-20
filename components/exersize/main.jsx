import { useEffect, useState } from "react"
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { apiKey,host } from "../../api";
import ExersixeImg from "./image";
import FastImage from 'react-native-fast-image';

export default function ExersizeMain({route}){
    const[data,setdata]=useState([])
    const { exersizetype } = route.params;
    const type=exersizetype.label
    console.log(exersizetype)
    const fetchData=async()=>{

        const url=`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${type}?limit=20&offset=0`

        const options = {
            method: 'GET',
            port: null,
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host':host
            }
        };
        const responce=await fetch(url,options)
        if(responce.ok){
            const result=await responce.json()
            setdata(result)
            console.warn(data)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <>
           <View style={{flex:1}}>
              <ExersixeImg exersizetype={exersizetype}/>
              <View style={{flex:1,marginBottom:20}}>
              <FlatList
              numColumns={2}
              data={data}
              renderItem={({item})=>
                <View >
                 <FastImage
                    style={styles.gif}
                    source={{ uri: item.gifUrl }}
                    resizeMode={FastImage.resizeMode.cover} 
                />

                   <Text style={styles.gifname}>
                     {item.name.length > 14 ? item.name.slice(0, 14) + "..." : item.name}
                    </Text>
                </View>
                
            }
              />
              </View>
           </View>

        </>
    )
}

const styles=StyleSheet.create({
    gif:{
        width:170,
        height:170,
        margin:10,
        marginLeft:20,
        borderRadius:20
    },
    gifname:{
        marginLeft:20,
        textAlign:'center',
        color:'black',
        fontFamily:'Ubuntu-Medium',
        fontSize:15
    }
})