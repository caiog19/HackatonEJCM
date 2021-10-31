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
    max-height: ${hp('30%')};
    flex: 1;
    align-items: flex-start;
    justify-content: center;
    `

export const BackLogo = styled.View `
    
    width: ${wp('100%')};
    max-height: ${hp('20%')};
    flex: 1;
    align-items: center;
    justify-content: center;
    `
    export const BackIcons = styled.View `
        padding-left: ${wp('3%')};
        padding-right: ${wp('3%')};
        width: ${wp('100%')};
        max-height: ${hp('10%')};
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
        border-radius: 50%;
`
export const Logo = styled.Image`
    width: 140px;
    height: 80px;
    margin-top:${hp('-5%')};
    
   `

export const BackCard = styled.ScrollView `
    width: ${wp('100%')};
  
    height: ${hp('70%')};
     `
export const Card = styled.TouchableOpacity`
    width: ${wp('60%')};
    height: ${hp('40%')};
    background-color:#D94847;
    margin-left:${wp('20%')};
    margin-bottom:${hp('5%')};
    margin-top:${hp('2%')};
    border-radius:20;` 

export const ImgPet = styled.Image`
    width: ${wp('50%')};
    height: ${hp('25%')};
  
    margin-left:${wp('5%')};
    margin-top:${wp('4%')};
    border-radius:20;` 

    export const BackText = styled.View`
    width: ${wp('60%')};
    height: ${hp('15%')};
    flex: 1;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-radius:20;
    padding:20px;`    
    
    export const TextCard = styled.Text `
    color: #ffff;
    font-size: 1.3em;
    font-weight: 500;`



