const mysql = require('mysql')
const db_name = process.env.db_name
const user_db = process.env.user_db
const pass_db = process.env.pass_db

const config = {
    host: db_name,
    user: user_db,
    password: pass_db,
    database:'nodedb'
}

const connection = mysql.createConnection(config)

module.exports = { 
    getPeople: function (cb) {

        connection.query(
            `SELECT * FROM people`,
            (err, rows) => {
                if (err) throw err

                const result = rows.map((row) => { return row })
                return cb(JSON.stringify(result,null,2))
            })
    },
    setPeople: () => {
        connection.query(`SELECT COUNT(1) FROM people`, (err,result) => {
            if (err) throw err

            if (result[0].total === 0 ){
                const sqlInsert = [ `INSERT INTO people(name) values('Wesley Willians');`,
                `INSERT INTO people(name) values('Luiz Carlos');`,
                `INSERT INTO people(name) values('Guilherme Ferreira');`,
                `INSERT INTO people(name) values('Leonan Luppi');`,
                `INSERT INTO people(name) values('Marcelo Rodrigues');`]
                
                sqlInsert.forEach(row => {
                    connection.query(row)
                })    
            }
        })
    }
}


