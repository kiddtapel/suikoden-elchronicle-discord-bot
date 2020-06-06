import {Calculator} from "./calculator.controller";

describe('Calculator', () => {

    test('war 1 9000', () => {
        let calc = new Calculator();
        let results = calc.getAdviceByScore(9000).filter(e => e.show);
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

    test('war 1 6000', () => {
        let calc = new Calculator();
        let results = calc.getAdviceByScore(6000).filter(e => e.show);
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

    test('war 1 3000', () => {
        let calc = new Calculator();
        let results = calc.getAdviceByScore(3000).filter(e => e.show);
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

    test('war 1 1600', () => {
        let calc = new Calculator();
        let results = calc.getAdviceByScore(1600).filter(e => e.show);
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

    test('war 1 1560', () => {
        let calc = new Calculator();
        let results = calc.getAdviceByScore(1560).filter(e => e.show);
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

    test('war 1 800', () => {
        let calc = new Calculator();
        let results = calc.getAdviceByScore(800).filter(e => e.show);
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

    test('war 1 780', () => {
        let calc = new Calculator();
        let results = calc.getAdviceByScore(780).filter(e => e.show);
        expect(results).toEqual([]);
    });


    test('get clear time', () => {
        let calc = new Calculator();
        expect(calc.getClearTime('1:30')).toEqual(30);
        expect(calc.getClearTime('0:30')).toEqual(90);
        expect(calc.getClearTime('0:00')).toEqual(120);
        expect(calc.getClearTime('2:00')).toEqual(0);
        expect(calc.getClearTime('1:59')).toEqual(1);
    })
});
