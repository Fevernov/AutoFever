import React, {createContext, useState} from 'react'

export const EventoAttContext = createContext({})

export default function EventoAttProvider({children}){

    const [eventoParaAtt, setEventoParaAtt] = useState({})
    const [atualizarEvento, setAtualizarEvento] = useState(false)

    return(
        <EventoAttContext.Provider value={{eventoParaAtt, setEventoParaAtt, atualizarEvento, setAtualizarEvento }}>
            {children}
        </EventoAttContext.Provider>
    )
}
