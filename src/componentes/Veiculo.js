import React from "react"
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Texto from './Texto'

import marca from '../assets/marca.png'
import foto from '../assets/foto.png'

export default function Veiculo({item}){
    return(
        <TouchableOpacity style={estilos.container}>
            <Image source={foto} style={estilos.foto}/>
            <View style={estilos.view}>
                <View style={estilos.view}>
                    <Image source={marca} style={estilos.marca}/>
                    <Texto> {item.marca}</Texto>
                </View>
                <Texto>{item.modelo} | {item.apelido}</Texto>
                <Texto>{item.ano}</Texto>
            </View>
        </TouchableOpacity>
    )
    
};

const estilos = StyleSheet.create({
    container: {
        marginTop: 15,
        width: 300,
        backgroundColor: '#666',
        height: 150,
    },
    foto:{
        width:'100%',
        height: 110
    },
    view:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center',
        height: 40,
    },
    marca:{
        height: 30,
        width: 30,
        borderRadius: 15
    }
    
});