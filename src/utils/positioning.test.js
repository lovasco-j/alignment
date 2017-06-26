import {removePosition, addPosition} from './positioning';

describe('Should remove position and not mutate state', () => {
    const beforeState = {position: ['top', 'left']};

    const action = removePosition(beforeState, 'top');

    const afterState = {position: ['left']};

    test('Should remove position', () => {
        expect(action).toEqual(afterState);
    });

    test('removePosition should not mutate state', () => {
        expect(action).not.toBe(afterState);
    });
});

describe('Should add position and not mutate state', () => {
    const beforeState = {position: ['top']};

    const action = addPosition(beforeState, 'left');

    const afterState = {position: ['top','left']};

    test('Should add position', () => {
        expect(action).toEqual(afterState);
    });

    test('addPosition should not mutate state', () => {
        expect(action).not.toBe(afterState);
    });
});

