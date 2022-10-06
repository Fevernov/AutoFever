import React from "react";
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Texto from "./Texto";

export default function Lembrete({motivo, data}){
    return(
        <View style={estilos.container}>
            <MaterialIcons name="notifications" size={50} color="white" />
            <View style={estilos.container2}>
                <View style={estilos.view}>
                    <Texto>Motivo</Texto>
                    <Texto>Data</Texto>
                </View>
                <View style={estilos.view2}>
                    <Texto>Daqui xxx dias</Texto>
                </View>
            </View>
        </View>
    )
    
};

const estilos = StyleSheet.create({
    container: {
        marginTop: 15,
        width: '90%',
        backgroundColor: '#666',
        height: 75,
        flexDirection: 'row',
        alignItems:'center',
    },
    container2:{
        //backgroundColor:'grey',
        justifyContent:'space-between', 
        flexDirection:'row', 
        height:'100%',
        marginLeft: 10,
        width: 265
    },
    view: {
        //backgroundColor:'black',
        height:'100%',
        justifyContent: 'space-around',
        width:'80%'
    },
    view2: {
        //backgroundColor:'black',
        height:'100%',
        width: 50,
        justifyContent:'center',
        alignItems:'flex-end'
    },
});