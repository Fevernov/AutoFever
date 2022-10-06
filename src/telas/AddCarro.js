import React, { useEffect, useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, View, TextInput, TouchableOpacity, Text} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Tela} from '../componentes/Telas'
import { adicionaVeiculo, atualizaVeiculo, removeVeiculo } from '../servicos/Veiculos'
import { buscaMarcas } from '../servicos/Marcas'
import BotaoEnviar from '../componentes/BotãoEnviar'
import { Picker } from "@react-native-picker/picker"

export default function AddCarro({navigation}){

    const [tipoVeiculo, setTipoVeiculo] = useState("Carro")
    const [marcaSelecionada, setMarcaSelecionada] = useState("")
    const [modelo, setModelo] = useState("")
    const [ano, setAno] = useState("")
    const [apelido, setApelido] = useState("")

    const [marcasFiltradas, setMarcasFiltradas] = useState([])

    async function salvaVeiculo(){
        const veiculo = {
            tipo: tipoVeiculo,
            marca: marcaSelecionada,
            modelo: modelo,
            ano: ano,
            apelido: apelido
        }
        await adicionaVeiculo(veiculo)
    }

    async function setaMarcas() {
        const marcas = await buscaMarcas(tipoVeiculo)
        setMarcasFiltradas(marcas)
    }
/*
    async function ModificaVeiculo(){
        const veiculo = {
            tipo: tipoVeiculo,
            marca: marca,
            modelo: modelo,
            ano: ano,
            apelido: apelido,
            id: '1' //veiculoSelecionado.id
        }
        await atualizaVeiculo(veiculo)
    }

    async function deletaVeiculo() {
        await removeVeiculo(notaSelecionada)
    }

    function preencheForm(){
        setAno(veiculoSelecionado.ano)
        setApelido(veiculoSelecionado.apelido)
        setMarcaSelecionada(veiculoSelecionado.marca)
        setModelo(veiculoSelecionado.modelo)
        setTipoVeiculo(veiculoSelecionado.tipo)
    }
*/
    useEffect(() => {
        setaMarcas()
    }, [tipoVeiculo])
    
    return (
        <Tela style={{justifyContent: 'center'}}>
            
            <KeyboardAvoidingView>
                
                <View style={estilos.view}>
                    <MaterialCommunityIcons name= "car" size={35} color="white" />
                    <Picker 
                    style={estilos.picker}
                    selectedValue={tipoVeiculo} 
                    mode="dropdown"
                    dropdownIconColor= "#fff"
                    dropdownIconRippleColor="#fff"
                    onValueChange={(tipoVeiculo) => {setTipoVeiculo(tipoVeiculo)}}>
                        <Picker.Item label="Carro" value="Carro" />
                        <Picker.Item label="Motocicleta" value="Motocicleta"/>
                        <Picker.Item label="Caminhão" value="Caminhão"/>
                        <Picker.Item label="Ônibus" value="Ônibus"/>
                    </Picker>
                </View>  
                
                <View style={estilos.view}>
                    <MaterialCommunityIcons name= "alien" size={35} color="white" />
                    <TextInput style={estilos.input}  
                        placeholder= "Apelido" 
                        placeholderTextColor= '#fff' 
                        value={apelido}
                        onChangeText={setApelido}/>
                </View>
                
                <View style={estilos.view}>
                    <MaterialCommunityIcons name= "car-info" size={35} color="white" />
                    <Picker 
                    style={estilos.picker}
                    selectedValue={marcaSelecionada} 
                    mode="dropdown"
                    dropdownIconColor= "#fff"
                    dropdownIconRippleColor="#fff"
                    onValueChange={marca => setMarcaSelecionada(marca)}>
                        {
                            marcasFiltradas.map(brand => {
                                return <Picker.Item label={brand.marca} value={brand.marca} key={brand.id}/>
                            })
                        }
                    </Picker>
                    
                </View>
                
                <View style={estilos.view}>
                    <MaterialCommunityIcons name= "car-select" size={35} color="white" />
                    <TextInput style={estilos.input}  
                        placeholder= "Modelo" 
                        placeholderTextColor= '#fff' 
                        value={modelo}
                        onChangeText={setModelo}/>
                </View>
                
                <View style={estilos.view}>
                    <MaterialCommunityIcons name= "car-clock" size={35} color="white" />
                    <TextInput style={estilos.input}  
                        placeholder= "Ano" 
                        placeholderTextColor= '#fff' 
                        keyboardType="numeric"
                        value={ano}
                        onChangeText={setAno}/>
                </View>
            </KeyboardAvoidingView>

            <TouchableOpacity style={estilos.botao} onPress={() => {
                salvaVeiculo()
                navigation.navigate('Veiculos')}}>
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
    picker: {
        width:'75%',
        height: 20,
        color: '#fff',
        backgroundColor: "#000",
    },
    botao:{
        position: 'absolute',
        right: 25,
        bottom: 25,
        elevation: 1
    }    
})
