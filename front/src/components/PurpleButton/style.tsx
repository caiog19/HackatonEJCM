import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const PurpleButtonStyle = styled.TouchableOpacity`
    width: ${wp('90%')};
    background-color: #57429D;
    border-radius: 8;
`
export const TextPurpleButton = styled.Text`
    font-weight: bold;
    color: #ffffff;
    font-size: 18px;
    text-align: center;
`