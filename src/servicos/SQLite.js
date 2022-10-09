import * as SQLite from "expo-sqlite";

function abreConexao(){
    const database = SQLite.openDatabase("db.db");
    return database;
}

export const db = abreConexao();

export function criaTabela(){

    db.transaction(transaction => {
        transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
        "Veiculos " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, tipo TEXT NOT NULL, marca INTEGER NOT NULL, modelo TEXT NOT NULL, ano TINYINT NOT NULL, apelido TEXT, FOREIGN KEY([marca]) REFERENCES [Marcas]([id]));"
        )

        transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS "+
        "Marcas " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, marca TEXT NOT NULL, tipo TEXT NOT NULL);"
        ) //ainda haverá coluna simbolo e imagem em Marcas

        transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS "+
        "Eventos " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, tipo TEXT NOT NULL, titulo TEXT NOT NULL, data DATE NOT NULL DEFAULT CURRENT_DATE, hodometro INTEGER NOT NULL, valor FLOAT NOT NULL, local BLOB, obs TEXT, veiculo INTEGER NOT NULL, FOREIGN KEY([veiculo]) REFERENCES [Veiculos]([id]));"
        )

        transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS "+
        "Abastecimentos " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, tipo TEXT NOT NULL, titulo TEXT, data DATE NOT NULL DEFAULT CURRENT_DATE, hodometro INTEGER NOT NULL, valorPorL FLOAT NOT NULL, valor FLOAT NOT NULL, litros FLOAT NOT NULL, local BLOB, veiculo INTEGER NOT NULL, FOREIGN KEY([veiculo]) REFERENCES [Veiculos]([id]));"
        )

        transaction.executeSql(
        "CREATE TABLE IF NOT EXISTS "+
        "Lembretes " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, data DATE NOT NULL DEFAULT CURRENT_DATE, lembrete TEXT NOT NULL, target BLOB NOT NULL, veiculo INTEGER NOT NULL, FOREIGN KEY([veiculo]) REFERENCES [Veiculos]([id]));"
        )
    })
}
export function excluiVeiculos(){
    db.transaction(transaction => {
        transaction.executeSql("DELETE FROM Veiculos;")
    })
}

export function excluiMarcas(){
    db.transaction(transaction => {
        transaction.executeSql("DELETE FROM Marcas;")
    })
}

export function excluiEventos(){
    db.transaction(transaction => {
        transaction.executeSql("DELETE FROM Eventos;")
    })
}

export function excluiTabela(){
    db.transaction(transaction => {
        transaction.executeSql("DROP TABLE IF EXISTS Abastecimentos;")
    })
}