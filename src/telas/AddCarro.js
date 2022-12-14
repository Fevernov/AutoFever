import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, KeyboardAvoidingView, View, TextInput, TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Tela} from '../componentes/Telas'
import { adicionaVeiculo, atualizaVeiculo, removeVeiculo } from '../servicos/Veiculos'
import { buscaMarcas } from '../servicos/Marcas'
import BotaoEnviar from '../componentes/BotãoEnviar'
import BotaoDeletar from '../componentes/BotãoDeletar'
import { Picker } from "@react-native-picker/picker"
import { VeiculoAttContext } from '../contexts/veiculoAtt'

export default function AddCarro({navigation}){

    const {atualizarVeiculo, veiculoParaAtt, setAtualizarVeiculo} = useContext(VeiculoAttContext) 

    const [tipoVeiculo, setTipoVeiculo] = useState("Carro")
    const [marcaSelecionada, setMarcaSelecionada] = useState("")
    const [modelo, setModelo] = useState("")
    const [ano, setAno] = useState("")
    const [hodometro, setHodometro] = useState("")
    const [marcasFiltradas, setMarcasFiltradas] = useState([])

    async function salvaVeiculo(){
        const veiculo = {
            tipo: tipoVeiculo,
            marca: marcaSelecionada,
            modelo: modelo,
            ano: ano,
            hodometro: hodometro
        }
        await adicionaVeiculo(veiculo)
    }

    async function setaMarcas() {
        const marcas = await buscaMarcas(tipoVeiculo)
        setMarcasFiltradas(marcas)
    }

    function handleSave(){
        if (modelo && ano && hodometro){
            atualizarVeiculo? modificaVeiculo() : salvaVeiculo() 
            navigation.navigate('Veiculos')
        }
        else {
            if (!titulo){
                alert('Adicione um titulo à despesa!')
            }
            else if (!valor){
                alert('Adicione o valor da despesa!')
            }
        }
    }

    function handleDelete(){
        deletaVeiculo()
        navigation.navigate('Veiculos')
    }

    async function modificaVeiculo(){
        const veiculoParaModificar = {
            tipo: tipoVeiculo,
            marca: marcaSelecionada, 
            modelo: modelo,
            ano: ano,
            hodometro: hodometro,
            id: veiculoParaAtt.id
        }
        await atualizaVeiculo(veiculoParaModificar)   
    }

    async function deletaVeiculo() {
        await removeVeiculo(veiculoParaAtt)
    }

    function preencheForm(){
        setTipoVeiculo(veiculoParaAtt.tipo)
        setAno(veiculoParaAtt.ano.toString())
        setHodometro(veiculoParaAtt.hodometro.toString())
        setModelo(veiculoParaAtt.modelo)
        let timer = setTimeout(()=>setMarcaSelecionada(veiculoParaAtt.marca), 300)
    }

    useEffect(() => {
        setaMarcas()

        if (atualizarVeiculo) { 
            preencheForm()
        }

        return function cleanup(){
            setAtualizarVeiculo(false)
        }
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

                <View style={estilos.view}>
                    <MaterialCommunityIcons name= "counter" size={35} color="white" />
                    <TextInput style={estilos.input}  
                        placeholder= "Hodômetro" 
                        placeholderTextColor= '#fff' 
                        keyboardType="numeric"
                        value={hodometro}
                        onChangeText={setHodometro}/>
                </View>                

            </KeyboardAvoidingView>

            

            <TouchableOpacity style={estilos.botaoSend} onPress={() => {
                handleSave()}}>
                <BotaoEnviar/>
            </TouchableOpacity>

            <TouchableOpacity style={[estilos.botaoDelete, {display: atualizarVeiculo? 'flex' : 'none'}]} onPress={() => {
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
    picker: {
        width:'75%',
        height: 20,
        color: '#fff',
        backgroundColor: "#000",
    },
    botaoSend:{
        position: 'absolute',
        right: 25,
        bottom: 25,
        elevation: 1
    },
    botaoDelete:{
        position: 'absolute',
        left: 25,
        bottom: 25,
        elevation: 1,
    }  
})
