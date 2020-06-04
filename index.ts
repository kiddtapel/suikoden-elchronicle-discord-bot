import {white} from "color-name";

const Discord = require('discord.js');
const client = new Discord.Client();
import {Collection, Message, MessageAttachment} from "discord.js";
const tesseract = require("node-tesseract-ocr");
import * as Bluebird from "bluebird";
import {Calculator} from "./lib/calculator.controller";

const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
};

let whitelisted = ['MonkeyWrench#8202', 'Evil#5506', 'Frank/AstroPH#5231', 'Chuckiel/Licht#5402'];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg: Message) => {
    if (`${msg.author.username}#${msg.author.discriminator}` === 'Suikoden-Guild-Bot#5382') return;
    if (whitelisted.indexOf(`${msg.author.username}#${msg.author.discriminator}`) === -1) {
        console.error(`${msg.author.username}#${msg.author.discriminator} is not whitelisted`);
        // msg.reply('Sorry! You are not authorized.');
        return;
    }
    if (msg.content.toLowerCase() === 'ping') {
        msg.reply('Pong!');
    }
    if (msg.content.toLowerCase().indexOf('pogi') > -1) {
        msg.reply('ako ang pogi!');
    }
    if (msg.content.toLowerCase().indexOf('pangit') > -1) {
        msg.reply('ikaw ang pangit!');
    }
    // if (msg.attachments) {
    //     await Bluebird.each(msg.attachments.array(), async (value: MessageAttachment) => {
    //
    //         if (value.width && value.height) {
    //             try {
    //                 await download(value.url, value.filename);
    //                 let text = await tesseract.recognize(value.filename, config);
    //                 console.log(value.filename);
    //                 console.log(text);
    //             } catch(error) {
    //                 console.error(error);
    //             } finally {
    //                 fs.unlinkSync(value.filename);
    //             }
    //         }
    //     });
    // }
    if (msg.content && msg.content.toLowerCase().split(' ')[0] === 'war') {
        console.log(`message from ${msg.author.username}#${msg.author.discriminator}: ${msg.content}`);
        let calculator = new Calculator();
        calculator.tier = parseInt(msg.content.split(' ')[1]);
        if ([1, 2, 3].indexOf(calculator.tier) > -1) {
            calculator.changeTier();
            let targetScore = parseInt(msg.content.split(' ')[2]);
            let a1TimeLeft = msg.content.split(' ')[3];
            let a2TimeLeft = msg.content.split(' ')[4];
            let a3TimeLeft = msg.content.split(' ')[5];
            if (isFinite(targetScore)) {
                let cases = calculator.getAdviceByScore(targetScore);
                cases.filter(c => c.show).map(strategy => calculator.getInstructions(calculator.getInstructionsFromStrategy(strategy, targetScore, a1TimeLeft, a2TimeLeft, a3TimeLeft), strategy.repetitions)).forEach(message => msg.reply(message));
            }
        }
    }
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
