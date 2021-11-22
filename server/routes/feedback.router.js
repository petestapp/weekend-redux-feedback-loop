const router = require('express').Router();
const pool = require('../modules.pool.js');

// POST
router.post('/', (req, res)=>{
    const queryString = `INSERT INTO feedback (feeling, understanding, support, comments)
    VALUES ($1, $2, $3, $4)`;
    let values = [req.body.feeling, req.body.understanding, req.body.support, req.body.comments];
    pool.query(queryString, values).then((results)=>{
        res.sendStatus(201);
    }).catch((err)=>{
        console.log(`error inserting into database:`, err);
        res.sendStatus(500);
    })
})

module.exports = router;