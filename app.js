require('dotenv').config()

var restify = require('restify');
var builder = require('botbuilder');
var christmasFactService = require('./services/christmasFactService');


//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('%s listening to %s', server.name, server.url);
});

var factService = new christmasFactService();

// Create chat bot
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);

server.post('/api/messages', connector.listen());



//=========================================================
// Bots Dialogs 
//=========================================================

var factIntents = new builder.IntentDialog()
    .matches(/till christmas/i, function(session) {
        console.log("match 1");
        var response = factService.getFact(factService.Facts.tillChristmas);
        session.endDialogWithResult(response);
    })
    .matches(/old is santa/i, function(session) {
        console.log("match 2");
        var response = factService.getFact(factService.Facts.santaAge);
        session.endDialogWithResult(response);
    })
    .matches(/reindeer does santa have/i, function(session) {
        console.log("match 3");
        var response = factService.getFact(factService.Facts.reindeerCount);
        session.endDialogWithResult(response);
    })
    .matches(/elves does santa have/i, function(session) {
        console.log("match 4");
        var response = factService.getFact(factService.Facts.elfCount);
        session.endDialogWithResult(response);
    })
    .matches(/santa live/i, function(session) {
        console.log("match 5");
        var response = factService.getFact(factService.Facts.locationUpdate);
        session.endDialogWithResult(response);
    })
    .onDefault(function(session) {
        console.log("match 6");
        session.endDialogWithResult(factService.defaultMessage());
    });

bot.dialog('/', [
    function(session, args, next) {
        console.log("test 1");
        session.send(factService.welcomeMessage());
        next();
    },
    function(session) {
        console.log("test 2");
        builder.Prompts.text(session, "What would you like me to say?");
        //session.beginDialog('/facts');
    },
    function(session, results) {
        console.log("test 3");
        session.beginDialog('/facts');
        session.send("Ok... %s", results.response)
    },
    function(session, results) {
        session.send("Ok... %s", results.response);
    }
]);

bot.dialog('/facts', factIntents);