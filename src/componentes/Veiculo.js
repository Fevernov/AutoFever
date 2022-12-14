import React, { useContext } from "react"
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Texto from './Texto'
import {VeiculoAttContext} from '../contexts/veiculoAtt'
import marca from '../assets/marca.png'
import foto from '../assets/foto.png'
import { useNavigation } from "@react-navigation/native"

export default function Veiculo({item}){

    const { setVeiculoParaAtt, setAtualizarVeiculo } = useContext(VeiculoAttContext)
    const navigation = useNavigation()

    function handleClick(){
        setAtualizarVeiculo(true)
        setVeiculoParaAtt(item)
        navigation.navigate('Adicionar veiculo')
    }

    return(
        <TouchableOpacity style={estilos.container} onPress={()=> {handleClick()}}>
            <Image source={foto} style={estilos.foto}/>
            <View style={estilos.view}>
                <View style={estilos.view}>
                    <Image source={marca} style={estilos.marca}/>
                    <Texto> {item.marca}</Texto>
                </View>
                <Texto>{item.modelo} | {item.hodometro} km</Texto>
                <Texto style={{position:'absolute', right: 5}}>{item.ano}</Texto>
            </View>
        </TouchableOpacity>
    )
    
}

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
        alignItems:'center',
        height: 40,
        marginHorizontal: 5
    },
    marca:{
        height: 30,
        width: 30,
        borderRadius: 15,
    }
    
})