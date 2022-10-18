
import React, {useEffect} from 'react'
import { StatusBar } from 'react-native'
import Router from './src/Router'
import { criaTabela, excluiTabela } from './src/servicos/SQLite'
import {adicionaMarcas} from './src/servicos/Marcas'


export default function App() {

  useEffect(() => {
    excluiTabela()
    criaTabela()
    adicionaMarcas()
  }, [])

  return <>
  <StatusBar />
  <Router/>
  
  </>
}


/*




*/