import React, { useEffect, useState } from 'react';
import { ImageComponent, ScrollView, Text, TextInput, View } from 'react-native';

import {Cabecalho,
        Corpo,
        Navbar,
        Cachorros,
        Gatos,
        Roedores,
        BackGroundHome

} from './styles';

export default function Home(){


return(

    <BackGroundHome>
        <Cabecalho>

        </Cabecalho>
        <Corpo>
            <Cachorros>

            </Cachorros>
            <Gatos>

            </Gatos>
            <Roedores>

            </Roedores>
        </Corpo>
        <Navbar>

        </Navbar>
    </BackGroundHome>
)

};