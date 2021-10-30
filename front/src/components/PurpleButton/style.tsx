import styled from 'styled-components/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export const PurpleButtonStyle = styled.TouchableOpacity`
    width: ${wp('50%')};
    background-color: #57429D;
    border-radius: 20;
    height: ${wp('15%')};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TextPurpleButton = styled.Text`
    font-family: 'Capriola';
    font-weight: bold;
    color: #ffffff;
    font-size: 24px;
    
    
`
