let express = require('express');
if(express().get('env')==="development"){
    require('dotenv').config()
}
let router = express.Router();
const {PSQL_REPOSITORY} = require("../db/psql");


router.get("/", async function(req, res, next) {
    let latestPlayersIds = [21503595, 21502077, 21503590, 21502458, 21502803, 21502385];
    let topTierPlayersIds = [21503589, 21503604, 21502852, 21503126, 21502932,21502271,
        21503286, 21503461, 21502188, 21501668,21503327,21503613
    ];

    try {
        let arr1= await new PSQL_REPOSITORY().getLatestPlayers()
        let arr2 = await  new PSQL_REPOSITORY().getTopPlayers()

        res.json(
            {
                latestPlayers: arr1,
                topTierPlayers: arr2
            }
        );
    } catch (err) {
        console.error(`Error while getting quotes `, err.message);
        next(err);
    }

})

module.exports = router;
