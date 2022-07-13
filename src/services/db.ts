const pg  = require('pg')//
const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'tmp',
    password: 'EDMils1406postgres',
    port: 5432,
})

/*
const db1 = async function connect() {
    if (globalAny.connection)
        return globalAny.connection.connect();
        
    const { Db } = require('pg')//drive para conectar node e postgres
    
          
    globalAny.connection = db;
    return db.connect();
}*/
async function connect(){
    if(!db._connected){
        await db.connect()
        console.log("entrando para conectar")
    }
}
module.exports = db;



/*
export const dbQuery = (query: string, params?: any[]) => {
    db.connect()
    return new Promise<any[]>((resolve, reject) => {
        db.all(query, params, (err: any, rows: any) => {
            if(err)
                reject(err);
            else
                resolve(rows)
        })
    })
    .finally(() => {
        db.end();
    })

}*/