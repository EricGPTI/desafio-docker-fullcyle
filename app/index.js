const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');

const sql = `INSERT INTO people(name) values('Eric Gomes')`;
const get = `SELECT * FROM people`;

app.get('/', (req, res) => {
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Erro ao inserir registro no banco de dados');
            } else {
                db.query(get, (err, result) => {
                    if (err) {
                        res.status(500).send('Erro ao consultar dados no banco de dados');
                    } else {
                        const names = result.map(row => row.name);
                        res.send(`
                            <h1>Full Cycle Rocks</h1>
                            <h2>${names.join('<br> ')}</h2>`
                            /*<h2>${JSON.stringify(result)}</h2>`*/
                        );
                    }
                });
            }       
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});
/*
        }
    })
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send('Erro ao inserir registro no banco de dados');
        } else {
            db.query(get, (err, result) => {
                if (err) {
                    res.status(500).send('Erro ao consultar dados no banco de dados');
                } else {
                    res.send(`
                        <h1>Full Cycle Rocks</h1>
                        <h2>${JSON.stringify(result)}</h2>
                    `);
                }
            });
        }
    });
});

*/
