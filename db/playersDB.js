const sqlite3 = require('sqlite3');
const Promise = require('bluebird');
const os = require("os");
const config = require("../config.json");


class PlayersDB {
    constructor() {

        let dbFilePath =
            (os.platform().toLowerCase().includes(config.platform_windows) ? config.db_dir_local_windows : config.db_dir_local_mac) +
            config.db_executable;
        this.db = new sqlite3.Database(dbFilePath, (err) => {
            if (err) {
                console.log("cna't connect to database", err);
            } else {
                console.log("connected to database");
            }
        })
    }

    get(query, params = []) {
        return new Promise((resolve, reject) => {
            this.db.get(query, params, (err, result) => {
                if (err) {
                    console.log('Error running sql: ' + query)
                    console.log(err)
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    all(query, params = []) {
        return new Promise((resolve, reject) => {
            this.db.all(query, params, (err, rows) => {
                if (err) {
                    console.log('Error running sql: ' + query);
                    console.log(err);
                    reject(err)
                } else {
                    // console.log(rows);
                    resolve(rows);
                }
            })
        })
    }
}


module.exports = PlayersDB;