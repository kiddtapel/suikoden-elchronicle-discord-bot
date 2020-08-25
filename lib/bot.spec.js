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
            expect(message.reply).toHaveBeenCalledTimes(5);
            expect(message.reply).toHaveBeenCalledWith("Power Overwhelming (99.79%):\n[A1] 01:28 time left. [A2] 01:28 time left. [A3] 01:27 time left. Score: 8980.8125. ");
            expect(message.reply).toHaveBeenCalledWith("2 Clears (99.83%):\n[A1] 00:10 time left. [A2] 00:10 time left. [A3] Quit Battle. Score: 4492.125. 2 times. Total Score: 8984.25");
            expect(message.reply).toHaveBeenCalledWith("1 Clear and 2 Kills (99.87%):\n[A1] 01:35 time left. [A2] 2 kills. Score: 4494.1875. 2 times. Total Score: 8988.375");
        });
        test('war 1 9000 1:30', function () {
            message.content = 'war 1 9000 1:30';
            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(2);
            expect(message.reply).toHaveBeenCalledWith("Power Overwhelming (99.79%):\n[A1] 01:30 time left. [A2] 01:27 time left. [A3] 01:26 time left. Score: 8981. ");
            expect(message.reply).toHaveBeenCalledWith("1 Clear and 2 Kills (98.80%):\n[A1] 01:30 time left. [A2] 2 kills. Score: 4446. 2 times. Total Score: 8892");
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
            expect(message.reply).toHaveBeenCalledTimes(5);
            expect(message.reply).toHaveBeenCalledWith("Power Overwhelming (71.67%):\n[A1] 00:00 time left. [A2] 00:00 time left. [A3] 00:00 time left. Score: 6450. ");
            expect(message.reply).toHaveBeenCalledWith("2 Clears (95.56%):\n[A1] 00:00 time left. [A2] 00:00 time left. [A3] Quit Battle. Score: 4300. 2 times. Total Score: 8600");
            expect(message.reply).toHaveBeenCalledWith("1 Clear and 2 Kills (79.56%):\n[A1] 00:00 time left. [A2] 2 kills. Score: 3580. 2 times. Total Score: 7160");
        });
        test('war 1 9000  0:30', function () {
            message.content = 'war 1 9000  0:30';
            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(3);
            expect(message.reply).toHaveBeenCalledWith("Power Overwhelming (99.79%):\n[A1] 00:30 time left. [A2] 01:57 time left. [A3] 01:56 time left. Score: 8981. ");
            expect(message.reply).toHaveBeenCalledWith("1 Clear and 2 Kills (85.98%):\n[A1] 00:30 time left. [A2] 2 kills. Score: 3869. 2 times. Total Score: 7738");
            expect(message.reply).toHaveBeenCalledWith("1 Clear (81.30%):\n[A1] 00:30 time left. [A2] Quit Battle. Score: 2439. 3 times. Total Score: 7317");
        });
        test('war 1 9000  1:30    1:00', function () {
            message.content = 'war 1 9000  1:30    1:00';
            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(2);
            expect(message.reply).toHaveBeenCalledWith("Power Overwhelming (99.78%):\n[A1] 01:30 time left. [A2] 01:00 time left. [A3] 01:53 time left. Score: 8980. ");
            expect(message.reply).toHaveBeenCalledWith("1 Clear and 2 Kills (98.80%):\n[A1] 01:30 time left. [A2] 2 kills. Score: 4446. 2 times. Total Score: 8892");
        });
        test('war 2 3000 1:39 1:01 1:34', function () {
            message.content = 'war 2 3150 1:39 1:01 1:34';
            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(2);
            expect(message.reply).toHaveBeenCalledWith("Esdeath Level (89.84%):\n[A1] 01:39 time left. [A2] 01:01 time left. [A3] 01:34 time left. Score: 2830. ");
            expect(message.reply).toHaveBeenCalledWith("1 Clear (94.00%):\n[A1] 01:39 time left. [A2] Quit Battle. Score: 987. 3 times. Total Score: 2961");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3Quc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUEwQjtBQUMxQixpRUFBbUQ7QUFFbkQsUUFBUSxDQUFDLEtBQUssRUFBRTtJQUNaLElBQUksR0FBRyxFQUFFLFVBQVUsQ0FBQztJQUNwQixJQUFJLE9BQU8sR0FBUTtRQUNmLE1BQU0sRUFBRTtZQUNKLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLGFBQWEsRUFBRSxNQUFNO1NBQ3hCO0tBQ0osQ0FBQztJQUVGLFVBQVUsQ0FBQztRQUNQLEdBQUcsR0FBRyxJQUFJLFNBQUcsRUFBRSxDQUFDO1FBQ2hCLFVBQVUsR0FBRyxJQUFJLGtDQUFVLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxLQUFLLEVBQUU7UUFDWixJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2YsT0FBTyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7WUFFL0IsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLG9CQUFvQixDQUFDLG9IQUM4QixDQUFDLENBQUM7WUFDM0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxrSUFDc0QsQ0FBQyxDQUFDO1lBQ25HLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsb0JBQW9CLENBQUMscUhBQzhCLENBQUMsQ0FBQztRQUMvRSxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNw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