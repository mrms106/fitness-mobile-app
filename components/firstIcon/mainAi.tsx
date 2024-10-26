import React, { useState, useEffect } from "react";
import { View, Button, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator, Alert } from "react-native";
import { geminiApi } from "../../api"; // Assuming this imports your API key
import Icons2 from 'react-native-vector-icons/Feather';
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

interface Part {
    text: string;
  }
  
  interface Content {
    parts: Part[];
  }
  
  interface Item {
    content: Content[];
  }
export default function MainAi(): React.JSX.Element {

    const [prompt, setPrompt] = useState<string>('');  
    const [response, setResponse] = useState<Item[]>([]);  
    const [showprompt, setshowprompt] = useState<string>('');
    const [isloading,setisloading]=useState<boolean>(false)
  
  const navigation=useNavigation()
  const fetchResponse = async () => {
    setisloading(true)
    setshowprompt(prompt)
    try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApi}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    { text: prompt }
                  ]
                }
              ]
            }),
          }
        );
       
        if (!response.ok) {
          // throw new Error(`Error: ${response.status}`);
          setisloading(false)
          setshowprompt("something went wrong please try after some time")
        }
        
         
        const data = await response.json();
        console.log(data);  // Handle the response data
        setisloading(false)
        setResponse(data.candidates)
      } catch (error:any) {
        console.error('Error making the request:', error.message);
        setisloading(false)
        setshowprompt(error.message)
      }
    }
const onsubmit=()=>{
   if(!prompt.trim()){
    return Alert.alert("Enter a valid prompt","prompt can`t be a empty")
   }
    fetchResponse()
    setPrompt('')
}
  useEffect(() => {
    // Don't call fetchResponse within useEffect unless required for initial data
  }, []);

  return (
    
    <>
    <View style={{flex:1}} >
    <TouchableOpacity style={styles.btn} onPress={()=>navigation.goBack()}><Icon size={24} color={"white"} name="caretleft"/></TouchableOpacity>
       <ScrollView>
       <View style={styles.showpromtmain}>
       <Text style={styles.showpromt}>{showprompt || "ask for tips to the Ai"}  </Text>
       </View>
       <View>
         {
         isloading ? <Text style={styles.respocetext}>Generating-Response <ActivityIndicator size={25} color={'black'}/> </Text> 
         :
        response.map((item)=>(
            item.content.parts.map((text)=>(
               
                <Text style={styles.respocetext}>{text.text}</Text>
                
            ))
        ))
      }
      </View>
      </ScrollView>
      
    <View style={styles.maininput}>
      <TextInput
        placeholder="Enter your prompt"
        placeholderTextColor={'gray'}
        value={prompt}
        onChangeText={setPrompt}
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn} onPress={onsubmit}><Icons2 size={28} color={'white'} name="send"/></TouchableOpacity>
    </View>
    

    </View>
    </>
    
  );
}

const styles=StyleSheet.create({
   
    maininput:{
       justifyContent:'flex-end',
       alignItems:'flex-end',
       flexDirection:'row',
       flex:1,
       marginBottom:20
        
    },
    input:{
        borderWidth:1,
        width:'80%',
        height:60,
        borderRadius:20,
        color:'black',
        fontSize:17,
        fontFamily:'Ubuntu-Medium',
        padding:15,
        borderColor:'gray',
        backgroundColor:"#f5f5f5"
    },
    btn:{
       
        margin:5,
        width:60,
        height:50,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red'
    },
    showpromtmain:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
    marginTop:30
    
    },
    showpromt:{
       padding:10,
       margin:10,
       borderRadius:10,
       fontSize:17,
       color:'white',
       backgroundColor:'red',
       fontFamily:'Ubuntu-Medium'
    },
    respocetext:{
        padding:10,
        margin:15,
        borderRadius:10,
        fontSize:18,
        color:'black',
        fontFamily:'Ubuntu-Medium',
        marginBottom:50,
    
  
    },
    
})