import React, { useCallback, useState, useContext } from 'react'
import {StyleSheet, View, Image, FlatList, TouchableOpacity} from 'react-native'
import marcaCarro from '../assets/marca.png'
import { buscaVeiculos } from '../servicos/Veiculos'
import {Tela} from '../componentes/Telas'
import Evento from '../componentes/Evento'
import { Picker } from "@react-native-picker/picker"
import { buscaEventos } from '../servicos/Eventos'
import { useFocusEffect } from '@react-navigation/native'
import { VeiculoAttContext } from '../contexts/veiculoAtt'
import { EventoAttContext } from '../contexts/eventoAtt'

export default function Historico({ navigation }){

    const { setVeiculoID } = useContext(VeiculoAttContext)
    const { setEventosFiltrados } = useContext(EventoAttContext)

    const [veiculoSelecionado, setVeiculoSelecionado] = useState()
    const [todosVeiculos, setTodosVeiculos] = useState([])
    const [eventos, setEventos] = useState([])

    async  function listaVeiculos(){
        
        const veiculos = await buscaVeiculos()

        setTodosVeiculos(veiculos)
    }

    async  function mostraEventos(){
        if (todosVeiculos.length > 0) {
            const todosEventos = await buscaEventos(veiculoSelecionado)

            setEventos(todosEventos)
            setEventosFiltrados(todosEventos)
        }
    }

    useFocusEffect(
        useCallback(() => {
            listaVeiculos()
            mostraEventos()
            setVeiculoID(veiculoSelecionado)
        }, [veiculoSelecionado])
    )

    return(
        <Tela>
            <View style={estilos.topBar} >
                <View style={{flexDirection:'row', alignItems:'center', height: 50}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Veiculos')}>
                    <Image source={marcaCarro} style={estilos.marca}/>
                    </TouchableOpacity>
                    <Picker 
                    style={estilos.picker}
                    selectedValue={veiculoSelecionado} 
                    mode="dropdown"
                    dropdownIconColor= "#fff"
                    dropdownIconRippleColor="#fff"
                    onValueChange={veiculo => setVeiculoSelecionado(veiculo)}>
                        {
                            todosVeiculos.map(veiculo => {
                                return <Picker.Item label={veiculo.modelo} value={veiculo.id} key={veiculo.id}/>
                            })
                        }
                    </Picker> 
                </View>     
            </View>

            <FlatList
                data={eventos}
                renderItem={(evento) => <Evento {...evento} />}
                keyExtractor={evento => evento.id}
            />
            

        </Tela>
    )
}


const estilos= StyleSheet.create({
    topBar: {
        height: 52,
        width: '100%',
        backgroundColor: '#151515',
        marginBottom: 10,
    },
    picker: {
        width: "86%",
        height: 20,
        color: '#fff',
        backgroundColor: "#000",
    },
    marca: {
        width: 52,
        height: 52,
    },

})