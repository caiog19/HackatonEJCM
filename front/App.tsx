import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Presentation from './src/screens/Presentation';
import Home from './src/screens/home';
import { useFonts } from 'expo-font';
import PurpleButton from './src/components/PurpleButton';
import Informations from './src/screens/Informations';
import TabBar from './src/components/TabBar';

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
    <Stack.Screen name = "Home" component={Home}/>
    
    
      </Stack.Navigator>


    </NavigationContainer>
  );
}

