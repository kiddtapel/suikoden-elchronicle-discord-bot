"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bot_1 = require("./bot");
var calculator_controller_1 = require("./calculator.controller");
describe('Bot', function () {
    var bot, calculator;
    var message = {
        author: {
            username: 'MonkeyWrench',
            discriminator: '8202'
        }
    };
    beforeEach(function () {
        bot = new bot_1.Bot();
        calculator = new calculator_controller_1.Calculator();
        message.reply = jest.fn();
    });
    describe('war', function () {
        test('war 1 9000', function () {
            message.content = 'war 1 9000';
            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(3);
            expect(message.reply).toHaveBeenCalledWith("Full Clear (99.76%):\n[A1] 01:01 time left. [A2] 01:02 time left. [A3] 01:02 time left. Score: 8978.25. ");
            expect(message.reply).toHaveBeenCalledWith("1 Clear and 2 Kills (99.85%):\n[A1] 00:56 time left. [A2] 2 kills. Score: 4493.25. 2 times. Total Score: 8986.5");
            expect(message.reply).toHaveBeenCalledWith("1 Clear (99.52%):\n[A1] 01:01 time left. [A2] Quit Battle. Score: 2985.75. 3 times. Total Score: 8957.25");
        });
        test('war 1 9000 1:30', function () {
            message.content = 'war 1 9000 1:30';
            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(1);
            expect(message.reply).toHaveBeenCalledWith("Full Clear (99.76%):\n[A1] 01:30 time left. [A2] 00:47 time left. [A3] 00:48 time left. Score: 8978. ");
        });
        test('war 1 9000 1:59 1:59    1:59', function () {
            message.content = 'war 1 9000 1:59 1:59    1:59';
            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(1);
            expect(message.reply).toHaveBeenCalledWith("The target score is not possible.");
        });
        test('war 1 9000 0:00 0:00 0:00', function () {
            message.content = 'war 1 9000 0:00 0:00 0:00';
            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(3);
            expect(message.reply).toHaveBeenCalledWith("Full Clear (78.17%):\n[A1] 00:00 time left. [A2] 00:00 time left. [A3] 00:00 time left. Score: 7035. ");
            expect(message.reply).toHaveBeenCalledWith("1 Clear and 2 Kills (86.78%):\n[A1] 00:00 time left. [A2] 2 kills. Score: 3905. 2 times. Total Score: 7810");
            expect(message.reply).toHaveBeenCalledWith("1 Clear (78.17%):\n[A1] 00:00 time left. [A2] Quit Battle. Score: 2345. 3 times. Total Score: 7035");
        });
        test('war 1 9000  0:30', function () {
            message.content = 'war 1 9000  0:30';
            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(3);
            expect(message.reply).toHaveBeenCalledWith("Full Clear (99.76%):\n[A1] 00:30 time left. [A2] 01:17 time left. [A3] 01:18 time left. Score: 8978. ");
            expect(message.reply).toHaveBeenCalledWith("1 Clear and 2 Kills (93.78%):\n[A1] 00:30 time left. [A2] 2 kills. Score: 4220. 2 times. Total Score: 8440");
            expect(message.reply).toHaveBeenCalledWith("1 Clear (88.67%):\n[A1] 00:30 time left. [A2] Quit Battle. Score: 2660. 3 times. Total Score: 7980");
        });
        test('war 1 9000  1:30    1:00', function () {
            message.content = 'war 1 9000  1:30    1:00';
            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(1);
            expect(message.reply).toHaveBeenCalledWith("Full Clear (99.76%):\n[A1] 01:30 time left. [A2] 01:00 time left. [A3] 00:35 time left. Score: 8978. ");
        });
        test('war 1 9000 2:59', function () {
            message.content = 'war 1 9000 2:59 2:59 2:59';
            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledWith('Invalid Time for area 1: 2:59');
        });
        test('war 1 9000 1:59 2:59', function () {
            message.content = 'war 1 9000 1:59 2:59 2:59';
            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledWith('Invalid Time for area 2: 2:59');
        });
        test('war 1 9000 1:59 1:59 2:59', function () {
            message.content = 'war 1 9000 1:59 1:59 2:59';
            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledWith('Invalid Time for area 3: 2:59');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3Quc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUEwQjtBQUMxQixpRUFBbUQ7QUFFbkQsUUFBUSxDQUFDLEtBQUssRUFBRTtJQUNaLElBQUksR0FBRyxFQUFFLFVBQVUsQ0FBQztJQUNwQixJQUFJLE9BQU8sR0FBUTtRQUNmLE1BQU0sRUFBRTtZQUNKLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLGFBQWEsRUFBRSxNQUFNO1NBQ3hCO0tBQ0osQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLEdBQUcsR0FBRyxJQUFJLFNBQUcsRUFBRSxDQUFDO1FBQ2hCLFVBQVUsR0FBRyxJQUFJLGtDQUFVLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxLQUFLLEVBQUU7UUFDWixJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2YsT0FBTyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7WUFFL0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixDQUFDLDBHQUM0QixDQUFDLENBQUM7WUFDekUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxpSEFDMEIsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsb0JBQW9CLENBQUMsMEdBQytCLENBQUMsQ0FBQztRQUNoRixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNw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