import React, { useState, useContext } from 'react'
import { StyleSheet, KeyboardAvoidingView, View, TextInput, TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Tela} from '../componentes/Telas'
import BotaoEnviar from '../componentes/BotãoEnviar'
import { VeiculoAttContext } from '../contexts/veiculoAtt'

//ainda falta adicionar target!
export default function Lembrete(){

    const { veiculoID } = useContext(VeiculoAttContext)

    const [data, setData] = useState("");
    const [lembrete, setLembrete] = useState("");
    const [obs, setObs] = useState("");
    
    return (
        <Tela style={{justifyContent: 'center'}}>
            <KeyboardAvoidingView>
                <View style={estilos.view}>
                    <MaterialCommunityIcons name= "calendar" size={35} color="white" />
                    <TextInput style={estilos.input}  
                        placeholder= "Data" 
                        placeholderTextColor= '#fff' 
                        keyboardType="numeric"
                        value={data}
                        onChangeText={setData}/>
                </View>

                <View style={estilos.view}>
                    <MaterialCommunityIcons name= "bell-outline" size={35} color="white" />
                    <TextInput style={estilos.input}  
                        placeholder= "Me lembre de..." 
                        placeholderTextColor= '#fff' 
                        value={lembrete}
                        onChangeText={setLembrete}/>
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

            <TouchableOpacity style={estilos.botao}>
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
        //backgroundColor: 'grey',
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
