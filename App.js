
import React, {useEffect} from 'react'
import { StatusBar } from 'react-native'
import Router from './src/Router'
import { criaTabela } from './src/servicos/SQLite'
import {adicionaMarcas, excluiMarcas} from './src/servicos/Marcas'


export default function App() {

  useEffect(() => {
    excluiMarcas()
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