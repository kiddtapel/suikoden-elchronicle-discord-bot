"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_controller_1 = require("./calculator.controller");
describe('Calculator', function () {
    test('war 1 9000', function () {
        var calc = new calculator_controller_1.Calculator();
        var results = calc.getAdviceByScore(9000).filter(function (e) { return e.show; });
        expect(results).toEqual([{
                "clearedAreas": 3,
                "killsInUncleared": 0,
                "max": 70,
                "min": 50,
                "repetitions": 1,
                "show": true,
                "title": "Full Clear",
                "type": "Average"
            }, {
                "clearedAreas": 1,
                "killsInUncleared": 2,
                "max": 85,
                "min": 50,
                "repetitions": 2,
                "show": true,
                "title": "1 Clear and 2 Kills",
                "type": "Average"
            }, {
                "clearedAreas": 1,
                "killsInUncleared": 0,
                "max": 85,
                "min": 50,
                "repetitions": 3,
                "show": true,
                "title": "1 Clear",
                "type": "Average"
            }]);
    });
    test('war 1 6000', function () {
        var calc = new calculator_controller_1.Calculator();
        var results = calc.getAdviceByScore(6000).filter(function (e) { return e.show; });
        expect(results).toEqual([{
                "clearedAreas": 2,
                "killsInUncleared": 1,
                "max": 50,
                "min": 15,
                "repetitions": 1,
                "show": true,
                "title": "2 Clears and 1 Kill",
                "type": "Dragged"
            }, {
                "clearedAreas": 2,
                "killsInUncleared": 0,
                "max": 85,
                "min": 50,
                "repetitions": 1,
                "show": true,
                "title": "2 Clears",
                "type": "Average"
            }, {
                "clearedAreas": 1,
                "killsInUncleared": 0,
                "max": 85,
                "min": 50,
                "repetitions": 2,
                "show": true,
                "title": "1 Clear",
                "type": "Average"
            }, {
                "clearedAreas": 0,
                "killsInUncleared": 2,
                "max": 0,
                "min": 0,
                "repetitions": 3,
                "show": true,
                "title": "2 Kills"
            }]);
    });
    test('war 1 3000', function () {
        var calc = new calculator_controller_1.Calculator();
        var results = calc.getAdviceByScore(3000).filter(function (e) { return e.show; });
        expect(results).toEqual([{
                "clearedAreas": 1,
                "killsInUncleared": 0,
                "max": 85,
                "min": 50,
                "repetitions": 1,
                "show": true,
                "title": "1 Clear",
                "type": "Average"
            }, {
                "clearedAreas": 0,
                "killsInUncleared": 1,
                "max": 0,
                "min": 0,
                "repetitions": 2,
                "show": true,
                "title": "1 Kill"
            }, {
                "clearedAreas": 0,
                "killsInUncleared": 1,
                "max": 0,
                "min": 0,
                "repetitions": 3,
                "show": true,
                "title": "1 Kill"
            }]);
    });
    test('war 1 1600', function () {
        var calc = new calculator_controller_1.Calculator();
        var results = calc.getAdviceByScore(1600).filter(function (e) { return e.show; });
        expect(results).toEqual([{
                "clearedAreas": 0,
                "killsInUncleared": 2,
                "max": 0,
                "min": 0,
                "repetitions": 1,
                "show": true,
                "title": "2 Kills"
            }, {
                "clearedAreas": 0,
                "killsInUncleared": 1,
                "max": 0,
                "min": 0,
                "repetitions": 2,
                "show": true,
                "title": "1 Kill"
            }]);
    });
    test('war 1 1560', function () {
        var calc = new calculator_controller_1.Calculator();
        var results = calc.getAdviceByScore(1560).filter(function (e) { return e.show; });
        expect(results).toEqual([{
                "clearedAreas": 0,
                "killsInUncleared": 1,
                "max": 0,
                "min": 0,
                "repetitions": 1,
                "show": true,
                "title": "1 Kill"
            }]);
    });
    test('war 1 800', function () {
        var calc = new calculator_controller_1.Calculator();
        var results = calc.getAdviceByScore(800).filter(function (e) { return e.show; });
        expect(results).toEqual([{
                "clearedAreas": 0,
                "killsInUncleared": 1,
                "max": 0,
                "min": 0,
                "repetitions": 1,
                "show": true,
                "title": "1 Kill"
            }]);
    });
    test('war 1 780', function () {
        var calc = new calculator_controller_1.Calculator();
        var results = calc.getAdviceByScore(780).filter(function (e) { return e.show; });
        expect(results).toEqual([]);
    });
    test('get clear time', function () {
        var calc = new calculator_controller_1.Calculator();
        expect(calc.getClearTime('1:30')).toEqual(30);
        expect(calc.getClearTime('0:30')).toEqual(90);
        expect(calc.getClearTime('0:00')).toEqual(120);
        expect(calc.getClearTime('2:00')).toEqual(0);
        expect(calc.getClearTime('1:59')).toEqual(1);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5jb250cm9sbGVyLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWxjdWxhdG9yLmNvbnRyb2xsZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUFtRDtBQUVuRCxRQUFRLENBQUMsWUFBWSxFQUFFO0lBRW5CLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDZixJQUFJLElBQUksR0FBRyxJQUFJLGtDQUFVLEVBQUUsQ0FBQztRQUM1QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsQ0FBQztRQUM5RCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3JCLGNBQWMsRUFBRSxDQUFDO2dCQUNqQixrQkFBa0IsRUFBRSxDQUFDO2dCQUNyQixLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxhQUFhLEVBQUUsQ0FBQztnQkFDaEIsTUFBTSxFQUFFLElBQUk7Z0JBQ1osT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE1BQU0sRUFBRSxTQUFTO2FBQ3BCLEVBQUU7Z0JBQ0MsY0FBYyxFQUFFLENBQUM7Z0JBQ2pCLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3JCLEtBQUssRUFBRSxFQUFFO2dCQUNULEtBQUssRUFBRSxFQUFFO2dCQUNULGFBQWEsRUFBRSxDQUFDO2dCQUNoQixNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixNQUFNLEVBQUUsU0FBUzthQUNwQixFQUFFO2dCQUNDLGNBQWMsRUFBRSxDQUFDO2dCQUNqQixrQkFBa0IsRUFBRSxDQUFDO2dCQUNyQixLQUFLLEVBQUUsRUFBRTtnQkFDVCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxhQUFhLEVBQUUsQ0FBQztnQkFDaEIs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RUFBRTtRQUNuQixJQUFJLElBQUksR0FBRyxJQUFJLGtDQUFVLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFDIn0=