import { useEffect, useState } from "react"
import { Text, View } from "react-native";
import { apiKey,host } from "../../api";

export default function ExersizeMain(){
    const[data,setdata]=useState([])

    const fetchData=async()=>{

        const url="https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0"

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
          <View>
           {
            data.map((item)=>(
                <Text>{item.id}</Text>
            ))
           }
          </View>
        </>
    )
}