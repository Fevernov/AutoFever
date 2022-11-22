import { db } from "./SQLite"

export async function adicionaEvento(evento){
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql("INSERT INTO Eventos (tipo, titulo, hodometro, valor, valorPorL, litros, local, obs, veiculo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);", 
            [evento.tipo, evento.titulo, evento.hodometro, evento.valor, evento.valorPorL, evento.litros, evento.local, evento.obs, evento.veiculo], () => {
                resolve("Evento adicionado com sucesso!")
            },
            (_,error) => {
                reject(error)
            })
        })
    })
}

export async function buscaEventos(veiculoSelecionado){
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql("SELECT * FROM Eventos WHERE veiculo=?;", 
            [veiculoSelecionado], (transaction, resultado) => {
                resolve(resultado.rows._array)
            },
            (_,error) => {
                reject(error)
            })
        })
    })
}

export async function atualizaEvento(evento){
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql("UPDATE Eventos SET tipo= ?, titulo= ?, data= ?, hodometro= ?, valor= ?, valorPorL= ?, litros= ?, local= ?, obs= ?, veiculo=? WHERE id= ?;", 
            [evento.tipo, evento.titulo, evento.data, evento.hodometro, evento.valor, evento.valorPorL, evento.litros, evento.local, evento.obs, evento.veiculo, evento.id], () => {
                resolve("Evento atualizado com sucesso!")
            },
            (_,error) => {
                reject(error)
            })
        })
    })
}

export async function removeEvento(evento){
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql("DELETE FROM Eventos WHERE id= ?;", 
            [evento.id], () => {
                resolve("Evento deletado com sucesso!")
            },
            (_,error) => {
                reject(error)
            })
        })
    })
}