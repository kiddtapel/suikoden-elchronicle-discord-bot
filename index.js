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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Discord = require('discord.js');
var client = new Discord.Client();
var tesseract = require("node-tesseract-ocr");
var Bluebird = __importStar(require("bluebird"));
var calculator_controller_1 = require("./lib/calculator.controller");
var config = {
    lang: "eng",
    oem: 1,
    psm: 3,
};
var whitelisted = ['MonkeyWrench#8202', 'Evil#5506'];
client.on('ready', function () {
    console.log("Logged in as " + client.user.tag + "!");
});
client.on('message', function (msg) { return __awaiter(_this, void 0, void 0, function () {
    var calculator_1, targetScore_1, cases;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (msg.author.username + "#" + msg.author.discriminator === 'Suikoden-Guild-Bot#5382')
                    return [2 /*return*/];
                console.log("message from " + msg.author.username + "#" + msg.author.discriminator + ": " + msg.content);
                if (whitelisted.indexOf(msg.author.username + "#" + msg.author.discriminator) === -1) {
                    console.error(msg.author.username + "#" + msg.author.discriminator + " is not whitelisted");
                    msg.reply('Sorry! You are not authorized.');
                    return [2 /*return*/];
                }
                if (msg.content === 'ping') {
                    msg.reply('Pong!');
                }
                if (!msg.attachments) return [3 /*break*/, 2];
                return [4 /*yield*/, Bluebird.each(msg.attachments.array(), function (value) { return __awaiter(_this, void 0, void 0, function () {
                        var text, error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(value.width && value.height)) return [3 /*break*/, 6];
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 4, 5, 6]);
                                    return [4 /*yield*/, download(value.url, value.filename)];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, tesseract.recognize(value.filename, config)];
                                case 3:
                                    text = _a.sent();
                                    console.log(value.filename);
                                    console.log(text);
                                    return [3 /*break*/, 6];
                                case 4:
                                    error_1 = _a.sent();
                                    console.error(error_1);
                                    return [3 /*break*/, 6];
                                case 5:
                                    fs.unlinkSync(value.filename);
                                    return [7 /*endfinally*/];
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                if (msg.content && msg.content.toLowerCase().split(' ')[0] === 'war') {
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
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBdUZBOztBQXJGQSxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEMsSUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFcEMsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDaEQsaURBQXFDO0FBQ3JDLHFFQUF1RDtBQUV2RCxJQUFNLE1BQU0sR0FBRztJQUNYLElBQUksRUFBRSxLQUFLO0lBQ1gsR0FBRyxFQUFFLENBQUM7SUFDTixHQUFHLEVBQUUsQ0FBQztDQUNULENBQUM7QUFFRixJQUFJLFdBQVcsR0FBRyxDQUFDLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBRXJELE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBZ0IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQUcsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBTyxHQUFZOzs7Ozs7Z0JBQ3BDLElBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLFNBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFlLEtBQUsseUJBQXlCO29CQUFFLHNCQUFPO2dCQUMvRixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFnQixHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsU0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsVUFBSyxHQUFHLENBQUMsT0FBUyxDQUFDLENBQUM7Z0JBQy9GLElBQUksV0FBVyxDQUFDLE9BQU8sQ0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsU0FBSSxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUNsRixPQUFPLENBQUMsS0FBSyxDQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxTQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSx3QkFBcUIsQ0FBQyxDQUFDO29CQUN2RixHQUFHLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7b0JBQzVDLHNCQUFPO2lCQUNWO2dCQUNELElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7b0JBQ3hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3RCO3FCQUNHLEdBQUcsQ0FBQyxXQUFXLEVBQWYsd0JBQWU7Z0JBQ2YscUJBQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQU8sS0FBd0I7Ozs7O3lDQUVwRSxDQUFBLEtBQUssQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQSxFQUEzQix3QkFBMkI7Ozs7b0NBRXZCLHFCQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBQTs7b0NBQXpDLFNBQXlDLENBQUM7b0NBQy9CLHFCQUFNLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBQTs7b0NBQXhELElBQUksR0FBRyxTQUFpRDtvQ0FDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7b0NBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7b0NBRWxCLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBSyxDQUFDLENBQUM7OztvQ0FFckIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7O3lCQUd6QyxDQUFDLEVBQUE7O2dCQWRGLFNBY0UsQ0FBQzs7O2dCQUVQLElBQUksR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7b0JBQzlELGVBQWEsSUFBSSxrQ0FBVSxFQUFFLENBQUM7b0JBQ2xDLFlBQVUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RELElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7d0JBQ3ZDLFlBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDcEIsZ0JBQWMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RELElBQUksUUFBUSxDQUFDLGFBQVcsQ0FBQyxFQUFFOzRCQUNuQixLQUFLLEdBQUcsWUFBVSxDQUFDLGdCQUFnQixDQUFDLGFBQVcsQ0FBQyxDQUFDOzRCQUNyRCxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxZQUFVLENBQUMsZUFBZSxDQUFDLFlBQVUsQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsYUFBVyxDQUFDLEVBQUUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUEvRyxDQUErRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO3lCQUNyTTs2QkFBTTs0QkFDSCxHQUFHLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7eUJBQ3BDO3FCQUNKO3lCQUFNO3dCQUNILEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztxQkFDcEM7aUJBQ0o7Ozs7S0FDSixDQUFDLENBQUM7QUFFSCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXZCLElBQUksUUFBUSxHQUFHLFVBQVMsR0FBRyxFQUFFLElBQUk7SUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQy9CLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFTLFFBQVE7WUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDZCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBRSxtREFBbUQ7Z0JBQ2xFLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVMsR0FBRztZQUN2QixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMseURBQXlEO1lBQzFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDIn0=