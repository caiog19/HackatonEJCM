import React, { useEffect, useState } from 'react';
import { ImageComponent, ScrollView, Text, TextInput, View } from 'react-native';

import {Cabecalho,
        Corpo,
        Navbar,
        Cachorros,
        Gatos,
        Roedores,
        BackGroundHome, 
        Divcor1,
        Divcor2,
        Divcor3,
        Logo,
        Dog,
        Cat,
        Pig
       

} from './styles';

export default function Home(){


return(

    <BackGroundHome>
        <Cabecalho>
        
        <Logo source={require('../../../assets/smallerLogo.png')}></Logo>
        </Cabecalho>
        <Corpo>
            
            <Cachorros>
                <Divcor1>
                <Dog source={require('../../../assets/dog.png')}></Dog>

                </Divcor1>
                
            </Cachorros>
            <Gatos>
                <Divcor2>
                <Cat source={require('../../../assets/cat.png')}></Cat>
                </Divcor2>
            </Gatos>
            <Roedores>
                <Divcor3>
                <Pig source={require('../../../assets/pig.png')}></Pig>
                </Divcor3>
            </Roedores>
        </Corpo>
        <Navbar>

        </Navbar>
    </BackGroundHome>
)

};