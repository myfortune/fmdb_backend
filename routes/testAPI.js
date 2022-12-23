let express = require('express');
let router = express.Router();
//const {PSQL_REPOSITORY} = require("../db/psql");

router.get('/',  async function(req, res, next) {

    try {
        res.json(await new PSQL_REPOSITORY().getAllPlayers());


    } catch(err){
        console.error(`Error while getting quotes `, err.message);
        next(err);
    }
});

router.get('/:cardId',  async function(req, res, next) {

    try {
        //res.json(await new PSQL_REPOSITORY().getAllPlayers());
        let cardId = parseInt(req.params.cardId) + 1;
        console.log(cardId);
        res.json(cardId);

    } catch(err){
        console.error(`Error while getting quotes `, err.message);
        next(err);
    }
});


module.exports = router;
