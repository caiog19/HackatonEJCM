import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Presentation from './src/screens/Presentation';
import Home from './src/screens/home';
import { useFonts } from 'expo-font';
import PurpleButton from './src/components/PurpleButton';
import Informations from './src/screens/Informations';
import Introduction from './src/screens/Introduction';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Register2 from './src/screens/Register2';
import Avaliacao from './src/screens/Avaliacao';
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
           
           <Stack.Screen name = "Informations" component = {Informations}/>
      <Stack.Screen name = "av" component = {Avaliacao}/>
    <Stack.Screen name = "Presentation" component={Presentation}/>
    <Stack.Screen name = "Introduction" component={Introduction}/>
    <Stack.Screen name = "Login" component = {Login}/>
    <Stack.Screen name = "Register" component = {Register}/>
    <Stack.Screen name = "Register2" component = {Register2}/>  
    
                  
      </Stack.Navigator>


    </NavigationContainer>
  );
}

