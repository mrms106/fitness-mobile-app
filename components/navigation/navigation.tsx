import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home/home';
import ExersizeMain from '../exersize/main';
// A simple Login component (Homecmpnt)
function Homecmpnt() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
    </View>
  );
}

// Create a Stack Navigator
const Stack = createNativeStackNavigator();

// Main navigation component
export default function Nav(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"  component={ExersizeMain} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Homecmpnt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
