import styled from "styled-components/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const BackGroundHome = styled.View `
    background-color:#F3F1E2;
    width: ${wp('100%')};
    height: ${hp('100%')};
    font-family: Signika;`

export const Barrabusca = styled.TextInput `
    background-color:#D1D28D;
    border-Radius: 20;
    text-align:center;
    justify-content:center;
    `
