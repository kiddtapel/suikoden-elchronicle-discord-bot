"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bot = /** @class */ (function () {
    function Bot() {
        this.whitelisted = [
            'MonkeyWrench#8202',
            // 'Evil#5506',
            // 'Frank/AstroPH#5231',
            // 'Chuckiel/Licht#5402',
            'Esdeath#2053',
            'Donavern#6541',
            'sushi#3808',
            'Kaiiiiiiii#3401',
            // 'Saizuke#0392',
            // 'ZOISEKA1#0289',
        ];
    }
    Bot.prototype.process = function (msg, calculator) {
        if (msg.author.username + "#" + msg.author.discriminator === 'Suikoden-Guild-Bot#5382')
            return;
        if (this.whitelisted.indexOf(msg.author.username + "#" + msg.author.discriminator) === -1) {
            console.error(msg.author.username + "#" + msg.author.discriminator + " is not whitelisted");
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
            console.log("message from " + msg.author.username + "#" + msg.author.discriminator + ": " + msg.content);
            var messageParts = msg.content.split(/\s+/);
            calculator.tier = parseInt(messageParts[1]);
            if ([1, 2, 3].indexOf(calculator.tier) > -1) {
                calculator.changeTier();
                var targetScore_1 = parseInt(messageParts[2]);
                var a1TimeLeft_1 = messageParts[3];
                var a2TimeLeft_1 = messageParts[4];
                var a3TimeLeft_1 = messageParts[5];
                var timeRegex = /[0-1]:[0-5][0-9]/;
                if (a1TimeLeft_1 && !a1TimeLeft_1.match(timeRegex))
                    return msg.reply('Invalid Time for area 1: ' + a1TimeLeft_1);
                if (a2TimeLeft_1 && !a2TimeLeft_1.match(timeRegex))
                    return msg.reply('Invalid Time for area 2: ' + a2TimeLeft_1);
                if (a3TimeLeft_1 && !a3TimeLeft_1.match(timeRegex))
                    return msg.reply('Invalid Time for area 3: ' + a3TimeLeft_1);
                if (isFinite(targetScore_1)) {
                    var cases = calculator.getAdviceByScore(targetScore_1);
                    var sent_1 = 0;
                    cases.filter(function (c) { return c.show; }).map(function (strategy) { return calculator.getInstructions(targetScore_1, calculator.getInstructionsFromStrategy(strategy, targetScore_1, a1TimeLeft_1, a2TimeLeft_1, a3TimeLeft_1), strategy.repetitions); }).forEach(function (message) {
                        if (message) {
                            msg.reply(message);
                            sent_1++;
                        }
                    });
                    if (sent_1 === 0) {
                        msg.reply('The target score is not possible.');
                    }
                }
            }
        }
    };
    return Bot;
}());
exports.Bot = Bot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFBQTtRQUVJLGdCQUFXLEdBQUc7WUFDVixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLHdCQUF3QjtZQUN4Qix5QkFBeUI7WUFDekIsY0FBYztZQUNkLGVBQWU7WUFDZixZQUFZO1lBQ1osaUJBQWlCO1NBRXBCLENBQUM7SUFvRU4sQ0FBQztJQWxFVSxxQkFBTyxHQUFkLFVBQWUsR0FBWSxFQUFFLFVBQVU7UUFDbkMsSUFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsU0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWUsS0FBSyx5QkFBeUI7WUFBRSxPQUFPO1FBQy9GLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLFNBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUN2RixPQUFPLENBQUMsS0FBSyxDQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxTQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSx3QkFBcUIsQ0FBQyxDQUFDO1lBQ3ZGLCtDQUErQztZQUMvQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssTUFBTSxFQUFFO1lBQ3RDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEI7UUFDRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2hELEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FB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

