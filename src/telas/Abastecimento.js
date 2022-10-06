import React, { useState } from 'react'
import { StyleSheet, View, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import BotaoEnviar from '../componentes/BotãoEnviar'
import {Tela} from '../componentes/Telas'

export default function Abastecimento({navigation}){
    
    const [hodometro, setHodometro] = useState("")
    const [valorPorLitro, setValorPorLitro] = useState("")
    const [valor, setValor] = useState("")
    const [local, setLocal] = useState("")
    const [obs, setObs] = useState("")

    async function salvaAbastecimento(){

        var litros =  valor/valorPorLitro

        const abastecimento = {
            hodometro: hodometro,
            valorPorL: valorPorLitro,
            valor: valor,
            litros: litros,
            local: local,
            obs: obs,
            veiculo: '39'
        }
        await adicionaEvento(abastecimento)
    }


    return (
        <Tela style={{justifyContent: 'center'}}>
            <KeyboardAvoidingView>
                
                <View style={estilos.view}>
                    <MaterialCommunityIcons name= "counter" size={35} color="white" />
                    <TextInput style={estilos.input}  
                        placeholder= "Hodômetro" 
                        placeholderTextColor= '#fff' 
                        keyboardType="numeric"
                        value={hodometro}
                        onChangeText={setHodometro}/>
                </View>
                <View style={estilos.view}>
                    <MaterialCommunityIcons name= "gas-station-outline" size={35} color="white" />
                    <TextInput style={[estilos.input, {width: 120}]}  
                        placeholder="Valor/L" 
                        placeholderTextColor= '#fff' 
                        keyboardType="numeric"
                        value={valorPorLitro}
                        onChangeText={setValorPorLitro}/>
                    <TextInput style={[estilos.input, {width: 120}]}  
                        placeholder="Valor" 
                        placeholderTextColor= '#fff' 
                        keyboardType="numeric"
                        value={valor}
                        onChangeText={setValor}/>
                </View>
                
                <View style={estilos.view}>
                    <MaterialCommunityIcons name= "map-marker" size={35} color="white" />
                    <TextInput style={estilos.input}  
                        placeholder= "Local" 
                        placeholderTextColor= '#fff' 
                        value={local}
                        onChangeText={setLocal}/>
                </View>
                
                <View style={estilos.view}>
                    <MaterialCommunityIcons name= "card-text-outline" size={35} color="white" />
                    <TextInput style={estilos.input}  
                        placeholder= "Observação" 
                        placeholderTextColor= '#fff' 
                        value={obs}
                        onChangeText={setObs}/>
                </View>
            </KeyboardAvoidingView>

            <TouchableOpacity style={estilos.botao} onPress={() => {
                adicionaAbastecimento()
                navigation.navigate('Historico')}}>
                <BotaoEnviar/>
            </TouchableOpacity>
        </Tela>
    )
}

const estilos = StyleSheet.create({
    view: {
        //backgroundColor: 'grey',
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 50
    },
    input: {
        borderWidth: 1,
        paddingLeft: 10,
        paddingVertical:3,
        borderRadius: 30,
        borderColor: '#fff',
        width:'75%',
        height: 40,
        color: '#fff'
    },
    botao:{
        position: 'absolute',
        right: 25,
        bottom: 25,
        elevation: 100
    }  
})