const { stringLength, reverseString, SimpleCalculator, capitalize } = require('./testingPractice');

test('count the number and return the number', () => {
    const stringLengthTF = stringLength('hooo');
    expect(stringLengthTF).toBe(4);

})
test('validation should out put true or false based on the string lenght', () => {
    const stringLengthF = stringLength('hooooooooooooooooooooo');
    expect(stringLengthF).toBe('error');
})

test('check if it is reverse string', () => {
    const reverseStringck = reverseString('reverse');
    expect(reverseStringck).toBe('esrever');
})

describe('simple calulator', () => {
    describe('simple calulator add', () => {
        test('simple calculater add valid', () => {
            const add = SimpleCalculator.add(2, 3)
            expect(add).toBe(5);
        })
        test('simple calculater add nan', () => {
            const add = SimpleCalculator.add(2, 'four')
            expect(add).toBe('NOT A Number');
        })
        test('simple calculater add valid', () => {
            const add = SimpleCalculator.add(3, 5)
            expect(add).toBe(8);
        })

    });
    describe('simple calulator sum', () => {
        test('simple calculater sum', () => {
            const sub = SimpleCalculator.sub(2, 3)
            expect(sub).toBe(-1);
        })
        test('simple calculater sum nan', () => {
            const sub = SimpleCalculator.sub(2, 'four')
            expect(sub).toBe('NOT A Number');
        })
        test('simple calculater add valid', () => {
            const sub = SimpleCalculator.sub(5, 4)
            expect(sub).toBe(1);
        })

    });
    describe('simple calulator mul', () => {
        test('simple calculater mul', () => {
            const mul = SimpleCalculator.mul(2, 3)
            expect(mul).toBe(6);
        })
        test('simple calculater add nan', () => {
            const mul = SimpleCalculator.mul(2, 'four')
            expect(mul).toBe('NOT A Number');
        })
        test('simple calculater mul valid', () => {
            const mul = SimpleCalculator.mul(3, 5)
            expect(mul).toBe(15);
        })

    });
    describe('simple calulator div', () => {
        test('simple calculater div', () => {
            const div = SimpleCalculator.div(4, 4)
            expect(div).toBe(1);
        })
        test('simple calculater div nan', () => {
            const div = SimpleCalculator.div(2, 'four')
            expect(div).toBe('NOT A Number');
        })
        test('simple calculater div valid', () => {
            const div = SimpleCalculator.div(15, 3)
            expect(div).toBe(5);
        })

    })
});

test('check if the 1st letter is capital', () => {
    const capital = capitalize('quee')
    expect(capital).toBe('Quee');
})