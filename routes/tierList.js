// var express = require('express');
// var router = express.Router();
// const PlayerRepository = require("./playerDataRepository.js");
// const PlayersDB = require("../db/playersDB");
//
//
// const db = new PlayersDB();
let express = require('express');
if(express().get('env')==="development"){
    require('dotenv').config()
}
let router = express.Router();
const {PSQL_REPOSITORY} = require("../db/psql");



    router.get('/', async function(req, res, next) {
        try {
            res.json(await new PSQL_REPOSITORY().getTierList());
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


    // let repo = new PlayerRepository(db);
    //  repo.getTierList().then(resp =>{
    //     let arr = resp;
    //     res.send( arr);
    // })


module.exports= router;