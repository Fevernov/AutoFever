import React from 'react';
import { StyleSheet, } from 'react-native';

import {Tela} from '../componentes/Telas';
import Texto from '../componentes/Texto';
import Lembrete from '../componentes/Lembrete';

export default function Lembretes(){
    return (
        <Tela>
            <Lembrete/>
        </Tela>
    )
}

const estilos = StyleSheet.create({

})