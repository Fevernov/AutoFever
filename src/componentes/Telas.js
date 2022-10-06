import React from "react";
import {SafeAreaView, StyleSheet} from 'react-native';

export function Tela({children, style}){
    return(
        <SafeAreaView style={[estilos.tela, style]}>{children}</SafeAreaView>
    )
    
};

export function TelaPlus({children, style}){
    return(
        <SafeAreaView style={[estilos.telaPlus, style]}>{children}</SafeAreaView>
    )
    
};

const estilos = StyleSheet.create({
    tela: {
        backgroundColor: '#212121',
        height: '100%',
        alignItems: 'center',
        flex:1,
        //padding: 10
    },
    telaPlus:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#212121',
    },
});