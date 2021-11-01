import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Presentation from './src/screens/Presentation';
import { useFonts } from 'expo-font';
import PurpleButton from './src/components/PurpleButton';
import Informations from './src/screens/Informations';
import Introduction from './src/screens/Introduction';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Register2 from './src/screens/Register2';
import Avaliacao from './src/screens/Avaliacao';
import Lista_pets from './src/screens/List_pets';
import Home from './src/screens/home';
import Info_Pet from './src/screens/Info_pet';
import { VscHome } from 'react-icons/vsc'
import {AiFillInfoCircle} from 'react-icons/ai'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Finaliza_Adocao from './src/screens/Finaliza_Adocao';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabarOptions = {{ backgroundColor:'#547' }}>
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => (<VscHome color={color} size={'27px'} />) }}/>

      <Tab.Screen name="Informação" component={Informations} options={{ tabBarIcon: ({ color }) => (<AiFillInfoCircle color={color} size={'25px'} />) }} />
    </Tab.Navigator>
  )
}

export default function App() {
  
    const [ loaded ] = useFonts({
      Capriola: require('./assets/Capriola-Regular.ttf'),
      
    })
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
         }}>
     <Stack.Screen name = "TabBar" component = {HomeTabs}/>    
    <Stack.Screen name = "Presentation" component={Presentation}/>
    <Stack.Screen name = "Introduction" component={Introduction}/>
    <Stack.Screen name = "Login" component = {Login}/>
    <Stack.Screen name = "Register" component = {Register}/>
    <Stack.Screen name = "Register2" component = {Register2}/>  
    
     <Stack.Screen name = "av" component = {Avaliacao}/>  
     <Stack.Screen name = "List" component = {Lista_pets}/> 
     <Stack.Screen name = "Info_pet" component = {Info_Pet}/>   
      <Stack.Screen name = "Fim" component = {Finaliza_Adocao}/>

      </Stack.Navigator>


    </NavigationContainer>
  );
}

