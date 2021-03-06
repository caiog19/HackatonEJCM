import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Title = styled.Text`
    font-family: 'Capriola';
    color: #57429D;
    font-size: 36px;
    text-align: center;
    margin-top: 15%;
`
export const Logo = styled.Image`
    width: 217px;
    height: 128px;
`
export const DogsImage = styled.Image`
    width: ${wp('100%')};
    height: ${hp('33%')};
    
`
