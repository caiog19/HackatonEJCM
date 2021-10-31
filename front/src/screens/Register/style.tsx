import styled from 'styled-components/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TextInputMask } from 'react-native-masked-text';

export const Title = styled.Text`
    font-family: 'Capriola';
    font-size: 36px;
    color: #57429D;
    margin-top: 10%;
`
export const Logo = styled.Image`
    width: 179.63px;
    height: 100.65px;
    margin-top: 15%;
`
export const TextInputMaskStyle = styled(TextInputMask)`
    width: ${wp('75%')};
    padding: 4%;
    margin: 3% auto;
    border: 3px solid #57429D;
    border-radius: 20;
`
export const InputForm = styled.TextInput`
    width: ${wp('75%')};
    padding: 4%;
    margin: 3% auto;
    border: 3px solid #57429D;
    border-radius: 20;
`
