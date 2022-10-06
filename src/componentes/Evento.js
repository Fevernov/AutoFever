import React from "react"
import { StyleSheet, TouchableOpacity, View} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Texto from './Texto'

export default function Evento({item}){
    
    var icone = "gas-station"

    switch (item.tipo) {
        case "Despesa":
            icone= "elevation-decline"
            break
        case "Serviço":
            icone = "car-wrench"
            break
        case "Receita":
            icone= "elevation-rise"
            break
    }

    return(
        <TouchableOpacity style={estilos.container}>
            <MaterialCommunityIcons name={icone} size={50} color="white" />
            <View style={estilos.caixa}>
                <View>
                    <Texto>{item.tipo}</Texto>
                    <Texto>{item.titulo}</Texto>
                    <Texto>{item.hodometro}</Texto>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                    <Texto>{item.data}</Texto>
                    <Texto>{item.valor}</Texto>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#666',
        marginTop: 15,
        width: '98%',
        flexDirection: 'row',
        //justifyContent:'space-between',
        alignItems: 'center',
        padding: 5
    },
    caixa:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '80%'
    }
})