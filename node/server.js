const express = require('express')
const app = express()
const db = require("./controller/db")
const port = 3000

app.set('view engine','pug')

db.setPeople()

app.get('/', (req,res) => {

    db.getPeople( function(result) {
        //  console.log(JSON.parse(result))
         res.render('index', {
            message: 'Full Cycle Rocks!',
            listas: JSON.parse(result)
        })
    })
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
