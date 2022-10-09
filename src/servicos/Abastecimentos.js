import { db } from "./SQLite"

export async function adicionaAbastecimento(evento){
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql("INSERT INTO Abastecimentos (hodometro, tipo, valorPorL, valor, litros, local, titulo, veiculo) VALUES (?, ?, ?, ?, ?, ?, ?, ?);", 
            [evento.hodometro, evento.tipo, evento.valorPorL, evento.valor, evento.litros, evento.local, evento.titulo, evento.veiculo], () => {
                resolve("Evento adicionado com sucesso!")
            },
            (_,error) => {
                reject(error)
            })
        })
    })
}

export async function buscaAbastecimentos(veiculoSelecionado){
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql("SELECT * FROM Abastecimentos WHERE veiculo=?;", 
            [veiculoSelecionado], (transaction, resultado) => {
                resolve(resultado.rows._array)
            },
            (_,error) => {
                reject(error)
            })
        })
    })
}

export async function atualizaAbastecimento(evento){
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql("UPDATE Abastecimentos SET hodometro= ?, valorPorL= ?, valor=?, litros=?, local= ?, titulo= ?, veiculo=? WHERE id= ?;", 
            [evento.hodometro, evento.valorPorL, evento.valor, evento.litros, evento.local, evento.obs, evento.veiculo, evento.id], () => {
                resolve("Evento atualizado com sucesso!")
            },
            (_,error) => {
                reject(error)
            })
        })
    })
}

export async function removeAbastecimento(evento){
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql("DELETE FROM Abastecimentos WHERE id= ?;", 
            [evento.id], () => {
                resolve("Evento deletado com sucesso!")
            },
            (_,error) => {
                reject(error)
            })
        })
    })
}