require('dotenv').config()

var express = require('express');
var router = express.Router();
const PlayerRepository = require("./playerDataRepository.js");
const PlayersDB = require("../db/playersDB");


const psql = require("../db/psql")
const connectionString = process.env.DATABASE_URL;


const pool = psql.init_pool( process.env.DATABASE_URL)


const db = new PlayersDB();


/* GET users listing. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await psql.query(pool , `SELECT * 
            FROM all_combined_base
            WHERE program != 'BASEITEM'`));
    } catch (err) {
        console.error(`Error while getting quotes `, err.message);
        next(err);
    }



    // console.log(rows);
    // res.status(200).send(rows);
    //
    // let repo = new PlayerRepository(db);
    // let all_data = repo.getAllPlayerCards().then(resp =>{
    //     let arr = resp;
    //     // arr = arr.slice(1, 30);
    //zz
    //     res.send( arr);
    // })
});

router.get('/:cardId', function(req, res, next) {

    let cardId = req.params.cardId;
    console.log(cardId)
    let repo = new PlayerRepository(db);
    let all_data = repo.getPlayerCard(cardId).then(resp => {
        let card = resp;
        console.log(card);
        res.send(card);
    })
});


/* GET users listing. */
router.get('/hero', function(req, res, next) {
    res.send('respond with a 1213');
});

module.exports = router;
