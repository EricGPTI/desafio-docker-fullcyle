const express = require('express')
const app =  express()
const port =  3000
const config = {
    host: 'mysql_db',
    user: 'root',
    password: 'root',
    database: 'nodeappdb',
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Eric Gomes')`
const get = `SELECT * FROM people`

connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1> Full Cycle Rocks</h1')
    connection.connect()
    connection.query(get, function (error, results) {
        if (error) throw error
        res.send('<h2>{results}</h2>')
    })
    connection.end()
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})