import React, { useContext } from "react"
import { StyleSheet, TouchableOpacity, View} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Texto from './Texto'
import { useNavigation } from "@react-navigation/native"
import { EventoAttContext } from "../contexts/eventoAtt"

export default function Evento({item}){

    const navigation = useNavigation()
    const { setEventoParaAtt, setAtualizarEvento } = useContext(EventoAttContext)
    
    let icone
    let local
    
    switch (item.tipo) {
        case "Despesa":
            icone= "elevation-decline"
            local = 'Despesa'
            break
        case "Serviço":
            icone = "car-wrench"
            local='Serviço'
            break
        case "Receita":
            icone= "elevation-rise"
            local='Receita'
            break
        case "Abastecimento":
            icone= "gas-station"
            local='Abastecimento'
            break
    }

    function handleClick(){
        setAtualizarEvento(true)
        setEventoParaAtt(item)            
        navigation.navigate(local)
    }

    return(
        <TouchableOpacity style={estilos.container} onPress={() => {handleClick()}}>
            <MaterialCommunityIcons name={icone} size={50} color="white" />
            <View style={estilos.caixa}>
                <View>
                    <Texto>{item.tipo}</Texto>
                    <Texto>{item.titulo}</Texto>
                    <Texto>{item.hodometro} {item.hodometro? "km" : ""}</Texto>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                    <Texto>{item.data}</Texto>
                    <Texto>{item.valor} R$</Texto>
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