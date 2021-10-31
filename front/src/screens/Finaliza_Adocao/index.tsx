import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import { BackGroundHome, Back1, BackCenter, Title, Title1, Buttons, Logo, Lado, Info1, Area, Comunicado, BackLogo, BackIcons, TextParabens, Info} from './style';
import {AiTwotoneAppstore} from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import { useNavigation } from '@react-navigation/native';
import { BackCard } from '../List_pets/style';

export default function Finaliza_Adocao() {
  
  return (
    <BackGroundHome>
        <Back1>
          <BackIcons>
           
            </BackIcons>
          <BackLogo>
            <Logo  source={require('../../../assets/logo.png')}></Logo>
          </BackLogo>
        </Back1>
        <BackCenter>
          <Title>Confirmação de
             Adoção</Title>
             <TextParabens>Parabéns, Ringo já está te esperando!! </TextParabens>
             <Area><Comunicado>Compareça na Rua dos Alfeneiros, 4 e retire seu pet.</Comunicado></Area>
            <Title1> Gostaria de realizar uma doação ?</Title1>
            <Buttons><AiTwotoneAppstore color={"#fff"} size={'30px'}></AiTwotoneAppstore><Info>Pix</Info></Buttons>
            <Buttons><Info>Não quero doar</Info></Buttons>
        </BackCenter>
        
     
    </BackGroundHome>
  );
}