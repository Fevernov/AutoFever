import { db } from "./SQLite"

export async function buscaMarcas(tipoVeiculo){ 

    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql("SELECT marca, id FROM Marcas WHERE tipo = (?);", 
            [tipoVeiculo], (transaction, resultado) => {
                resolve(resultado.rows._array)
            }, (_,error) => {
                reject(error)
              })
        })
    })
}

export async function adicionaMarcas(){

    return new Promise((resolve, reject) => {
        db.transaction(transaction => {
            transaction.executeSql(
                "INSERT INTO Marcas (marca, tipo) VALUES " +
                "(?, ?), " +//(Abarth, Carro)
                "(?, ?), " +//(Acura, Carro)
                "(?, ?), " +//(Alfa Romeo, Carro)
                "(?, ?), " +//(Aston Martin, Carro)
                "(?, ?), " +//(Audi, Carro)
                "(?, ?), " +//(Bentley, Carro)
                "(?, ?), " +//(BMW, Carro)
                "(?, ?), " +//(Brabus, Carro)
                "(?, ?), " +//(Bugatti, Carro)
                "(?, ?), " +//(Buick, Carro)
                "(?, ?), " +//(Cadillac, Carro)
                "(?, ?), " +//(Chery, Carro)
                "(?, ?), " +//(Chevrolet, Carro)
                "(?, ?), " +//(Chrysler, Carro)
                "(?, ?), " +//(Citroen, Carro)
                "(?, ?), " +//(Delorean, Carro)
                "(?, ?), " +//(Dodge, Carro)
                "(?, ?), " +//(Ferrari, Carro)
                "(?, ?), " +//(FIAT, Carro)
                "(?, ?), " +//(Ford, Carro)
                "(?, ?), " +//(GMC, Carro)
                "(?, ?), " +//(Gurgel, Carro)
                "(?, ?), " +//(Honda, Carro)
                "(?, ?), " +//(Hummer, Carro)
                "(?, ?), " +//(Hyunday, Carro)
                "(?, ?), " +//(Infiniti, Carro)
                "(?, ?), " +//(JAC, Carro)
                "(?, ?), " +//(Jaguar, Carro)
                "(?, ?), " +//(Jeep, Carro)
                "(?, ?), " +//(Kia, Carro)
                "(?, ?), " +//(Koenigsegg, Carro)
                "(?, ?), " +//(Lamborghini, Carro)
                "(?, ?), " +//(Land Rover, Carro)
                "(?, ?), " +//(Lexus, Carro)
                "(?, ?), " +//(Lifan, Carro)
                "(?, ?), " +//(Lincoln, Carro)
                "(?, ?), " +//(Lotus, Carro)
                "(?, ?), " +//(Maserati, Carro)
                "(?, ?), " +//(Mazda, Carro)
                "(?, ?), " +//(Mclaren, Carro)
                "(?, ?), " +//(Mercedes-Benz, Carro)
                "(?, ?), " +//(Mini, Carro)
                "(?, ?), " +//(Mitsubishi, Carro)
                "(?, ?), " +//(Nissan, Carro)
                "(?, ?), " +//(Opel, Carro)
                "(?, ?), " +//(Pagani, Carro)
                "(?, ?), " +//(Peugeot, Carro)
                "(?, ?), " +//(Plymouth, Carro)
                "(?, ?), " +//(Pontiac, Carro)
                "(?, ?), " +//(Porsche, Carro)
                "(?, ?), " +//(Renault, Carro)
                "(?, ?), " +//(Rolls-Royce, Carro)
                "(?, ?), " +//(Saleen, Carro)
                "(?, ?), " +//(Smart, Carro)
                "(?, ?), " +//(Subaru, Carro)
                "(?, ?), " +//(Suzuki, Carro)
                "(?, ?), " +//(Tesla, Carro)
                "(?, ?), " +//(Toyota, Carro)
                "(?, ?), " +//(Troller, Carro)
                "(?, ?), " +//(Volkswagen, Carro)
                "(?, ?), " +//(Volvo, Carro)
                "(?, ?), " +//(Aprilia, Motocicleta)
                "(?, ?), " +//(Benelli, Motocicleta)
                "(?, ?), " +//(BMW, Motocicleta)
                "(?, ?), " +//(Dafra, Motocicleta)
                "(?, ?), " +//(Ducati, Motocicleta)
                "(?, ?), " +//(Harley Davidson, Motocicleta)
                "(?, ?), " +//(Honda, Motocicleta)
                "(?, ?), " +//(Husqvarna, Motocicleta)
                "(?, ?), " +//(Indian, Motocicleta)
                "(?, ?), " +//(Kasinski, Motocicleta)
                "(?, ?), " +//(Kawasaki, Motocicleta)
                "(?, ?), " +//(KTM, Motocicleta)
                "(?, ?), " +//(Lifan, Motocicleta)
                "(?, ?), " +//(Mv Agusta, Motocicleta)
                "(?, ?), " +//(Royal Enfield, Motocicleta)
                "(?, ?), " +//(Suzuki, Motocicleta)
                "(?, ?), " +//(Triumph, Motocicleta)
                "(?, ?), " +//(Vespa, Motocicleta)
                "(?, ?), " +//(Voltz, Motocicleta)
                "(?, ?), " +//(Yamaha, Motocicleta)
                "(?, ?), " +//(Agrale, Caminhão)
                "(?, ?), " +//(DAF, Caminhão)
                "(?, ?), " +//(Ford, Caminhão)
                "(?, ?), " +//(Foton, Caminhão)
                "(?, ?), " +//(Freightliner, Caminhão)
                "(?, ?), " +//(Hyundai, Caminhão)
                "(?, ?), " +//(Iveco, Caminhão)
                "(?, ?), " +//(Kenworth, Caminhão)
                "(?, ?), " +//(Mack, Caminhão)
                "(?, ?), " +//(MAN, Caminhão)
                "(?, ?), " +//(Mercedes-Benz, Caminhão)
                "(?, ?), " +//(Peterbilt, Caminhão)
                "(?, ?), " +//(Renault, Caminhão)
                "(?, ?), " +//(Scania, Caminhão)
                "(?, ?), " +//(Volkswagen, Caminhão)
                "(?, ?), " +//(Agrale, Ônibus)
                "(?, ?), " +//(Iveco, Ônibus)
                "(?, ?), " +//(MAN, Ônibus)
                "(?, ?), " +//(Marcopolo, Ônibus)
                "(?, ?), " +//(Mercedes-Benz, Ônibus)
                "(?, ?), " +//(Scania, Ônibus)
                "(?, ?), " +//(Volkswagen, Ônibus)
                "(?, ?);",  //(Volvo, Ônibus)
                ["Abarth","Carro","Acura","Carro","Alfa Romeo","Carro","Aston Martin","Carro","Audi","Carro","Bentley","Carro","BMW","Carro",
                "Brabus","Carro","Bugatti","Carro","Buick","Carro","Cadillac","Carro","Chery","Carro","Chevrolet","Carro","Chrysler","Carro",
                "Citroen","Carro" ,"Delorean","Carro","Dodge","Carro","Ferrari","Carro","FIAT","Carro","Ford","Carro","GMC","Carro",
                "Gurgel","Carro","Honda","Carro","Hummer","Carro","Hyunday","Carro","Infiniti","Carro","JAC","Carro","Jaguar","Carro",
                "Jeep","Carro","Kia","Carro","Koenigsegg","Carro","Lamborghini","Carro","Land Rover","Carro","Lexus","Carro","Lifan","Carro",
                "Lincoln","Carro","Lotus","Carro","Maserati","Carro","Mazda","Carro","Mclaren","Carro","Mercedes-Benz","Carro","Mini","Carro",
                "Mitsubishi","Carro",'Nissan',"Carro","Opel","Carro","Pagani","Carro","Peugeot","Carro","Plymouth","Carro","Pontiac","Carro",
                "Porsche","Carro","Renault","Carro","Rolls-Royce","Carro","Saleen","Carro","Smart","Carro","Subaru","Carro","Suzuki","Carro",
                "Tesla","Carro","Toyota","Carro","Troller","Carro","Volkswagen","Carro","Volvo","Carro","Aprilia","Motocicleta","Benelli","Motocicleta",
                "BMW","Motocicleta","Dafra","Motocicleta","Ducati","Motocicleta","Harley Davidson","Motocicleta","Honda","Motocicleta",
                "Husqvarna","Motocicleta","Indian","Motocicleta","Kasinski","Motocicleta","Kawasaki","Motocicleta","KTM","Motocicleta",
                "Lifan","Motocicleta","Mv Agusta","Motocicleta","Royal Enfield","Motocicleta","Suzuki","Motocicleta","Triumph","Motocicleta",
                "Vespa","Motocicleta","Voltz","Motocicleta","Yamaha","Motocicleta","Agrale","Caminhão","DAF","Caminhão","Ford","Caminhão",
                "Foton","Caminhão","Freightliner","Caminhão","Hyundai","Caminhão","Iveco","Caminhão","Kenworth","Caminhão","Mack","Caminhão",
                "MAN","Caminhão","Mercedes-Benz","Caminhão","Peterbilt","Caminhão","Renault","Caminhão","Scania","Caminhão","Volkswagen","Caminhão",
                "Agrale","Ônibus","Iveco","Ônibus","MAN","Ônibus","Marcopolo","Ônibus","Mercedes-Benz","Ônibus","Scania","Ônibus","Volkswagen","Ônibus",
                "Volvo","Ônibus"],                
                (transaction, results) => {
                    if (results.rowsAffected > 0) {
                      console.log('Inserido dados')
                    } else {
                      console.log('Não inserido dados')
                    }
                    resolve("Marcas adicionados com sucesso!")}, 
                    (_,error) => {
                        reject(error)
                    })
        })
    })
}
