import { db } from "./SQLite"

export async function adicionaVeiculo(veiculo){
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql("INSERT INTO Veiculos (tipo, marca, modelo, ano, apelido) VALUES (?, ?, ?, ?, ?);", 
            [veiculo.tipo, veiculo.marca, veiculo.modelo, veiculo.ano, veiculo.apelido], () => {
                resolve("Veiculo adicionado com sucesso!")
            },
            (_,error) => {
                reject(error)
            })
        })
    })
}

export async function buscaVeiculos(){
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql("SELECT * FROM Veiculos;", 
            [], (transaction, resultado) => {
                resolve(resultado.rows._array)
            },
            (_,error) => {
                reject(error)
            })
        })
    })
}

export async function atualizaVeiculo(veiculo){
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql("UPDATE Veiculos SET tipo= ?, marca= ?, modelo= ?, ano= ?, apelido= ? WHERE id= ?;", 
            [veiculo.tipo, veiculo.marca, veiculo.modelo, veiculo.ano, veiculo.apelido, veiculo.id], () => {
                resolve("Veiculo atualizado com sucesso!")
            },
            (_,error) => {
                reject(error)
            })
        })
    })
}

export async function removeVeiculo(veiculo){
    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql("DELETE FROM Veiculos WHERE id= ?;", 
            [veiculo.id], () => {
                resolve("Veiculo deletado com sucesso!")
            },
            (_,error) => {
                reject(error)
            })
        })
    })
}