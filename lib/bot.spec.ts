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
            expect(message.reply).toHaveBeenCalledTimes(5);
            expect(message.reply).toHaveBeenCalledWith(`Power Overwhelming (99.79%):
[A1] 01:28 time left. [A2] 01:28 time left. [A3] 01:27 time left. Score: 8980.8125. `);
            expect(message.reply).toHaveBeenCalledWith(`2 Clears (99.83%):
[A1] 00:10 time left. [A2] 00:10 time left. [A3] Quit Battle. Score: 4492.125. 2 times. Total Score: 8984.25`);
            expect(message.reply).toHaveBeenCalledWith(`1 Clear and 2 Kills (99.87%):
[A1] 01:35 time left. [A2] 2 kills. Score: 4494.1875. 2 times. Total Score: 8988.375`);
        });

        test('war 1 9000 1:30', () => {
            message.content = 'war 1 9000 1:30';

            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(2);
            expect(message.reply).toHaveBeenCalledWith(`Power Overwhelming (99.79%):
[A1] 01:30 time left. [A2] 01:27 time left. [A3] 01:26 time left. Score: 8981. `);
            expect(message.reply).toHaveBeenCalledWith(`1 Clear and 2 Kills (98.80%):
[A1] 01:30 time left. [A2] 2 kills. Score: 4446. 2 times. Total Score: 8892`);
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
            expect(message.reply).toHaveBeenCalledTimes(5);
            expect(message.reply).toHaveBeenCalledWith(`Power Overwhelming (71.67%):
[A1] 00:00 time left. [A2] 00:00 time left. [A3] 00:00 time left. Score: 6450. `);
            expect(message.reply).toHaveBeenCalledWith(`2 Clears (95.56%):
[A1] 00:00 time left. [A2] 00:00 time left. [A3] Quit Battle. Score: 4300. 2 times. Total Score: 8600`);
            expect(message.reply).toHaveBeenCalledWith(`1 Clear and 2 Kills (79.56%):
[A1] 00:00 time left. [A2] 2 kills. Score: 3580. 2 times. Total Score: 7160`);
        });

        test('war 1 9000  0:30', () => {
            message.content = 'war 1 9000  0:30';

            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(3);
            expect(message.reply).toHaveBeenCalledWith(`Power Overwhelming (99.79%):
[A1] 00:30 time left. [A2] 01:57 time left. [A3] 01:56 time left. Score: 8981. `);
            expect(message.reply).toHaveBeenCalledWith(`1 Clear and 2 Kills (85.98%):
[A1] 00:30 time left. [A2] 2 kills. Score: 3869. 2 times. Total Score: 7738`);
            expect(message.reply).toHaveBeenCalledWith(`1 Clear (81.30%):
[A1] 00:30 time left. [A2] Quit Battle. Score: 2439. 3 times. Total Score: 7317`);
        });

        test('war 1 9000  1:30    1:00', () => {
            message.content = 'war 1 9000  1:30    1:00';

            bot.process(message, calculator);
            expect(message.reply).toHaveBeenCalledTimes(2);
            expect(message.reply).toHaveBeenCalledWith(`Power Overwhelming (99.78%):
[A1] 01:30 time left. [A2] 01:00 time left. [A3] 01:53 time left. Score: 8980. `);
            expect(message.reply).toHaveBeenCalledWith(`1 Clear and 2 Kills (98.80%):
[A1] 01:30 time left. [A2] 2 kills. Score: 4446. 2 times. Total Score: 8892`);
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
