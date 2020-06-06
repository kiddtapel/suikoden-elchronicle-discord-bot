import {Bot} from "./bot";
import {Calculator} from "./calculator.controller";

describe('Bot', () => {
    let bot, calculator;
    let message: any = {
        author: {
            username: 'MonkeyWrench',
            discriminator: '8202'
        }
    };

    beforeEach(() => {
        bot = new Bot();
        calculator = new Calculator();
        message.reply = jest.fn();
    });

    describe('war', () => {
        test('war 1 9000', () => {
            message.content = 'war 1 9000';

            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(3);
            expect(message.reply).toHaveBeenCalledWith(`Full Clear (99.76%):
[A1] 01:01 time left. [A2] 01:02 time left. [A3] 01:02 time left. Score: 8978.25. `);
            expect(message.reply).toHaveBeenCalledWith(`1 Clear and 2 Kills (99.85%):
[A1] 00:56 time left. [A2] 2 kills. Score: 4493.25. 2 times. Total Score: 8986.5`);
            expect(message.reply).toHaveBeenCalledWith(`1 Clear (99.52%):
[A1] 01:01 time left. [A2] Quit Battle. Score: 2985.75. 3 times. Total Score: 8957.25`);
        });

        test('war 1 9000 1:30', () => {
            message.content = 'war 1 9000 1:30';

            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(1);
            expect(message.reply).toHaveBeenCalledWith(`Full Clear (99.76%):
[A1] 01:30 time left. [A2] 00:47 time left. [A3] 00:48 time left. Score: 8978. `);
        });

        test('war 1 9000 1:59 1:59    1:59', () => {
            message.content = 'war 1 9000 1:59 1:59    1:59';

            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(1);
            expect(message.reply).toHaveBeenCalledWith(`The target score is not possible.`);
        });

        test('war 1 9000 0:00 0:00 0:00', () => {
            message.content = 'war 1 9000 0:00 0:00 0:00';

            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(3);
            expect(message.reply).toHaveBeenCalledWith(`Full Clear (78.17%):
[A1] 00:00 time left. [A2] 00:00 time left. [A3] 00:00 time left. Score: 7035. `);
            expect(message.reply).toHaveBeenCalledWith(`1 Clear and 2 Kills (86.78%):
[A1] 00:00 time left. [A2] 2 kills. Score: 3905. 2 times. Total Score: 7810`);
            expect(message.reply).toHaveBeenCalledWith(`1 Clear (78.17%):
[A1] 00:00 time left. [A2] Quit Battle. Score: 2345. 3 times. Total Score: 7035`);
        });

        test('war 1 9000  0:30', () => {
            message.content = 'war 1 9000  0:30';

            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(3);
            expect(message.reply).toHaveBeenCalledWith(`Full Clear (99.76%):
[A1] 00:30 time left. [A2] 01:17 time left. [A3] 01:18 time left. Score: 8978. `);
            expect(message.reply).toHaveBeenCalledWith(`1 Clear and 2 Kills (93.78%):
[A1] 00:30 time left. [A2] 2 kills. Score: 4220. 2 times. Total Score: 8440`);
            expect(message.reply).toHaveBeenCalledWith(`1 Clear (88.67%):
[A1] 00:30 time left. [A2] Quit Battle. Score: 2660. 3 times. Total Score: 7980`);
        });

        test('war 1 9000  1:30    1:00', () => {
            message.content = 'war 1 9000  1:30    1:00';

            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(1);
            expect(message.reply).toHaveBeenCalledWith(`Full Clear (99.76%):
[A1] 01:30 time left. [A2] 01:00 time left. [A3] 00:35 time left. Score: 8978. `);
        });

        test('war 1 9000 2:59', () => {

            message.content = 'war 1 9000 2:59 2:59 2:59';

            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledWith('Invalid Time for area 1: 2:59');

        });

        test('war 1 9000 1:59 2:59', () => {

            message.content = 'war 1 9000 1:59 2:59 2:59';

            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledWith('Invalid Time for area 2: 2:59');

        });

        test('war 1 9000 1:59 1:59 2:59', () => {

            message.content = 'war 1 9000 1:59 1:59 2:59';

            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledWith('Invalid Time for area 3: 2:59');

        });
    });
});
