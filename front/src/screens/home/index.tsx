import React, { useEffect, useState } from 'react';
import { ImageComponent, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {BiLogOut} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import {RiLogoutBoxRLine} from 'react-icons/Ri'
import { useNavigation } from '@react-navigation/native';
import {GiAlliedStar} from 'react-icons/Gi'
import {Cabecalho,
        Corpo,
        Navbar,
        Cachorros,
        Gatos,
        Roedores,
        BackGroundHome, 
        Divcor1,
        Divcor2,
        Divcor3,
        Logo,
        Dog,
        Cat,
        Pig,
        Text1,
        Text2,
        Text3,
        BackIcons,
        Circle

       

} from './styles';

export default function Home(){

    const navigation = useNavigation();
return(

    <BackGroundHome>
        <Cabecalho >
        <BackIcons>
            <Circle onPress={() => navigation.navigate('av')}>
              <AiFillStar  color={"yellow"} size={'20px'}></AiFillStar>
            </Circle>
            <TouchableOpacity onPress={() => navigation.navigate('Presentation')}>
              <BiLogOut color={"#57429D"} size={'30px'}></BiLogOut>
            </TouchableOpacity>
            </BackIcons>
        <Logo source={require('../../../assets/smallerLogo.png')}></Logo>
        
        </Cabecalho>
        <Corpo>
            
            <Cachorros onPress={() => navigation.navigate('List')}>
                <Divcor1>
                    <Text1>Cães</Text1>
                <Dog source={require('../../../assets/dog.png')}></Dog>

                </Divcor1>
                
            </Cachorros>
            <Gatos onPress={() => navigation.navigate('List')}>
                <Divcor2>
                <Text2>Gatos</Text2>
                <Cat source={require('../../../assets/cat.png')}></Cat>
                </Divcor2>
            </Gatos>
            <Roedores onPress={() => navigation.navigate('List')}>
                <Divcor3>
                <Text3>Roedores</Text3>
                <Pig source={require('../../../assets/pig.png')}></Pig>
                </Divcor3>
            </Roedores>
        </Corpo>
        <Navbar>

        </Navbar>
    </BackGroundHome>
)

};