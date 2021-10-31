import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Presentation from './src/screens/Presentation';
import Introduction from './src/screens/Introduction';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
  
    const [ loaded ] = useFonts({
      Capriola: require('./assets/Capriola-Regular.ttf'),
      
    })
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
         }}>
    
    <Stack.Screen name = "Presentation" component={Presentation}/>
    <Stack.Screen name = "Introduction" component={Introduction}/>
      </Stack.Navigator>


    </NavigationContainer>
  );
}

