import styled from "styled-components/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const BackGroundHome = styled.View `
    background-color:#E5E5E5;
    width: ${wp('100%')};
    height: ${hp('100%')};
    font-family: Signika;`

export const Back1 = styled.View `
    background-color:#e5e5e5;
    width: ${wp('100%')};
    height: ${hp('17%')};
   
    `

export const BackLogo = styled.View `
    
    width: ${wp('100%')};
    max-height: ${hp('15%')};
    flex: 1;
    align-items: center;
    justify-content: center;
    
    `
    export const BackIcons = styled.View `
        padding-left: ${wp('3%')};
        padding-right: ${wp('3%')};
        width: ${wp('100%')};
        max-height: ${hp('2%')};
        flex: 1;
        align-items: center;
        justify-content: flex-end;
        flex-direction: row;
        `



export const Logo = styled.Image`
    width: 140px;
    height: 80px;
   `

export const BackCenter = styled.View `
    width: ${wp('100%')};
    height: ${hp('80%')};
     `
export const Title= styled.Text `
    color: #57429D;
    font-size: 1.8em;
    font-weight: 500;
    margin-left:${wp('20%')};
    margin-bottom:${hp('3%')};
    width: ${wp('60%')};
    text-align:center;`

export const Title1= styled.Text `
color: #57429D;
font-size: 1.6em;
font-weight: 500;
margin-left:${wp('10%')};
margin-bottom:${hp('3%')};
width: ${wp('80%')};
text-align:center;`


export const TextParabens = styled.Text `
    color: #455A64;
    font-size: 1em;
    font-weight: 500;
    margin-left:${wp('15%')};
    width: ${wp('70%')};
    text-align:center;
    margin-bottom:${hp('3%')};`

export const Area = styled.View `
    width: ${wp('60%')};
    margin-left:${wp('20%')};
    height: ${hp('15%')};
    border-radius: 20;
    border: 2px solid #57429D;
    padding: 7px;
    margin-bottom:${hp('3%')};
    `

export const Comunicado = styled.Text `
    color: #455A64;
    font-size: 1.1em;
    font-weight: 500;
    text-align:left;
    `

export const Lado = styled.View`
width: ${wp('100%')};
height: ${hp('20%')};
flex: 1;
align-items: flex-start;
justify-content: space-between;

`  


export const Buttons = styled.TouchableOpacity`
    width: ${wp('50%')};
    max-height: ${hp('7%')};
    background-color:#57429D;
    margin-left:${wp('25%')};
    border-radius:20;
    margin-bottom:${hp('3%')};
    flex: 1;
        align-items: center;
        justify-content: center;
        flex-direction: row;` 



export const Info = styled.Text `
   
    color: #fff;
    font-size: 1.3em;
    font-weight: 700;
    `
    
export const Info1 = styled.Text `
    text-align: center;
    color: #000;
    font-size: 1.3em;
    font-weight: 400;
    `




