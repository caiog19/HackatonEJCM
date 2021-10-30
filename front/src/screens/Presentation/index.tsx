import React from 'react';
import { View } from 'react-native';
import { Title, Logo } from './style';
import PurpleButton from '../../components/PurpleButton';
import { useNavigation } from '@react-navigation/native';
import Introduction from '../Introduction';

export default function Presentation(){

    const navigation = useNavigation();

    return(
        <View>
            <View style={{alignItems:'center',marginTop:'20%'}}>
                <Logo source={require('../../../assets/logo.png')}/>

                <Title>Seu novo pet está esperando por você</Title>

                <PurpleButton title='Avançar' handleOnPress={() => navigation.navigate('Introduction')}></PurpleButton>

            </View>



        </View>

    );
}