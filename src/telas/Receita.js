import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, KeyboardAvoidingView, View, TextInput, TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Tela} from '../componentes/Telas'
import BotaoEnviar from '../componentes/BotãoEnviar'
import { adicionaEvento, atualizaEvento, removeEvento } from '../servicos/Eventos'
import { VeiculoContext } from '../contexts/veiculo'
import { EventoAttContext } from '../contexts/eventoAtt'
import BotaoDeletar from '../componentes/BotãoDeletar'

export default function Receita({navigation}){

    const { veiculoID } = useContext(VeiculoContext)
    const {atualizarEvento, eventoParaAtt, setAtualizarEvento} = useContext(EventoAttContext) 

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
            veiculo: veiculoID
        }
        await adicionaEvento(receita)
    }

    async function modificaReceita(){
        const receitaParaModificar = {
            tipo: eventoParaAtt.tipo,
            titulo: titulo,
            hodometro: hodometro,
            valor: valor,
            local: "",
            obs: obs,
            veiculo: veiculoID,
            id: eventoParaAtt.id
        }
        await atualizaEvento(receitaParaModificar)
    }

    function handleSave() {
        atualizarEvento? modificaReceita() : salvaReceita()
        setAtualizarEvento(false)
        navigation.navigate('Historico')
    }

    function handleDelete(){
        deletaEvento()
        setAtualizarEvento(false)
        navigation.navigate('Historico')
    }

    async function deletaEvento(){
        await removeEvento(eventoParaAtt)
    }

    function preencheForm(){
        setHodometro(eventoParaAtt.hodometro.toString())
        setTitulo(eventoParaAtt.titulo)
        setValor(eventoParaAtt.valor.toString())
        setObs(eventoParaAtt.obs)
    }

    useEffect(()=>{
        if (atualizarEvento){
            preencheForm()
        }

        return function cleanup(){
            setAtualizarEvento(false)
        }
    },[])
    
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
                handleSave()}}>
                <BotaoEnviar/>
            </TouchableOpacity>
            
            <TouchableOpacity style={[estilos.botaoDelete, {display: atualizarEvento? 'flex' : 'none'}]} onPress={() => {
                handleDelete()}}>
                <BotaoDeletar/>
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
    },
    botaoDelete:{
        position: 'absolute',
        left: 25,
        bottom: 25,
        elevation: 1,
    } 
})