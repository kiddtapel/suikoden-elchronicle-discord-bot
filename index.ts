import {white} from "color-name";

const Discord = require('discord.js');
const client = new Discord.Client();
import {Collection, Message, MessageAttachment} from "discord.js";
const tesseract = require("node-tesseract-ocr");
import * as Bluebird from "bluebird";
import {Calculator} from "./lib/calculator.controller";
import {Bot} from "./lib/bot";

const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
};

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

let bot = new Bot();

client.on('message', async (msg: Message) => {
    let calculator = new Calculator();
    bot.process(msg, calculator);
});

var https = require('https');
var fs = require('fs');

var download = function(url, dest) {
    return new Promise((resolve, reject) => {
        var file = fs.createWriteStream(dest);
        var request = https.get(url, function(response) {
            response.pipe(file);
            file.on('finish', function() {
                file.close();  // close() is async, call cb after close completes.
                resolve();
            });
        }).on('error', function(err) { // Handle errors
            fs.unlink(dest); // Delete the file async. (But we don't check the result)
            reject(err);
        });
    });
};

client.login(process.env.BOT_TOKEN);
