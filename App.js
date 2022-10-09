
import React, {useEffect} from 'react'
import { StatusBar } from 'react-native'
import Router from './src/Router'
import { criaTabela, excluiVeiculos, excluiEventos, excluiTabela } from './src/servicos/SQLite'


export default function App() {

  useEffect(() => {
    //excluiTabela()
    //criaTabela()
    //excluiVeiculos()
    //excluiEventos()
  }, [])

  return <>
  <StatusBar />
  <Router/>
  
  </>
}


/*




*/