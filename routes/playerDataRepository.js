class PlayerRepository {
    constructor(db) {

        this.db = db;
    }

    //TODO:
    // - get first name, last name from data base and add it to decoded_all

    getAllPlayerCards() {
        return this.db.all(
            `SELECT * 
            FROM all_combined_base
            WHERE program != 'BASEITEM'`
            //  Select these columns instead of getting all
            //  `SELECT cardId, displayName as Name,
            //  program,
            //  overall,
            //  positionName as Position,
            //  teamId as Team,
            //  leagueId,
            //  leagueName,
            // countryId ,
            //  countryName
            //  FROM combinedMax
            //  WHERE program != 'BASEITEM'`
        );
    }

    getTierList() {
        return this.db.all(
            `SELECT * 
            FROM combinedMax
            WHERE program != 'BASEITEM'`
            //  Select these columns instead of getting all
            //  `SELECT cardId, displayName as Name,
            //  program,
            //  overall,
            //  positionName as Position,
            //  teamId as Team,
            //  leagueId,
            //  leagueName,
            // countryId ,
            //  countryName
            //  FROM combinedMax
            //  WHERE program != 'BASEITEM'`
        );
    }
    getPlayerCard(cardId){
        console.log(cardId);
        return this.db.get(
            `SELECT * FROM all_combined_base WHERE cardId is ${cardId}
            `
        )
    }

    getAllTeams() {
        return this.db.all(
            `SELECT teamName as TEAM, leagueName as LEAGUE FROM teams `
        )
    }

    getAllLeagues() {
        return this.db.all(
            `SELECT * FROM leagues `
        )
    }
}

module.exports = PlayerRepository;