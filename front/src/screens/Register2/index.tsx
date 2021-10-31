import React from 'react';
import { Controller } from 'react-hook-form';
import { View, Text } from 'react-native';
import { InputForm, Title, Logo } from './style';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import PurpleButton from '../../components/PurpleButton';
import { Patas } from '../Login/style';
import BackButton from '../../components/BackButton';

export default function Register2() {
    const { control, handleSubmit, formState: { errors }, getValues } = useForm({ mode: 'onTouched' });
    const navigation = useNavigation();

    return (
        <View>
            <BackButton/>
        <View style={{alignItems:'center'}}>
            <View>
                    <Logo source={require('../../../assets/logo.png')}></Logo>
                </View>

                <Title> Continuação </Title>
        <View style={{marginTop:'5%'}}>
        
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <InputForm
                            placeholder='Endereço'
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                        />
                    )}
                
                    name='endereço'
                    defaultValue=''
                />
            </View>




            <View>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <InputForm
                            placeholder='E-mail'
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                        />
                    )}
                    rules={{
                        required: 'O e-mail é obrigatório.',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Formato de e-mail inválido'
                        },
                    }}
                    name='email'
                    defaultValue=''
                />
                {errors.email && <Text style={{ color: 'red' }}>{errors.email.message}</Text>}
            </View>
            <View>
                <Controller
                    control={control}
                    render={({ field: { onBlur, onChange, value } }) => (
                        <InputForm
                            placeholder='Senha'
                            secureTextEntry
                            onBlur={onBlur}
                            onChangeText={(value: any) => onChange(value)}
                            value={value}
                        />
                    )}
                    name='password'
                    defaultValue=''
                />
                {errors.password && <Text style={{ color: 'red' }}>{errors.password.message}</Text>}
            </View>
            <View style={{marginTop:'10%'}}>
            <PurpleButton title='Confirmar' handleOnPress={()=>navigation.navigate('Login')}></PurpleButton>
            </View>

            <View>
                <Patas source={require('../../../assets/patas.png')}></Patas>
            </View>


        </View>
        </View>
    )
}