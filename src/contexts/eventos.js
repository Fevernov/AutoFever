import React, {createContext, useState} from 'react'

export const EventosContext = createContext({})

export default function EventosProvider({children}){

    const [eventosFiltrados, setEventosFiltrados] = useState()

    return(
        <EventosContext.Provider value={{eventosFiltrados, setEventosFiltrados}}>
            {children}
        </EventosContext.Provider>
    )
}
