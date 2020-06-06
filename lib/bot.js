"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bot = /** @class */ (function () {
    function Bot() {
        this.whitelisted = ['MonkeyWrench#8202', 'Evil#5506', 'Frank/AstroPH#5231', 'Chuckiel/Licht#5402', 'Esdeath#2053', 'Donavern#6541', 'sushi#3808', 'Kaiiiiiiii#3401', 'itan#4280'];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFBQTtRQUVJLGdCQUFXLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFvRWpMLENBQUM7SUFsRVUscUJBQU8sR0FBZCxVQUFlLEdBQVksRUFBRSxVQUFVO1FBQ25DLElBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLFNBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFlLEtBQUsseUJBQXlCO1lBQUUsT0FBTztRQUMvRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxTQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDdkYsT0FBTyxDQUFDLEtBQUssQ0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsU0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsd0JBQXFCLENBQUMsQ0FBQztZQUN2RiwrQ0FBK0M7WUFDL0MsT0FBTztTQUNWO1FBQ0QsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUN0QyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNoRCxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNsRCxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDakM7UUFDRCx5QkFBeUI7UUFDekIseUZBQXlGO1FBQ3pGLEVBQUU7UUFDRiw2Q0FBNkM7UUFDN0Msb0JBQW9CO1FBQ3BCLDZEQUE2RDtRQUM3RCxnRkFBZ0Y7UUFDaEYsK0NBQStDO1FBQy9DLHFDQUFxQztRQUNyQywrQkFBK0I7UUFDL0Isd0NBQXdDO1FBQ3hDLDBCQUEwQjtRQUMxQixpREFBaUQ7UUFDakQsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixVQUFVO1FBQ1YsSUFBSTtRQUNKLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBZ0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLFNBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLFVBQUssR0FBRyxDQUFDLE9BQVMsQ0FBQyxDQUFDO1lBQy9GLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxhQUFXLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLFlBQVUsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksWUFBVSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsSUFBSSxZQUFVLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztnQkFDbkMsSUFBSSxZQUFVLElBQUksQ0FBQyxZQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztvQkFDMUMsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLDJCQUEyQixHQUFHLFlBQVUsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLFlBQVUsSUFBSSxDQUFDLFlBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO29CQUMxQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEdBQUcsWUFBVSxDQUFDLENBQUM7Z0JBQy9ELElBQUksWUFBVSxJQUFJLENBQUMsWUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7b0JBQzFDLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsR0FBRyxZQUFVLENBQUMsQ0FBQztnQkFDL0QsSUFBSSxRQUFRLENBQUMsYUFBVyxDQUFDLEVBQUU7b0JBQ3ZCLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFXLENBQUMsQ0FBQztvQkFDckQsSUFBSSxNQUFJLEdBQUcsQ0FBQyxDQUFDO29CQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFVBQVUsQ0FBQyxlQUFlLENBQUMsYUFBVyxFQUFFLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsYUFBVyxFQUFFLFlBQVUsRUFBRSxZQUFVLEVBQUUsWUFBVSxDQUFDLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFoSyxDQUFnSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTzt3QkFDdk4sSUFBSSxPQUFPLEVBQUU7NEJBQ1QsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDbkIsTUFBSSxFQUFFLENBQUM7eUJBQ1Y7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxNQUFJLEtBQUssQ0FBQyxFQUFFO3dCQUNaLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztxQkFDbEQ7aUJBQ0o7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLEFBdEVELElBc0VDO0FBdEVZLGtCQUFHIn0=