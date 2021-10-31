import styled from "styled-components/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const BackGroundHome = styled.View `
background-color:#EEEEEE ;
width: 100%;
height: 90%;

`


export const Cabecalho = styled.View `
width: 100%;
height: 10%;
display: inline-block;

`
export const BackIcons = styled.View `
padding-left: ${wp('3%')};
padding-right: ${wp('3%')};
width: ${wp('100%')};
height: ${hp('9%')};
flex: 1;
align-items: center;
justify-content: space-between;
flex-direction: row;

`

export const Circle = styled.TouchableOpacity`
max-width: 40px;
height: 40px;
flex: 1;
align-items: center;
justify-content: center;
background-color:#57429D;
border-radius: 50%;`

export const Divcor1 = styled.View`
height: 100%;
width: 55%;
background-color: #D94847;
border-radius: 10px;
margin-left: 45%;
`
export const Divcor2 = styled.View`
height: 100%;
width: 55%;
background-color: #FFC83F;
border-radius: 10px;

`
export const Divcor3 = styled.View`
height: 100%;
width: 55%;
background-color: #27B1CF;
border-radius: 10px;
margin-left: 45%;
`

export const Cachorros = styled.TouchableOpacity `
background-color: #C4C4C4;
width: 80%;
height: 140px;
border-radius: 10px;
margin-left:10%;
margin-top: 20%;

`

export const Gatos = styled.TouchableOpacity `
background-color: #C4C4C4 ;
width: 80%;
height: 140px;
margin-left:10%;
border-radius: 10px;
margin-top: 5%;


`


export const Roedores= styled.TouchableOpacity `
background-color: #C4C4C4;
height: 140px;
width: 80%;
margin-left:10%;
border-radius: 10px;
margin-top: 5%;
margin-bottom: 10%;

`


export const Corpo = styled.View `


`

export const Navbar = styled.View `
background-color:#57429D;
width: 100%;
height: 8%;
`

export const Logo = styled.Image`
margin-left:38%;
margin-top:-4%;
height: 60px;
width:100px;

`
export const Dog = styled.Image`
margin-left:-40%;
margin-top: -72%;
height: 170px;
width:130px;


`
export const Cat = styled.Image`
margin-left:70%;
margin-top: -65%;
height: 160px;
width:110px;


`
export const Pig = styled.Image`
margin-left:-90%;
margin-top: -40%;
height: 150px;
width:180px;


`

export const Text1 = styled.Text`
font-size: 1.5em;
margin-top:35%;
margin-left: 40%;
color:#FFFFFF;
`

export const Text2 = styled.Text`
font-size: 1.5em;
margin-top:35%;
margin-left: 30%;
color:#FFFFFF;`

export const Text3 = styled.Text`
font-size: 1.5em;
margin-top:35%;
margin-left: 20%;
color:#FFFFFF;
`