let express = require('express');
let router = express.Router();
const {PSQL_REPOSITORY} = require("../db/psql");

router.get('/',  async function(req, res, next) {

    try {
        res.json(await new PSQL_REPOSITORY().getAllPlayers());
    } catch(err){
        console.error(`Error while getting quotes `, err.message);
        next(err);
    }
});


module.exports = router;
