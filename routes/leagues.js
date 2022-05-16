var express = require('express');
var router = express.Router();
const PlayerRepository = require("./playerDataRepository.js");
const PlayersDB = require("../db/playersDB");



//let db = new PlayersDB("C:\\Users\\lione\\Desktop\\FM_SRC\\test\\cache\\db\\decoded_ALL");
let db = new PlayersDB("/Users/sangjunahn/Desktop/FM_SRC/test/cache/db/decoded_ALL");

/* GET users listing. */
router.get('/', function(req, res, next) {
    let repo = new PlayerRepository(db);
    let all_data = repo.getAllLeagues().then(resp =>{

        res.send( resp);
    })
});

module.exports = router;


