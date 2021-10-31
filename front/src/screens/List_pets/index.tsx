import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, ScrollView } from 'react-native';
import { BackGroundHome, Back1, BackCard, TextCard, Card, Logo, ImgPet, BackLogo, BackIcons, Circle, BackText} from './style';
import {BsGenderMale} from 'react-icons/Bs'
import {BiLogOut} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import { useNavigation } from '@react-navigation/native';

export default function Lista_pets() {
  
  return (
    <BackGroundHome>
        <Back1>
          <BackIcons>
            <Circle>
              <AiFillStar  color={"yellow"} size={'20px'}></AiFillStar>
            </Circle>
            <TouchableOpacity>
              <BiLogOut color={"#57429D"} size={'30px'}></BiLogOut>
            </TouchableOpacity>
            </BackIcons>
          <BackLogo>
            <Logo  source={require('../../../assets/logo.png')}></Logo>
          </BackLogo>
        </Back1>
        <BackCard>
          <Card><ImgPet source={require('../../../assets/Ringo-C.png')}></ImgPet>
          <BackText>
            <TextCard>Ringo</TextCard>
            <TextCard>6 meses</TextCard>
            </BackText></Card>
            
             <Card ><ImgPet source={require('../../../assets/Ringo-C.png')}></ImgPet>
          <BackText>
            <TextCard>Ringo</TextCard>
            <TextCard>6 meses</TextCard>
            </BackText></Card>
            <Card><ImgPet source={require('../../../assets/Ringo-C.png')}></ImgPet>
          <BackText>
            <TextCard>Ringo</TextCard>
            <TextCard>6 meses</TextCard>
            </BackText></Card>
            
          
        </BackCard>
     
    </BackGroundHome>
  );
}