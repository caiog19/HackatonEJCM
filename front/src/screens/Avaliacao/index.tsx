import React, { useEffect, useState } from 'react';
import { ImageComponent, ScrollView, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import {RiLogoutBoxRLine} from 'react-icons/Ri'


import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel,
  } from 'react-native-simple-radio-button';



import {Background,
        Cabecalho,
        Logo,
        Corpo,
        Tititulo1,
        BotoesAvaliacao,
        TituloComentario,
        Comentario,
        BotaoAvaliar,
        Patinhas,
        TabBar,
        BotaoVoltar,
        BotaoSair

} from './styles';

const avali =[
    {label: '1', value:0},
    {label: '2', value:1},
    {label: '3', value:2},
    {label: '4', value:3},
    {label: '5', value:5},

];


export default function Avaliacao(){
    
    
    
    return (
        <Background>
            <Cabecalho>
                <BotaoVoltar>
                <AntDesign name="back" size={30} color="#57429D" onPress={() => navigation.goBack()}/>
                </BotaoVoltar>
                <View>
                    <Logo source={require('../../../assets/logo.png')}></Logo>
                </View>
                <BotaoSair>
                <RiLogoutBoxRLine name="back" size={30} color="#57429D" onPress={() => navigation.goBack()}/>
                </BotaoSair>
            </Cabecalho>
            <Corpo>
                <Tititulo1> Como você avalia os nossos serviços?</Tititulo1>
                <BotoesAvaliacao>
                   <RadioForm radio_props={avali}
                   initial={-1}
                   onPress={(value) => {}}
                   labelStyle={{fontSize:25, color:'#57429D', fontFamily:'Capriola'}}
                   formHorizontal={true}
                   labelHorizontal={false}
                   buttonColor={'#C4C4C4'}
                   
                   />
                </BotoesAvaliacao>
                <TituloComentario>Comentário</TituloComentario>
                <Comentario></Comentario>
                <BotaoAvaliar>Avaliar</BotaoAvaliar>
                <Patinhas></Patinhas>
            </Corpo>
            <TabBar></TabBar>
        </Background>



    )};