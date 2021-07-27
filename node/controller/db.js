const mysql = require('mysql')

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
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
        const sqlInsert = [ `INSERT INTO people(name) values('Wesley Willians');`,
                    `INSERT INTO people(name) values('Luiz Carlos');`,
                    `INSERT INTO people(name) values('Guilherme Ferreira');`,
                    `INSERT INTO people(name) values('Leonan Luppi');`,
                    `INSERT INTO people(name) values('Marcelo Rodrigues');`]
                    
        sqlInsert.forEach(row => {
            connection.query(row)
        })
    }
}


