import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, TextInput, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import BotaoEnviar from '../componentes/BotãoEnviar'
import {Tela} from '../componentes/Telas'
import { adicionaEvento, atualizaEvento, removeEvento } from '../servicos/Eventos'
import { VeiculoAttContext } from '../contexts/veiculoAtt'
import { EventoAttContext } from '../contexts/eventoAtt'
import BotaoDeletar from '../componentes/BotãoDeletar'

export default function Abastecimento({navigation}){

    const { veiculoID } = useContext(VeiculoAttContext)
    const {atualizarEvento, eventoParaAtt, setAtualizarEvento} = useContext(EventoAttContext) 
    
    const [hodometro, setHodometro] = useState("")
    const [valorPorLitro, setValorPorLitro] = useState("")
    const [valor, setValor] = useState("")
    const [local, setLocal] = useState("")
    const [obs, setObs] = useState("")
    const [litros, setLitros] = useState("")

    async function salvaAbastecimento(){

        setLitros(Number(valor/valorPorLitro).toString())

        const abastecimento = {
            tipo: "Abastecimento",
            hodometro: hodometro,
            valorPorL: valorPorLitro,
            valor: valor,
            litros: litros,
            local: local,
            obs: obs,
            veiculo: veiculoID
        }
        await adicionaEvento(abastecimento)
    }

    async function modificaAbastecimento(){
        const abastecimentoParaModificar = {
            tipo: eventoParaAtt.tipo,
            hodometro: hodometro,
            valorPorL: valorPorLitro,
            valor: valor,
            litros: litros,
            local: local,
            obs: obs,
            veiculo: veiculoID,
            data: eventoParaAtt.data,
            id: eventoParaAtt.id
        }
        await atualizaEvento(abastecimentoParaModificar)
    }

    async function deletaEvento(){
        await removeEvento(eventoParaAtt)
    }

    function handleSave() {
        if (valor && hodometro && veiculoID){
            atualizarEvento? modificaAbastecimento() : salvaAbastecimento()
            setAtualizarEvento(false)
            navigation.navigate('Historico')
        }
        else {
            if (!hodometro){
                alert('Adicione o hodômetro atual do veículo para melhor funcionamento do app.')
            }
            else if (!valor){
                alert('Adicione o valor do abastecimento!')
            }
            else {
                alert('Não há um veículo selecionado.')
            }
        }
    }

    function handleDelete(){
        deletaEvento()
        setAtualizarEvento(false)
        navigation.navigate('Historico')
    }

    function preencheForm(){
        setHodometro(eventoParaAtt.hodometro.toString())
        setValorPorLitro(eventoParaAtt.valorPorL.toString())
        setValor(eventoParaAtt.valor.toString())
        setLocal(eventoParaAtt.local)
        setObs(eventoParaAtt.obs)
        setLitros(eventoParaAtt.litros)
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
    },
    botaoDelete:{
        position: 'absolute',
        left: 25,
        bottom: 25,
        elevation: 1,
    } 
})