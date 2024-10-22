import React, { useState, useEffect } from "react";
import { View, Button, Text, TextInput } from "react-native";
import { geminiApi } from "../../api"; // Assuming this imports your API key

export default function MainAi(): React.JSX.Element {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState([]);

  const fetchResponse = async () => {
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
          throw new Error(`Error: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);  // Handle the response data
        setResponse(data.candidates)
      } catch (error) {
        console.error('Error making the request:', error.message);
      }
    }

  useEffect(() => {
    // Don't call fetchResponse within useEffect unless required for initial data
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Enter your prompt"
        value={prompt}
        onChangeText={setPrompt}
      />
      <Button title="Send" onPress={fetchResponse} />
      {
        response.map((item)=>(
            item.content.parts.map((text)=>(
                <Text>{text.text}</Text>
            ))
        ))
      }
    </View>
  );
}