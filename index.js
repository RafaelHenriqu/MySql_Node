const Mysql = require("mysql2")

async function Main(Infos='NaN',send){
    if (Infos=='NaN') return;
    let Nome = Infos[0]
    let Saldo = Infos[1]


    const Connection = Mysql.createConnection({
        host:"localhost",
        user:"root",
        password:'123123',
        database:"bancodedados",
    })


    if (send){
        Connection.query(`INSERT INTO dados(Nome,Saldo) Value ('${Nome}',${Saldo})`)
        console.log("Saldo Enviado Com exito!")
    }else{
        Connection.query(`SELECT * FROM Dados`,(err,results,fields)=>{
            let Result = 0
            results.forEach(e=>{
                Result=e["Saldo"]+Result                
            })
            Result = Result / fields.length
            console.log(Result)
            
        })
    }
    
}


Main(['Sywr',2],false)