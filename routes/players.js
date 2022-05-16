var express = require('express');
var router = express.Router();
const PlayerRepository = require("./playerDataRepository.js");
const PlayersDB = require("../db/playersDB");


const db = new PlayersDB();



/* GET users listing. */
router.get('/', function(req, res, next) {


    let repo = new PlayerRepository(db);
    let all_data = repo.getAllPlayerCards().then(resp =>{
        let arr = resp;
        // arr = arr.slice(1, 30);

        res.send( arr);
    })
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
