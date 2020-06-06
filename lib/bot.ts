import {Message} from "discord.js";
import {Calculator} from "./calculator.controller";

export class Bot {

    whitelisted = ['MonkeyWrench#8202', 'Evil#5506', 'Frank/AstroPH#5231', 'Chuckiel/Licht#5402', 'Esdeath#2053'];

    public process(msg: Message, calculator) {
        if (`${msg.author.username}#${msg.author.discriminator}` === 'Suikoden-Guild-Bot#5382') return;
        if (this.whitelisted.indexOf(`${msg.author.username}#${msg.author.discriminator}`) === -1) {
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
            let messageParts = msg.content.split(/\s+/);
            calculator.tier = parseInt(messageParts[1]);
            if ([1, 2, 3].indexOf(calculator.tier) > -1) {
                calculator.changeTier();
                let targetScore = parseInt(messageParts[2]);
                let a1TimeLeft = messageParts[3];
                let a2TimeLeft = messageParts[4];
                let a3TimeLeft = messageParts[5];
                let timeRegex = /[0-1]:[0-5][0-9]/;
                if (a1TimeLeft && !a1TimeLeft.match(timeRegex))
                    return msg.reply('Invalid Time for area 1: ' + a1TimeLeft);
                if (a2TimeLeft && !a2TimeLeft.match(timeRegex))
                    return msg.reply('Invalid Time for area 2: ' + a2TimeLeft);
                if (a3TimeLeft && !a3TimeLeft.match(timeRegex))
                    return msg.reply('Invalid Time for area 3: ' + a3TimeLeft);
                if (isFinite(targetScore)) {
                    let cases = calculator.getAdviceByScore(targetScore);
                    let sent = 0;
                    cases.filter(c => c.show).map(strategy => calculator.getInstructions(targetScore, calculator.getInstructionsFromStrategy(strategy, targetScore, a1TimeLeft, a2TimeLeft, a3TimeLeft), strategy.repetitions)).forEach(message => {
                        if (message) {
                            msg.reply(message);
                            sent++;
                        }
                    });
                    if (sent === 0) {
                        msg.reply('The target score is not possible.');
                    }
                }
            }
        }
    }
}
