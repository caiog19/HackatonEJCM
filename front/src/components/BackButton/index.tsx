import React from "react";
import { View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { ViewBackButton } from "./style";

export default function BackButton() {
    const navigation = useNavigation();
    return (
        <View style={{marginTop:'5%', marginLeft:'5%'}}>
        <ViewBackButton> 
        
        <AntDesign name="back" size={24} color="#57429D" onPress={() => navigation.goBack()}/>
        
        </ViewBackButton>
        </View>
   );

}