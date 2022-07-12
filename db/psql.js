
const {Pool} = require('pg');




async function query(pool, query, params) {
    const {rows, fields} = await pool.query(query, params);
    return rows;
}


class PSQL_REPOSITORY {

    constructor(){
        const connectionString =
            process.env.DATA_URL;
        this.db = new Pool({
            connectionString
        })
    }

    getAllPlayers(){
        let psql_query = `SELECT * FROM all_combined_base`
        return query(this.db, psql_query);
    }

    getPlayerByCardId(cardId){
        let psql_query = `SELECT * FROM all_combined_base WHERE "cardId" = ${cardId}`
        return query(this.db, psql_query);
    }

    getLatestPlayers(){
        let psql_query = `SELECT * 
            FROM all_combined_base
            WHERE program != 'BASEITEM' AND 
                "cardId" in (21503595, 21502077, 21503590, 21502458, 21502803, 21502385)`
        return query(this.db, psql_query);

    }

    getTopPlayers(){
        let psql_query = `SELECT * 
            FROM "combinedMax"
            WHERE program != 'BASEITEM' AND 
                "cardId" in (21503589, 21503604, 21502852, 21503126, 21502932,21502271,
        21503286, 21503461, 21502188, 21501668,21503327,21503613)`
        return query(this.db, psql_query);


    }

    getTierList(){
        let psql_query = `SELECT * FROM "combinedMax"`
        return query(this.db, psql_query);

    }




}
module.exports = {PSQL_REPOSITORY};