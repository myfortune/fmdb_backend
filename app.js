//TODO:
// - Consider migrating database to AWS
// - Images must use the new addons for images
// - refactor and clean up codes

const CONFIG = require("./config.json");
const DEFAULT_PORT = 3030;
//modules

let express = require('express');
let app = express();

let path = require('path');
const bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let server = require('http').createServer(app);


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'public/images')));

//router for pages
let indexRouter = require('./routes/index');
let playersRouter = require('./routes/players');
let mainRouter = require('./routes/main');
let tierListRouter = require("./routes/tierList")
let testRouter = require("./routes/testAPI")


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//direct these path to the corresponding router
app.use('/', indexRouter);
app.use('/maincontent', mainRouter)
app.use('/players', playersRouter);
app.use('/tierList', tierListRouter);
app.use('/testAPI', testRouter);

// start the server with the port
let port = process.env.PORT || CONFIG.port || DEFAULT_PORT;
server.listen(port, function(){
    console.log(process.env.DATA_URL)
    console.log(express().get("env"))
    console.log("123");
    console.log(`Listening on port ${port}`)
});

module.exports = app;
