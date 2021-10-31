import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title, Logo, TextInputMaskStyle, InputForm } from './style';
import PurpleButton from '../../components/PurpleButton';
import { Patas } from '../Login/style';
import BackButton from '../../components/BackButton';

export default function Register() {
    const { control, handleSubmit, formState: { errors }, getValues } = useForm({ mode: 'onTouched' });
    const navigation = useNavigation();
    return (

        <View>
            <BackButton/>

            <View style={{ alignItems: 'center' }}>

                <View>
                    <Logo source={require('../../../assets/logo.png')}></Logo>
                </View>


                <Title> Cadastro </Title>

                <View style={{ marginTop: '5%' }}>

                    <Controller
                        control={control}
                        render={({ field: { onBlur, onChange, value } }) => (
                            <InputForm

                                placeholder='Nome Completo'
                                onBlur={onBlur}
                                onChangeText={(value: any) => onChange(value)}
                                value={value}
                            />
                        )}
                        rules={{
                            required: 'O nome é obrigatório.',

                        }}

                        name='name'
                        defaultValue=''
                    />
                    {errors.name && <Text style={{ color: 'red' }}>{errors.name.message}</Text>}
                </View>

                <View>

                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInputMaskStyle

                                placeholder='CPF'
                                type={'datetime'}
                                options={{
                                    format: '999.999.999-99'
                                }}
                                onChangeText={(value: any) => onChange(value)}
                                value={value}
                            />
                        )}

                        name='CPF'
                        defaultValue=''
                    />

                </View>
                <View>

                    <Controller
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextInputMaskStyle

                                placeholder='Data de nascimento'
                                type={'datetime'}
                                options={{
                                    format: 'DD/MM/YYYY'
                                }}
                                onChangeText={(value: any) => onChange(value)}
                                value={value}
                            />
                        )}

                        name='birthdate'
                        defaultValue=''
                    />

                </View>

                <View style={{marginTop:'10%'}}>
                    <PurpleButton title='Avançar' handleOnPress={() => navigation.navigate('Register2')}></PurpleButton>
                </View>
                <Patas source={require('../../../assets/patas.png')}></Patas>
            </View>

        </View>
    )
}