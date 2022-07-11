let express = require('express');
if (express().get('env') === "development") {
    require('dotenv').config()
}
let router = express.Router();
const {PSQL_REPOSITORY} = require("../db/psql");


//
// const psql = require("../db/psql")
// const sslOpt = {
//     rejectUnauthorized: false
// }
//
//
// const pool = express().get('env') === "development" ?
//     psql.init_pool(process.env.DATABASE_URL) :
//     psql.init_pool(process.env.DATABASE_URL, sslOpt);


/* GET users listing. */
router.get('/', async function (req, res, next) {
    try {
        res.json(await new PSQL_REPOSITORY().getAllPlayers());
    } catch (err) {
        console.error(`Error while getting quotes `, err.message);
        next(err);
    }

});

router.get('/:cardId', async function (req, res, next) {
    try {

        let cardId = req.params.cardId;
        let cardObj = await new PSQL_REPOSITORY().getPlayerByCardId(cardId);
        res.json(cardObj[0])

    } catch (err) {
        console.error(`Error while getting quotes `, err.message);
        next(err);
    }


});


module.exports = router;
