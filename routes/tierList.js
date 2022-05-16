var express = require('express');
var router = express.Router();
const PlayerRepository = require("./playerDataRepository.js");
const PlayersDB = require("../db/playersDB");


const db = new PlayersDB();




router.get("/", function(req, res){
    let repo = new PlayerRepository(db);
     repo.getTierList().then(resp =>{
        let arr = resp;
        // arr = arr.slice(1, 30);

        res.send( arr);
    })
})


module.exports= router;