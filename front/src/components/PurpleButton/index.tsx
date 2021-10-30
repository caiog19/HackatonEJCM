import React from 'react'
import { PurpleButtonStyle, TextPurpleButton } from './style';
const PurpleButton = (props: { title: string, handleOnPress: any }) => {


    return (

        <PurpleButtonStyle onPress={props.handleOnPress}>

            <TextPurpleButton>{props.title}</TextPurpleButton>

        </PurpleButtonStyle>

    );
}
export default PurpleButton