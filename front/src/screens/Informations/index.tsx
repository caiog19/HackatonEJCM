import React from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { Logo } from '../Login/style'
import { Title, Text, Container, Text2, Maps } from './style'
import BackButton from '../../components/BackButton'
import MapView from 'react-native-maps';

export default function Informations() {

    return (
        
            <ScrollView>

            <BackButton />
            
            <View style={{ alignItems: 'center' }}>

                <View >

                    <Logo source={require('../../../assets/logo.png')}></Logo>

                </View>

        

                <View style={{ marginTop: '5%' }}>
                    <Title>Quem somos nós?</Title>
                </View>

                <Container>
                    <Text>A iPets é uma organização sem fins lucrativos
                        com o objetivo de ajudar animais sem donos a encontrar
                        um lar  onde receba amor, carinho e todos os cuidados
                        necessários!</Text>

                </Container>

                <View style={{ marginTop: '5%' }}>
                    <Title> Localização </Title>
                </View >


                <View style={{ marginTop: '5%' }}>
                    <Text2> Endereço: Rua dos alfeneiros, 4</Text2>
                </View>

                <View>

                    <Maps source={require('../../../assets/maps.png')}></Maps>
                     </View>


                <View style={{ marginTop: '5%' }}>
                    <Title>Contato</Title>
                </View>

                <View style={{ marginTop: '5%', alignItems:'center' }}>
                    <Text2> Email: ipets@gmail.com<br/>Telefone: (21) 99999-9999</Text2>
                </View>

            </View>

            
            


            </ScrollView>

       
    );
}

