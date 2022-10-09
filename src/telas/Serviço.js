import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, KeyboardAvoidingView, View, TextInput, TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Tela} from '../componentes/Telas'
import BotaoEnviar from '../componentes/BotãoEnviar'
import { adicionaEvento, atualizaEvento, removeEvento } from '../servicos/Eventos'
import { VeiculoContext } from '../contexts/veiculo'
import { EventoAttContext } from '../contexts/eventoAtt'
import BotaoDeletar from '../componentes/BotãoDeletar'

export default function Serviço({navigation}){

    const { veiculoID } = useContext(VeiculoContext)
    const {atualizarEvento, eventoParaAtt, setAtualizarEvento} = useContext(EventoAttContext) 

    const [hodometro, setHodometro] = useState("")
    const [titulo, setTitulo] = useState("")
    const [valor, setValor] = useState("")
    const [local, setLocal] = useState("")
    const [obs, setObs] = useState("")

    async function salvaServico(){
        const servico = {
            tipo: "Serviço",
            titulo: titulo,
            hodometro: hodometro,
            valor: valor,
            local: local,
            obs: obs,
            veiculo: veiculoID
        }
        await adicionaEvento(servico)
    }

    async function modificaServico(){
        const servicoParaModificar = {
            tipo: eventoParaAtt.tipo,
            titulo: titulo,
            hodometro: hodometro,
            valor: valor,
            local: local,
            obs: obs,
            veiculo: veiculoID,
            id: eventoParaAtt.id
        }
        await atualizaEvento(servicoParaModificar)
    }

    function handleSave() {
        atualizarEvento? modificaServico() : salvaServico()
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
        setLocal(eventoParaAtt.local)
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
                    <MaterialCommunityIcons name= "car-wrench" size={35} color="white" />
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