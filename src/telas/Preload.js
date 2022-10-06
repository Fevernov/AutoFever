import React from 'react';
import { Image, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';

import Logo from '../assets/autofeverLogo.png';

export default function Preload({navigation}){
    setTimeout(function(){
        navigation.navigate('Tabs');
    },1000);

    return (
    <SafeAreaView style={estilos.container}>
        <Image source={Logo} style={estilos.Logo}/>
        <ActivityIndicator size="large" color="#fff" />
        
    </SafeAreaView>
    )
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Logo: {
      width: '100%',
      height: 300,
      marginBottom: 40,
    },
    
  });