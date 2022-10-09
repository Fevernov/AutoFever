import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function BotaoDeletar({style}){

    return(
        
        <View style={estilos.botao}>
            <Feather name="x" size={24} color="black" />
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
})