"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bot = /** @class */ (function () {
    function Bot() {
        this.whitelisted = [
            'MonkeyWrench#8202',
            'Evil#5506',
            // 'Frank/AstroPH#5231',
            // 'Chuckiel/Licht#5402',
            'itan#4280',
            // '. Phoenix#9208',
            'Esdeath#2053',
            'Donavern#6541',
            'sushi#3808',
            'Kaiiiiiiii#3401',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFBQTtRQUVJLGdCQUFXLEdBQUc7WUFDVixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLHdCQUF3QjtZQUN4Qix5QkFBeUI7WUFDekIsV0FBVztZQUNYLG9CQUFvQjtZQUNwQixjQUFjO1lBQ2QsZUFBZTtZQUNmLFlBQVk7WUFDWixpQkFBaUI7U0FHcEIsQ0FBQztJQW9FTixDQUFDO0lBbEVVLHFCQUFPLEdBQWQsVUFBZSxHQUFZLEVBQUUsVUFBVTtRQUNuQyxJQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxTQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBZSxLQUFLLHlCQUF5QjtZQUFFLE9BQU87UUFDL0YsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsU0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3ZGLE9BQU8sQ0FBQyxLQUFLLENBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLFNBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLHdCQUFxQixDQUFDLENBQUM7WUFDdkYsK0NBQStDO1lBQy9DLE9BQU87U0FDVjtRQUNELElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFDdEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QjtRQUNELElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDaEQsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUs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