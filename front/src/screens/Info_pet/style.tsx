import styled from "styled-components/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const BackGroundHome = styled.View `
    background-color:#57429D;
    width: ${wp('100%')};
    height: ${hp('100%')};
    font-family: 'Capriola';`

export const Back1 = styled.View `
background-color:#57429D;
   width: ${wp('100%')};
    height: ${hp('40%')};
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    `
export const Nome = styled.Text `
    color: #ffff;
    font-size: 2em;
    font-weight: 500;
    margin-left:5%;
    font-family: 'Capriola';`

export const Back2 = styled.View `
    background-color:#ffff;
    width: ${wp('100%')};
    height: ${hp('60%')};
    border-Top-Left-Radius: 40;
    border-Top-Right-Radius: 40;
    z-index: 1;
     `

export const Adote = styled.TouchableOpacity`
    alignItems: center;
    background-color:#57429D;
    justify-content: center; 
    margin-left:${wp('15%')};
    margin-right:${wp('15%')};

    margin-bottom:${hp('0%')};
    width: ${wp('70%')};
    border-Radius: 40;`

export const Back = styled.TouchableOpacity`
align-Items: center;
position: absolute;
left: ${wp('3%')};;
top:${hp('3%')};
justify-content: center; 

flex: 1;
margin-bottom:${hp('0%')};
`
    

export const TextButton = styled.Text `
    color: #ffff;
    font-size: 2em;
    font-weight: 500;
    font-family: 'Capriola';`

export const ImgPet = styled.Image`
    width: ${wp('58%')};
    height: ${hp('30%')};
    margin-top:${hp('5%')};
    position: absolute;
    bottom:-10px;
    z-index: 20;
    right: 10px;
   `
export const View0 = styled.View `
width: ${wp('100%')};
flex: 1;
justify-content: center;
flex-direction: row;
max-height: ${hp('20%')};
align-items: center;
`
export const View1 = styled.View `

width: ${wp('50%')};
flex: 1;
justify-content: space-between;
flex-direction: column;
align-items: flex-start;
height: 80px;
margin-left:${wp('5%')};
 `
 export const View2 = styled.View `

 width: ${wp('100%')};
 flex: 1;
 justify-content: center;
 flex-direction: row;
 align-items: center;
 padding: 30px;
 max-height: ${hp('30%')};

` 

export const Info = styled.Text `
   
    color: #000;
    font-size: 1.3em;
    font-weight: 400;
    font-family: 'Capriola';
    `
    
export const Info1 = styled.Text `
    text-align: center;
    color: #000;
    font-size: 1.3em;
    font-weight: 400;
    font-family: 'Capriola';
    `




