import * as SQLite from "expo-sqlite"

function abreConexao(){
    const database = SQLite.openDatabase("db.db")
    return database
}

export const db = abreConexao();

export function criaTabela(){

    db.transaction(transaction => {
        transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
        "Veiculos " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, tipo TEXT NOT NULL, marca INTEGER NOT NULL, modelo TEXT NOT NULL, ano TINYINT NOT NULL, hodometro INTEGER NOT NULL, FOREIGN KEY([marca]) REFERENCES [Marcas]([id]));"
        )

        transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS "+
        "Marcas " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, marca TEXT NOT NULL, tipo TEXT NOT NULL);"
        ) //ainda haverá coluna simbolo e foto em Marcas

        transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS "+
        "Eventos " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, tipo TEXT NOT NULL, titulo TEXT, data DATE NOT NULL DEFAULT CURRENT_DATE, hodometro INTEGER, valor FLOAT NOT NULL, valorPorL FLOAT, litros FLOAT, local BLOB, obs TEXT, veiculo INTEGER NOT NULL, FOREIGN KEY([veiculo]) REFERENCES [Veiculos]([id]));"
        )

        transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS "+
        "Lembretes " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, data DATE NOT NULL DEFAULT CURRENT_DATE, lembrete TEXT NOT NULL, target BLOB NOT NULL, veiculo INTEGER NOT NULL, FOREIGN KEY([veiculo]) REFERENCES [Veiculos]([id]));"
        )
    })
}

export function excluiItens(){
    db.transaction(transaction => {
        transaction.executeSql("DELETE FROM Veiculos;")
    })
}

export function excluiTabela(){
    db.transaction(transaction => {
        transaction.executeSql("DROP TABLE IF EXISTS Veiculos;")
    })
}