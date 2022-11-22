import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import BotaoPlus from '../componentes/BotaoPlus'
import {Tela} from '../componentes/Telas'
import Veiculo from '../componentes/Veiculo'
import { buscaVeiculos } from '../servicos/Veiculos'

export default function Veiculos({navigation}){

    const [veiculos, setVeiculos] = useState([])

    async  function mostraVeiculos(){
       const todosVeiculos = await buscaVeiculos()
       setVeiculos(todosVeiculos)
    }

    useEffect(() => {
        mostraVeiculos()

    }, [veiculos])

    return (
        <Tela >

            <FlatList
                data={veiculos}
                renderItem={(veiculo) => <Veiculo {...veiculo} />}
                keyExtractor={veiculo => veiculo.id}
            />

            <TouchableOpacity style={estilos.botao} onPress={() => navigation.navigate('Adicionar veiculo')}>
                <BotaoPlus/>
            </TouchableOpacity>

        </Tela>
    )
}

const estilos = StyleSheet.create({
    botao:{
        position: 'absolute',
        right: 25,
        bottom: 25,
        elevation: 1
    }
})