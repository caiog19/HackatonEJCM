import React from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { BackGroundHome, Back1, Back2, TextButton, Adote, ImgPet, Nome, Info, Info1,View0, View1, View2, Back} from './style';
import {BsGenderMale} from 'react-icons/Bs'
import {IoReturnUpBack} from 'react-icons/io5'


export default function Info_Pet() {
  return (
    <BackGroundHome>
        <Back1>
            <Back><IoReturnUpBack color={"#fff"} size={'30px'}></IoReturnUpBack></Back>
            <Nome>Ringo</Nome>
            <ImgPet style={{zIndex:20}} source={require('../../../assets/Ringo.png')}></ImgPet>
        </Back1>
        <Back2  style={{zIndex:10}}>
            <View0>
            <View1>
            <BsGenderMale color={"#57429D"} size={'30px'}></BsGenderMale>
            <Info>pequeno porte</Info></View1>
            <View1>
            <Info>1 ano e 6 meses</Info>
            <Info>Vira-lata</Info></View1>
           </View0>
            <View2>
                <Info1>Ringo, está pronto para correr atrás de todos os gravetos e não vai permitir que ninguém coma na sua tigela.</Info1>
            </View2>
            <Adote><TextButton>Adote já</TextButton></Adote>
        </Back2>

    </BackGroundHome>
  );
}