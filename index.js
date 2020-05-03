"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Discord = require('discord.js');
var client = new Discord.Client();
var tesseract = require("node-tesseract-ocr");
var calculator_controller_1 = require("./lib/calculator.controller");
var config = {
    lang: "eng",
    oem: 1,
    psm: 3,
};
var whitelisted = ['MonkeyWrench#8202', 'Evil#5506', 'Frank/AstroPH#5231', 'Chuckiel/Licht#5402'];
client.on('ready', function () {
    console.log("Logged in as " + client.user.tag + "!");
});
client.on('message', function (msg) { return __awaiter(_this, void 0, void 0, function () {
    var calculator_1, targetScore_1, cases;
    return __generator(this, function (_a) {
        if (msg.author.username + "#" + msg.author.discriminator === 'Suikoden-Guild-Bot#5382')
            return [2 /*return*/];
        if (whitelisted.indexOf(msg.author.username + "#" + msg.author.discriminator) === -1) {
            console.error(msg.author.username + "#" + msg.author.discriminator + " is not whitelisted");
            msg.reply('Sorry! You are not authorized.');
            return [2 /*return*/];
        }
        if (msg.content === 'ping') {
            msg.reply('Pong!');
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
            calculator_1 = new calculator_controller_1.Calculator();
            calculator_1.tier = parseInt(msg.content.split(' ')[1]);
            if ([1, 2, 3].indexOf(calculator_1.tier) > -1) {
                calculator_1.changeTier();
                targetScore_1 = parseInt(msg.content.split(' ')[2]);
                if (isFinite(targetScore_1)) {
                    cases = calculator_1.getAdviceByScore(targetScore_1);
                    cases.filter(function (c) { return c.show; }).map(function (strategy) { return calculator_1.getInstructions(calculator_1.getInstructionsFromStrategy(strategy, targetScore_1), strategy.repetitions); }).forEach(function (message) { return msg.reply(message); });
                }
                else {
                    msg.reply('I don\'t understand');
                }
            }
            else {
                msg.reply('I don\'t understand');
            }
        }
        return [2 /*return*/];
    });
}); });
var https = require('https');
var fs = require('fs');
var download = function (url, dest) {
    return new Promise(function (resolve, reject) {
        var file = fs.createWriteStream(dest);
        var request = https.get(url, function (response) {
            response.pipe(file);
            file.on('finish', function () {
                file.close(); // close() is async, call cb after close completes.
                resolve();
            });
        }).on('error', function (err) {
            fs.unlink(dest); // Delete the file async. (But we don't check the result)
            reject(err);
        });
    });
};
client.login(process.env.BOT_TOKEN);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkF1RkE7O0FBckZBLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0QyxJQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVwQyxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUVoRCxxRUFBdUQ7QUFFdkQsSUFBTSxNQUFNLEdBQUc7SUFDWCxJQUFJLEVBQUUsS0FBSztJQUNYLEdBQUcsRUFBRSxDQUFDO0lBQ04sR0FBRyxFQUFFLENBQUM7Q0FDVCxDQUFDO0FBRUYsSUFBSSxXQUFXLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQUVsRyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFHLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQU8sR0FBWTs7O1FBQ3BDLElBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLFNBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFlLEtBQUsseUJBQXlCO1lBQUUsc0JBQU87UUFDL0YsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxTQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDbEYsT0FBTyxDQUFDLEtBQUssQ0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsU0FBSSxH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