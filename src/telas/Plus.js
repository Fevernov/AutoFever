import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Texto from '../componentes/Texto';
//import Box from '../componentes/BoxPlus';
import {TelaPlus} from '../componentes/Telas';

export default function Plus({ navigation }){

    return (
        <TelaPlus>
            <View style={estilos.linha1}>

                <TouchableOpacity onPress={()=> navigation.navigate('Despesa')}>
                    <View style={estilos.box}> 
                        <MaterialCommunityIcons name="elevation-decline" size={24} color="white" />
                        <Texto>Despesa</Texto>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('Serviço')}>
                    <View style={estilos.box}>
                        <MaterialCommunityIcons name="car-wrench" size={24} color="white" />
                        <Texto>Serviço</Texto>            
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('Receita')}>
                    <View style={estilos.box}>
                        <MaterialCommunityIcons name="elevation-rise" size={24} color="white" />
                        <Texto>Receita</Texto>           
                    </View>
                </TouchableOpacity>            
                
            </View>

            <View style={estilos.linha2}>
                
                <TouchableOpacity onPress={()=> navigation.navigate('Lembrete')}>
                    <View style={estilos.box}>
                        <MaterialCommunityIcons name="clock-plus-outline" size={24} color="white" />
                        <Texto>Lembrete</Texto>            
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('Veiculos')}>
                    <View style={estilos.box}>
                        <MaterialCommunityIcons name="car-multiple" size={24} color="white" />
                        <Texto>Veículo</Texto>            
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('Abastecimento')}>
                    <View style={estilos.box}>
                        <MaterialCommunityIcons name="gas-station" size={24} color="white" />
                        <Texto>Abastecimento</Texto>           
                    </View>
                </TouchableOpacity>
                
            </View>
   

        </TelaPlus>
    )
};



const estilos = StyleSheet.create({
    box:{
        alignItems:'center',
        justifyContent: 'center',
    },
    linha1:{
        justifyContent:'space-evenly',
        flexDirection:'row',
        marginBottom:100,
        
    },
    linha2:{
        justifyContent:'space-around',
        flexDirection:'row',
    },

});