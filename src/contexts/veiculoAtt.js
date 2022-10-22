import React, {createContext, useState} from 'react'

export const VeiculoAttContext = createContext({})

export default function VeiculoAttProvider({children}){

    const [veiculoID, setVeiculoID] = useState()

    const [veiculoParaAtt, setVeiculoParaAtt] = useState({})
    const [atualizarVeiculo, setAtualizarVeiculo] = useState(false)

    return(
        <VeiculoAttContext.Provider value={{setVeiculoParaAtt, veiculoParaAtt, setAtualizarVeiculo, atualizarVeiculo, setVeiculoID, veiculoID }}>
            {children}
        </VeiculoAttContext.Provider>
    )
}
