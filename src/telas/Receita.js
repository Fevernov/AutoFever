import React, { useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, View, TextInput, TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Tela} from '../componentes/Telas'
import BotaoEnviar from '../componentes/BotãoEnviar'
import { adicionaEvento } from '../servicos/Eventos'

export default function Receita({navigation}){

    const [hodometro, setHodometro] = useState("")
    const [titulo, setTitulo] = useState("")
    const [valor, setValor] = useState("")
    const [obs, setObs] = useState("")

    async function salvaReceita(){
        const receita = {
            tipo: "Receita",
            titulo: titulo,
            hodometro: hodometro,
            valor: valor,
            local: "",
            obs: obs,
            veiculo: '28'
        }
        await adicionaEvento(receita)
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
                    <MaterialCommunityIcons name= "chart-box-plus-outline" size={35} color="white" />
                    <TextInput style={estilos.input} 
                        placeholder= "Titulo"
                        placeholderTextColor= '#fff' 
                        value={titulo}
                        onChangeText={setTitulo}/>
                </View> 

                <View style={estilos.view}>
                    <MaterialCommunityIcons name= "cash-multiple" size={35} color="white" />
                    <TextInput style={estilos.input} 
                        placeholder="Valor" 
                        placeholderTextColor= '#fff' 
                        keyboardType="numeric"
                        value={valor}
                        onChangeText={setValor}/>
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
                salvaReceita()
                navigation.navigate('Historico')}}>
                <BotaoEnviar/>
            </TouchableOpacity>
        </Tela>
    )
}

const estilos = StyleSheet.create({
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
    view: {
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 50
    },
    botao:{
        position: 'absolute',
        right: 25,
        bottom: 25,
        elevation: 100
    }  
})