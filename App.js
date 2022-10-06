
import React, {useEffect} from 'react'
import { StatusBar } from 'react-native'
import Router from './src/Router'
import { criaTabela, excluiVeiculos, excluiEventos } from './src/servicos/SQLite'


export default function App() {

  useEffect(() => {
    //criaTabela()
    //excluiVeiculos()
    //excluiEventos()
}, []);

  return <>
  <StatusBar />
  <Router/>
  
  </>
};


/*




*/