import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

export default function BotaoEnviar({style}){

    return(
        
        <View style={estilos.botao}>
            <Feather  name='check' size = {28} color="black"/>
        </View>
    )
}

const estilos = StyleSheet.create({
    botao:{
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: 'white',
        marginbottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
});