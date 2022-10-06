import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function BotaoPlus({style}){

    return(
        
        <View style={estilos.botao}>
            <AntDesign name='plus' size = {28} color="black"/>
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