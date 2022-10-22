import React, {createContext, useState} from 'react'

export const EventoAttContext = createContext({})

export default function EventoAttProvider({children}){

    const [eventoParaAtt, setEventoParaAtt] = useState({})
    const [atualizarEvento, setAtualizarEvento] = useState(false)

    const [eventosFiltrados, setEventosFiltrados] = useState()

    return(
        <EventoAttContext.Provider value={{eventoParaAtt, setEventoParaAtt, atualizarEvento, setAtualizarEvento, eventosFiltrados, setEventosFiltrados }}>
            {children}
        </EventoAttContext.Provider>
    )
}
