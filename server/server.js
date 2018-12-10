const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/feedback',(req,res)=>{
    console.log(``);
})

app.post('/feedback',(req,res)=>{
    console.log(`Trying to post`,req.body);
    const queryString = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments","flagged") VALUES ($1, $2, $3,$4,FALSE);';
    pool.query(queryString,[req.body.feel, req.body.understand, req.body.support, req.body.comment]).then(result=>{
        res.sendStatus(204);
    }).catch(err=>{
        console.log(`Error from DB in post: ${err}`);
        res.sendStatus(500);
    })
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});