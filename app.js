
const CONFIG = require("./config.json");
const DEFAULT_PORT = 3030;
//modules

let express = require('express');
let app = express();

let path = require('path');
const bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

const sqlite3 = require('sqlite3').verbose();
let server = require('http').createServer(app);


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public/images')));

//routing - examples
let indexRouter = require('./routes/index');
let playersRouter = require('./routes/players');
let tierListRouter = require("./routes/tierList")
let teamsRouter = require('./routes/teams');
let leaguesRouter = require('./routes/leagues');

//routing - actual
let playerScore = require('./routes/playerDataRepository');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/players', playersRouter);
app.use('/tierList', tierListRouter);


// app.use('/playerScore', playerScore);
// app.use('/teams', teamsRouter);
// app.use('/leagues', leaguesRouter);




// start the server with the port
let port = process.env.PORT || CONFIG.port || DEFAULT_PORT;
server.listen(port, function(){
    console.log('listening on port ' + port);
});

module.exports = app;