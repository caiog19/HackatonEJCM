import React from 'react';
import { View } from 'react-native';
import { Title, Logo, DogsImage } from './style';
import PurpleButton from '../../components/PurpleButton';
import { useNavigation } from '@react-navigation/native';

export default function Presentation(){

    const navigation = useNavigation();

    return(
        <View>
            <View style={{alignItems:'center',marginTop:'20%'}}>
                <Logo source={require('../../../assets/logo.png')}/>

                <Title>Seu novo pet está esperando por você</Title>
            <View style={{marginTop:"10%"}}>

            
                <PurpleButton title='Avançar' handleOnPress={() => navigation.navigate('Introduction')}></PurpleButton>
            </View>
            <DogsImage source={require('../../../assets/prelogin.png')} />
            


            </View>



        </View>

    );
}
