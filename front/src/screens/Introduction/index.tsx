import React from 'react';
import { View } from 'react-native';
import { CatsImage, LogoSmallerImage } from './style';
import PurpleButton from '../../components/PurpleButton';
import { useNavigation } from '@react-navigation/native';

export default function Introduction(){

    const navigation = useNavigation();
    return(

        <View>

            <View style={{alignItems:'center'}}>

                <CatsImage source={require('../../../assets/cats.png')}/>


                <View style={{marginTop:'15%'}}>
                <PurpleButton title="Entrar" handleOnPress={()=> navigation.navigate('Login')}></PurpleButton>
                    </View>

            <View style={{marginTop:'8%'}}>
                <PurpleButton title="Cadastrar" handleOnPress={()=> navigation.navigate('Register')}></PurpleButton>
            </View>
            

            
            <View style={{marginTop:'20%'}}>
            <LogoSmallerImage source={require('../../../assets/smallerLogo.png')}></LogoSmallerImage>
            </View>

             </View>

            

        </View>
    )
}
