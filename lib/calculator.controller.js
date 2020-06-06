"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
function Calculator() {
    var calculator;
    // @ts-ignore
    calculator = this;
    calculator.targetScore = "";
    calculator.areas = [{
            clearTime: 0,
            kills: 3,
            score: 3600
        }, {
            clearTime: 0,
            kills: 3,
            score: 3600
        }, {
            clearTime: 0,
            kills: 3,
            score: 3600
        }];
    var esdeathTime = 95;
    var minTimeLeft = 0;
    var maxTimeLeft = 120;
    var powerOverwhelming = 85;
    var fastTime = 70;
    var averageTime = 50;
    var foreverTime = 15;
    var cases = [{
            title: "Esdeath Level",
            type: 'Class S Monster',
            min: esdeathTime,
            max: maxTimeLeft,
            clearedAreas: 3,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "Power Overwhelming",
            type: 'Class A Monster',
            min: powerOverwhelming,
            max: esdeathTime,
            clearedAreas: 3,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "Full Clear",
            type: "Fast",
            min: fastTime,
            max: powerOverwhelming,
            clearedAreas: 3,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "Full Clear",
            type: "Average",
            min: averageTime,
            max: fastTime,
            clearedAreas: 3,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "Full Clear",
            type: "Dragged",
            min: foreverTime,
            max: averageTime,
            clearedAreas: 3,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "Full Clear",
            type: "Forever",
            min: minTimeLeft,
            max: foreverTime,
            clearedAreas: 3,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "2 Clears and 2 Kills",
            type: "Fast",
            min: powerOverwhelming,
            max: maxTimeLeft,
            clearedAreas: 2,
            killsInUncleared: 2,
            repetitions: 1,
            show: false
        }, {
            title: "2 Clears and 2 Kills",
            type: "Average",
            min: averageTime,
            max: powerOverwhelming,
            clearedAreas: 2,
            killsInUncleared: 2,
            repetitions: 1,
            show: false
        }, {
            title: "2 Clears and 2 Kills",
            type: "Dragged",
            min: foreverTime,
            max: averageTime,
            clearedAreas: 2,
            killsInUncleared: 2,
            repetitions: 1,
            show: false
        }, {
            title: "2 Clears and 2 Kills",
            type: "Forever",
            min: minTimeLeft,
            max: foreverTime,
            clearedAreas: 2,
            killsInUncleared: 2,
            repetitions: 1,
            show: false
        }, {
            title: "2 Clears and 1 Kill",
            type: "Fast",
            min: powerOverwhelming,
            max: maxTimeLeft,
            clearedAreas: 2,
            killsInUncleared: 1,
            repetitions: 1,
            show: false
        }, {
            title: "2 Clears and 1 Kills",
            type: "Average",
            min: averageTime,
            max: powerOverwhelming,
            clearedAreas: 2,
            killsInUncleared: 1,
            repetitions: 1,
            show: false
        }, {
            title: "2 Clears and 1 Kill",
            type: "Dragged",
            min: foreverTime,
            max: averageTime,
            clearedAreas: 2,
            killsInUncleared: 1,
            repetitions: 1,
            show: false
        }, {
            title: "2 Clears and 1 Kill",
            type: "Forever",
            min: minTimeLeft,
            max: foreverTime,
            clearedAreas: 2,
            killsInUncleared: 1,
            repetitions: 1,
            show: false
        }, {
            title: "2 Clears",
            type: "Fast",
            min: powerOverwhelming,
            max: maxTimeLeft,
            clearedAreas: 2,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "2 Clears",
            type: "Average",
            min: averageTime,
            max: powerOverwhelming,
            clearedAreas: 2,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "2 Clears",
            type: "Dragged",
            min: foreverTime,
            max: averageTime,
            clearedAreas: 2,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "2 Clears",
            type: "Forever",
            min: minTimeLeft,
            max: foreverTime,
            clearedAreas: 2,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "1 Clear and 2 Kills",
            type: "Fast",
            min: powerOverwhelming,
            max: maxTimeLeft,
            clearedAreas: 1,
            killsInUncleared: 2,
            repetitions: 1,
            show: false
        }, {
            title: "1 Clear and 2 Kills",
            type: "Average",
            min: averageTime,
            max: powerOverwhelming,
            clearedAreas: 1,
            killsInUncleared: 2,
            repetitions: 1,
            show: false
        }, {
            title: "1 Clear and 2 Kills",
            type: "Dragged",
            min: foreverTime,
            max: averageTime,
            clearedAreas: 1,
            killsInUncleared: 2,
            repetitions: 1,
            show: false
        }, {
            title: "1 Clear and 2 Kills",
            type: "Forever",
            min: minTimeLeft,
            max: foreverTime,
            clearedAreas: 1,
            killsInUncleared: 2,
            repetitions: 1,
            show: false
        }, {
            title: "1 Clear and 1 Kill",
            type: "Fast",
            min: powerOverwhelming,
            max: maxTimeLeft,
            clearedAreas: 1,
            killsInUncleared: 1,
            repetitions: 1,
            show: false
        }, {
            title: "1 Clear and 1 Kills",
            type: "Average",
            min: averageTime,
            max: powerOverwhelming,
            clearedAreas: 1,
            killsInUncleared: 1,
            repetitions: 1,
            show: false
        }, {
            title: "1 Clear and 1 Kill",
            type: "Dragged",
            min: foreverTime,
            max: averageTime,
            clearedAreas: 1,
            killsInUncleared: 1,
            repetitions: 1,
            show: false
        }, {
            title: "1 Clear and 1 Kill",
            type: "Forever",
            min: minTimeLeft,
            max: foreverTime,
            clearedAreas: 1,
            killsInUncleared: 1,
            repetitions: 1,
            show: false
        }, {
            title: "1 Clear",
            type: "Fast",
            min: powerOverwhelming,
            max: maxTimeLeft,
            clearedAreas: 1,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "1 Clear",
            type: "Average",
            min: averageTime,
            max: powerOverwhelming,
            clearedAreas: 1,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "1 Clear",
            type: "Dragged",
            min: foreverTime,
            max: averageTime,
            clearedAreas: 1,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "1 Clear",
            type: "Forever",
            min: minTimeLeft,
            max: foreverTime,
            clearedAreas: 1,
            killsInUncleared: 0,
            repetitions: 1,
            show: false
        }, {
            title: "2 Kills",
            min: 0,
            max: 0,
            clearedAreas: 0,
            killsInUncleared: 2,
            repetitions: 1,
            show: false
        }, {
            title: "1 Kill",
            min: 0,
            max: 0,
            clearedAreas: 0,
            killsInUncleared: 1,
            repetitions: 1,
            show: false
        }];
    calculator.getCalculatorHref = function (instructions) {
        var string = "calculator.html?tier=" + calculator.tier + "&";
        for (var i = 0; i < 3; i++) {
            if (instructions[i]) {
                string += "clearTime." + i + "=" + (instructions[i].clearTime || "0") + "&";
                string += "kills." + i + "=" + (instructions[i].kills || "0") + "&";
                string += "score." + i + "=" + (instructions[i].score || "0") + "&";
            }
        }
        return string;
    };
    calculator.getAdviceByScoreMax = function () {
        return maxAreaScore * 9;
    };
    calculator.getKillScore = function () {
        return killScore;
    };
    calculator.getAdviceByScore = function (targetScore) {
        calculator.recommendations = [];
        calculator.foundAdvice = false;
        cases.forEach(function (c) {
            var minScore = calculator.getBoundary(c.clearedAreas, c.min, c.killsInUncleared);
            var maxScore = calculator.getBoundary(c.clearedAreas, c.max, c.killsInUncleared);
            if (c.clearedAreas === 0) {
                minScore = (c.killsInUncleared) * killScore;
                maxScore = Math.min((c.killsInUncleared + 1) * killScore - 1, killScore * 3);
            }
            var t = (targetScore - scorePerSecond) / c.repetitions;
            // console.log(c.title, c.repetitions, "repetitions", t, minScore, maxScore, t > minScore && t <= maxScore);
            c.show = t > minScore && t <= maxScore;
            if (c.show)
                calculator.foundAdvice = true;
        });
        return cases;
    };
    calculator.getBoundary = function (numberOfAreasCleared, timeLeft, killsInAreaUncleared) {
        return (killScore * 3 + (scorePerSecond * (timeLeft + 0.5))) * numberOfAreasCleared + ((killsInAreaUncleared || 0) * killScore);
    };
    calculator.getInstructionsFromStrategy = function (strategy, targetScore, a1TimeLeft, a2TimeLeft, a3TimeLeft) {
        var score = Math.floor((targetScore - scorePerSecond) / strategy.repetitions);
        var targetScorePerAttempt = score;
        if (strategy.killsInUncleared) {
            score -= strategy.killsInUncleared * killScore;
        }
        if (strategy.clearedAreas) {
            score /= strategy.clearedAreas;
        }
        var areas = [];
        areas.title = strategy.title;
        var area = calculator.computeByScore(score);
        // console.log(strategy.title, ((score * strategy.clearedAreas - area.score * strategy.clearedAreas) / scorePerSecond));
        var totalOffsetSeconds = Math.floor((score * strategy.clearedAreas - area.score * strategy.clearedAreas) / scorePerSecond);
        if (Math.round(area.score * strategy.clearedAreas) === Math.round(score * strategy.clearedAreas))
            totalOffsetSeconds = -1;
        for (var i = 0; i < strategy.clearedAreas; i++) {
            var areaOffset = {
                time: 0,
                score: 0
            };
            if (totalOffsetSeconds && area.clearTime > 0) {
                var multiplier = totalOffsetSeconds / Math.abs(totalOffsetSeconds);
                areaOffset.time = multiplier;
                areaOffset.score = scorePerSecond * multiplier;
                totalOffsetSeconds -= multiplier;
                // console.log('offset', i);
            }
            areas.push({
                clearTime: area.clearTime - areaOffset.time,
                kills: area.kills,
                score: area.score + areaOffset.score
            });
        }
        if (strategy.killsInUncleared) {
            areas.push({
                clearTime: 0,
                kills: strategy.killsInUncleared,
                score: strategy.killsInUncleared * killScore
            });
        }
        var length = areas.length;
        for (var j = 0; j < 3 - length; j++) {
            areas.push({
                clearTime: 0,
                kills: 0,
                score: 0
            });
        }
        var a1NewClearTime = a1TimeLeft && calculator.getClearTime(a1TimeLeft);
        var a2NewClearTime = a2TimeLeft && calculator.getClearTime(a2TimeLeft);
        var a3NewClearTime = a3TimeLeft && calculator.getClearTime(a3TimeLeft);
        if (a1TimeLeft && areas[0])
            areas = calculator.adjustRelatively(areas, 0, a1NewClearTime);
        if (a2TimeLeft && areas[1])
            areas = calculator.adjustRelatively(areas, 1, a2NewClearTime);
        if (a3TimeLeft && areas[2])
            areas = calculator.adjustRelatively(areas, 2, a3NewClearTime);
        var modifiedScore = (areas.reduce(function (total, e) {
            return total + e.score;
        }, 0) * strategy.repetitions);
        if (modifiedScore > targetScore - scorePerSecond)
            return;
        return areas;
    };
    calculator.getClearTime = function (timeLeft) {
        var parts = timeLeft.split(':');
        var minutes = parseInt(parts[0]);
        var seconds = parseInt(parts[1]);
        return maxTimeLeft - (minutes * 60 + seconds);
    };
    calculator.getStrategyEfficiencyScoreTooltip = function (strategy, targetScore) {
        var areas = calculator.getInstructionsFromStrategy(strategy, targetScore);
        var total = areas.reduce(function (total, e) {
            return total + e.score;
        }, 0);
        return (total * strategy.repetitions) + " out of " + targetScore;
    };
    calculator.getStrategyEfficiencyScore = function (strategy, targetScore) {
        var areas = calculator.getInstructionsFromStrategy(strategy, targetScore);
        var total = areas.reduce(function (total, e) {
            return total + e.score;
        }, 0);
        return Math.round((total * strategy.repetitions) / targetScore * 100);
    };
    calculator.tier = "1";
    var maxAreaScore = 3600, scorePerSecond = 10.5, killScore = 780;
    calculator.recompute = function (index, areas) {
        // console.log('recompute', 'index =', index, 'field =', field);
        var kills = areas[index].kills, clearTime = areas[index].clearTime;
        var score = 0;
        if (kills === 0 && index === 0) {
            score = 50;
        }
        else if (kills === 0)
            score = 0;
        else if (kills === 1) {
            score = killScore;
        }
        else if (kills === 2) {
            score = killScore * 2;
        }
        else
            score = Math.round(maxAreaScore - (Math.max(0, clearTime - 0.5) * scorePerSecond));
        areas[index].score = score;
        return areas;
    };
    calculator.adjustRelatively = function (areas, index, newValue) {
        var oldValue = parseInt(areas[index].clearTime);
        var change = newValue - areas[index].clearTime;
        areas[index].clearTime = newValue;
        var relativeChanges = [];
        if (areas[index].kills !== 3)
            return areas;
        for (var i = index; i < 3; i++) {
            if (index !== i) {
                if (areas[i].kills === 3) {
                    relativeChanges.push(i);
                }
                else
                    break;
            }
        }
        relativeChanges.forEach(function (c, i) {
            var halfChange = relativeChanges.length > 1 && i === 0 ? Math[oldValue % 2 === 0 ? 'ceil' : 'floor'](change / 2) : change;
            if (areas[c].clearTime - halfChange >= 0 && areas[c].clearTime - halfChange <= 120) {
                // console.log('setting', c, -halfChange);
                areas[c].clearTime -= halfChange;
                change -= halfChange;
            }
            else {
                // console.log('skipped', c, 'calculator.areas[c].clearTime - halfChange =', calculator.areas[c].clearTime - halfChange);
            }
        });
        areas = calculator.recompute(0, areas);
        areas = calculator.recompute(1, areas);
        areas = calculator.recompute(2, areas);
        return areas;
    };
    calculator.remainingTime = function (clearTime) {
        return moment_1.default().startOf('day').add(2, 'minutes').subtract(clearTime, 'seconds').format('mm:ss');
    };
    calculator.changeTier = function () {
        // console.log('changeTier', calculator.tier);
        if (calculator.tier == "1") {
            scorePerSecond = 10.5;
            killScore = 780;
            maxAreaScore = 3600;
        }
        else if (calculator.tier == "2") {
            scorePerSecond = 2.625;
            killScore = 195;
            maxAreaScore = 900;
        }
        else if (calculator.tier == "3") {
            scorePerSecond = 0.875;
            killScore = 65;
            maxAreaScore = 300;
        }
    };
    calculator.recomputeByScore = function (index, onBlur) {
        // console.log('recomputeByScore', 'index =', index, 'onBlur =', onBlur);
        var score = calculator.areas[index].score;
        if (score < killScore && onBlur) {
            calculator.areas[index].clearTime = 0;
            calculator.areas[index].kills = 0;
            calculator.areas[index].score = index > 0 ? 0 : 50;
        }
        else if (score < killScore * 2 && onBlur) {
            calculator.areas[index].clearTime = 0;
            calculator.areas[index].kills = 1;
            calculator.areas[index].score = killScore;
        }
        else if (score < killScore * 3 && onBlur) {
            calculator.areas[index].clearTime = 0;
            calculator.areas[index].kills = 2;
            calculator.areas[index].score = killScore * 2;
        }
        else if (score >= killScore * 3 && score <= maxAreaScore) {
            calculator.areas[index].clearTime = Math.ceil((maxAreaScore - score) / scorePerSecond);
            calculator.areas[index].kills = 3;
            calculator.areas[index].score = score;
        }
    };
    calculator.computeByScore = function (score) {
        var area = {
            clearTime: 0,
            kills: 3,
            score: 3600
        };
        if (score < killScore) {
            area.clearTime = 0;
            area.kills = 0;
            area.score = 0;
        }
        else if (score < killScore * 2) {
            area.clearTime = 0;
            area.kills = 1;
            area.score = killScore;
        }
        else if (score < killScore * 3) {
            area.clearTime = 0;
            area.kills = 2;
            area.score = killScore * 2;
        }
        else if (score >= killScore * 3 && score <= maxAreaScore) {
            area.clearTime = Math.round((maxAreaScore - score) / scorePerSecond) + 1;
            area.kills = 3;
            area.score = (Math.min(120, 120 - area.clearTime + 0.5) * scorePerSecond) + area.kills * killScore;
        }
        return area;
    };
    calculator.total = function () {
        var total = 0, end = false;
        calculator.areas.forEach(function (a) {
            if (!end)
                total += parseInt(a.score);
            if (a.kills < 3)
                end = true;
        });
        return total;
    };
    calculator.getInstructionsToString = function (areas) {
        var str = "";
        var ended = false;
        areas.forEach(function (area, i) {
            if (ended)
                return;
            if (area.kills === 3) {
                str += "[A" + (i + 1) + "] " + calculator.remainingTime(area.clearTime) + " time left. ";
            }
            else if (area.kills > 0) {
                ended = true;
                str += "[A" + (i + 1) + "] " + area.kills + " kill" + (area.kills === 1 ? '' : 's') + ". ";
            }
            else {
                ended = true;
                str += "[A" + (i + 1) + "] Quit Battle. ";
            }
        });
        str += "Score: " + areas.reduce(function (total, e) {
            return total + e.score;
        }, 0) + ". ";
        return str;
    };
    calculator.getInstructions = function (targetScore, strategy, repetitions) {
        var areas = calculator.areas;
        if (!strategy)
            return;
        if (strategy) {
            areas = strategy;
        }
        var totalScore = areas.reduce(function (total, e) {
            return total + e.score;
        }, 0) * repetitions;
        var str = strategy.title + " (" + (totalScore / targetScore * 100).toFixed(2) + "%):\n" + calculator.getInstructionsToString(areas);
        // console.log(repetitions);
        if (parseInt(repetitions) > 1) {
            str += repetitions + " times. Total Score: " + totalScore;
        }
        // console.log(str);
        return str;
    };
    for (var reps = 2; reps <= 3; reps++)
        cases.forEach(function (c) {
            if (c.repetitions === 1) {
                var clone = JSON.parse(JSON.stringify(c));
                clone.repetitions = reps;
                cases.push(clone);
            }
        });
}
exports.Calculator = Calculator;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FsY3VsYXRvci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTRCO0FBRTVCLFNBQWdCLFVBQVU7SUFDdEIsSUFBSSxVQUFlLENBQUM7SUFDcEIsYUFBYTtJQUNiLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFFbEIsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDNUIsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ2hCLFNBQVMsRUFBRSxDQUFDO1lBQ1osS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsSUFBSTtTQUNkLEVBQUU7WUFDQyxTQUFTLEVBQUUsQ0FBQztZQUNaLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLElBQUk7U0FDZCxFQUFFO1lBQ0MsU0FBUyxFQUFFLENBQUM7WUFDWixLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDO0lBRUgsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztJQUNwQixJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUM7SUFDdEIsSUFBSSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDM0IsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNyQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFFckIsSUFBSSxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssRUFBRSxlQUFlO1lBQ3RCLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsR0FBRyxFQUFFLFdBQVc7WUFDaEIsR0FBRyxFQUFFLFdBQVc7WUFDaEIsWUFBWSxFQUFFLENBQUM7WUFDZixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLFdBQVcsRUFBRSxDQUFDO1lBQ2QsSUFB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