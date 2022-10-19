
import React, {useEffect} from 'react'
import { StatusBar } from 'react-native'
import Router from './src/Router'
import { criaTabela, excluiTabelaMarca } from './src/servicos/SQLite'
import {adicionaMarcas} from './src/servicos/Marcas'


export default function App() {

  useEffect(() => {
    excluiTabelaMarca()
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