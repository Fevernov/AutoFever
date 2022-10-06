import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {SwitchNoturno, SwitchLanguage} from '../componentes/Switches';
import {Tela} from '../componentes/Telas';
import Texto from '../componentes/Texto';

export default function Mais(){
    return (
        <Tela>
            <View style={estilos.caixa}>
                <MaterialCommunityIcons name="brightness-2" size={40} color="white" />
                <SwitchNoturno/>
                <MaterialCommunityIcons name="brightness-5" size={40} color="white" />
            </View>
            <View style={estilos.caixa}>
                <Texto>Português</Texto>
                <SwitchLanguage/>
                <Texto>Inglês</Texto>
            </View>
            
            
        </Tela>
    )
}

const estilos = StyleSheet.create({
    caixa: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%',
        marginTop: 30 
    }
})