import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home/home';
import ExersizeMain from '../exersize/main';
import ShowMain from '../showexersize/showmain';
import SetNotification from '../notification/setnotification';
import MainAi from '../firstIcon/mainAi';


const Stack = createNativeStackNavigator();

// Main navigation component
export default function Nav(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"  component={Home} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Exersize" component={ExersizeMain}
        options={{headerShown:false}} />
      <Stack.Screen name="ShowExersize" component={ShowMain}
        options={{headerShown:false}} />
         <Stack.Screen name="Setnotification" component={SetNotification}
        options={{headerShown:false}} />
        <Stack.Screen name="Geminiai" component={MainAi}
        options={{headerShown:false}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
