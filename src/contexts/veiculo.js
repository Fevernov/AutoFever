import React, {createContext, useState} from 'react'

export const VeiculoContext = createContext({})

export default function VeiculoProvider({children}){

    const [veiculoID, setVeiculoID] = useState()

    return(
        <VeiculoContext.Provider value={{setVeiculoID, veiculoID}}>
            {children}
        </VeiculoContext.Provider>
    )
}
