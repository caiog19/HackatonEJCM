import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FiHome } from 'react-icons/fi';
import Home from '../../screens/Home';
import Informations from '../../screens/Informations';

const Tab = createBottomTabNavigator();

function TabBar(){

    return(

      <Tab.Navigator tabBarOptions={{showLabel: false}}>
  
        <Tab.Screen name="Information" component={Informations} options={{tabBarIcon:({color, size}) => (<FiHome color="#284B63" size={size}/>)}} />
         <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color, size}) => (<FiHome color="#37739b" size={size}/>)}} />
         
      </Tab.Navigator>

    );
  }

export default TabBar