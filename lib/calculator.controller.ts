import moment from 'moment';

export function Calculator() {
    var calculator: any;
    // @ts-ignore
    calculator = this;

    calculator.targetScore = "";
    calculator.areas = [{
        clearTime: 0,
        kills: 3,
        score: 3300
    }, {
        clearTime: 0,
        kills: 3,
        score: 3300
    }, {
        clearTime: 0,
        kills: 3,
        score: 3300
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
            if (c.show) calculator.foundAdvice = true;
        });
        return cases;
    };

    calculator.getBoundary = function (numberOfAreasCleared, timeLeft, killsInAreaUncleared) {
        return (killScore * 3 + (scorePerSecond * (timeLeft + 0.5))) * numberOfAreasCleared + ((killsInAreaUncleared || 0) * killScore);
    };

    calculator.getInstructionsFromStrategy = function (strategy, targetScore, a1TimeLeft, a2TimeLeft, a3TimeLeft) {
        let score = Math.floor((targetScore - scorePerSecond) / strategy.repetitions);
        let targetScorePerAttempt = score;
        if (strategy.killsInUncleared) {
            score -= strategy.killsInUncleared * killScore;
        }
        if (strategy.clearedAreas) {
            score /= strategy.clearedAreas;
        }
        var areas: any = [];
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
                let multiplier = totalOffsetSeconds / Math.abs(totalOffsetSeconds);
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
            })
        }
        var length = areas.length;
        for (var j = 0; j < 3 - length; j++) {
            areas.push({
                clearTime: 0,
                kills: 0,
                score: 0
            });
        }
        let a1NewClearTime = a1TimeLeft && calculator.getClearTime(a1TimeLeft);
        let a2NewClearTime = a2TimeLeft && calculator.getClearTime(a2TimeLeft);
        let a3NewClearTime = a3TimeLeft && calculator.getClearTime(a3TimeLeft);
        if (a1TimeLeft && areas[0]) areas = calculator.adjustRelatively(areas, 0, a1NewClearTime);
        if (a2TimeLeft && areas[1]) areas = calculator.adjustRelatively(areas, 1, a2NewClearTime);
        if (a3TimeLeft && areas[2]) areas = calculator.adjustRelatively(areas, 2, a3NewClearTime);
        let modifiedScore = (areas.reduce(function (total, e) {
            return total + e.score;
        }, 0) * strategy.repetitions);

        if (modifiedScore > targetScore - scorePerSecond) return;

        return areas;
    };

    calculator.getClearTime = function (timeLeft) {
        let parts = timeLeft.split(':');
        let minutes = parseInt(parts[0]);
        let seconds = parseInt(parts[1]);
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
    var totalMaxScore = 9900;
    var maxAreaScore = totalMaxScore / 3;
    var killScore = (maxAreaScore * .65) / 3;
    var scorePerSecond = (maxAreaScore - (killScore * 3)) / maxTimeLeft;
    calculator.recompute = function (index, areas) {
        // console.log('recompute', 'index =', index, 'field =', field);
        var kills = areas[index].kills, clearTime = areas[index].clearTime;
        var score = 0;
        if (kills === 0 && index === 0) {
            score = 50;
        } else if (kills === 0)
            score = 0;
        else if (kills === 1) {
            score = killScore;
        } else if (kills === 2) {
            score = killScore * 2;
        } else score = Math.round(maxAreaScore - (Math.max(0, clearTime - 0.5) * scorePerSecond));

        areas[index].score = score;
        return areas;
    };

    calculator.adjustRelatively = function (areas, index, newValue) {
        let oldValue = parseInt(areas[index].clearTime);
        var change = newValue - areas[index].clearTime;
        areas[index].clearTime = newValue;
        var relativeChanges: any = [];
        if (areas[index].kills !== 3) return areas;
        for (var i = index; i < 3; i++) {
            if (index !== i) {
                if (areas[i].kills === 3) {
                    relativeChanges.push(i);
                } else break;
            }
        }
        relativeChanges.forEach(function (c, i) {
            var halfChange = relativeChanges.length > 1 && i === 0 ? Math[oldValue % 2 === 0 ? 'ceil' : 'floor'](change / 2) : change;
            if (areas[c].clearTime - halfChange >= 0 && areas[c].clearTime - halfChange <= 120) {
                // console.log('setting', c, -halfChange);
                areas[c].clearTime -= halfChange;
                change -= halfChange;
            } else {
                // console.log('skipped', c, 'calculator.areas[c].clearTime - halfChange =', calculator.areas[c].clearTime - halfChange);
            }
        });
        areas = calculator.recompute(0, areas);
        areas = calculator.recompute(1, areas);
        areas = calculator.recompute(2, areas);
        return areas;
    };

    calculator.remainingTime = function (clearTime) {
        return moment().startOf('day').add(2, 'minutes').subtract(clearTime, 'seconds').format('mm:ss')
    };

    calculator.changeTier = function () {
        // console.log('changeTier', calculator.tier);
        if (calculator.tier == "1") {
            totalMaxScore = 9900;
            maxAreaScore = totalMaxScore / 3;
            killScore = (maxAreaScore * .65) / 3;
            scorePerSecond = (maxAreaScore - (killScore * 3)) / maxTimeLeft;
            // scorePerSecond = 10.5;
            // killScore = 780;
            // maxAreaScore = 3600;
        } else if (calculator.tier == "2") {
            totalMaxScore = 3150;
            maxAreaScore = totalMaxScore / 3;
            killScore = (maxAreaScore * .65) / 3;
            scorePerSecond = (maxAreaScore - (killScore * 3)) / maxTimeLeft;
            // scorePerSecond = 2.625;
            // killScore = 195;
            // maxAreaScore = 900;
        } else if (calculator.tier == "3") {
            totalMaxScore = 900;
            maxAreaScore = totalMaxScore / 3;
            killScore = (maxAreaScore * .65) / 3;
            scorePerSecond = (maxAreaScore - (killScore * 3)) / maxTimeLeft;
            // scorePerSecond = 0.875;
            // killScore = 65;
            // maxAreaScore = 300;
        }
    };

    calculator.recomputeByScore = function (index, onBlur) {
        // console.log('recomputeByScore', 'index =', index, 'onBlur =', onBlur);
        var score = calculator.areas[index].score;
        if (score < killScore && onBlur) {
            calculator.areas[index].clearTime = 0;
            calculator.areas[index].kills = 0;
            calculator.areas[index].score = index > 0 ? 0 : 50;
        } else if (score < killScore * 2 && onBlur) {
            calculator.areas[index].clearTime = 0;
            calculator.areas[index].kills = 1;
            calculator.areas[index].score = killScore;
        } else if (score < killScore * 3 && onBlur) {
            calculator.areas[index].clearTime = 0;
            calculator.areas[index].kills = 2;
            calculator.areas[index].score = killScore * 2;
        } else if (score >= killScore * 3 && score <= maxAreaScore) {
            calculator.areas[index].clearTime = Math.ceil((maxAreaScore - score) / scorePerSecond);
            calculator.areas[index].kills = 3;
            calculator.areas[index].score = score;
        }
    };

    calculator.computeByScore = function (score) {
        var area = {
            clearTime: 0,
            kills: 3,
            score: 3300
        };
        if (score < killScore) {
            area.clearTime = 0;
            area.kills = 0;
            area.score = 0;
        } else if (score < killScore * 2) {
            area.clearTime = 0;
            area.kills = 1;
            area.score = killScore;
        } else if (score < killScore * 3) {
            area.clearTime = 0;
            area.kills = 2;
            area.score = killScore * 2;
        } else if (score >= killScore * 3 && score <= maxAreaScore) {
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
            if (a.kills < 3) end = true;
        });
        return total;
    };

    calculator.getInstructionsToString = function (areas) {
        var str = "";
        var ended = false;
        areas.forEach(function (area, i) {
            if (ended) return;
            if (area.kills === 3) {
                str += `[A${i + 1}] ${calculator.remainingTime(area.clearTime)} time left. `;
            } else if (area.kills > 0) {
                ended = true;
                str += `[A${i + 1}] ${area.kills} kill${area.kills === 1 ? '' : 's'}. `;
            } else {
                ended = true;
                str += `[A${i + 1}] Quit Battle. `;
            }
        });

        str += `Score: ${areas.reduce(function (total, e) {
            return total + e.score;
        }, 0)}. `;

        return str;
    };

    calculator.getInstructions = function (targetScore, strategy, repetitions) {

        var areas = calculator.areas;
        if (!strategy) return;
        if (strategy) {
            areas = strategy;
        }
        let totalScore = areas.reduce(function (total, e) {
            return total + e.score;
        }, 0) * repetitions;
        var str = `${strategy.title} (${(totalScore/targetScore * 100).toFixed(2)}%):
${calculator.getInstructionsToString(areas)}`;

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
                let clone = JSON.parse(JSON.stringify(c));
                clone.repetitions = reps;
                cases.push(clone);
            }
        });

};
