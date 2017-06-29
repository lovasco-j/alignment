import {removePosition, addPosition, toggleOppositePosition} from './positioning';

describe.skip('Should remove position and not mutate state', () => {
    // Arrange
    const beforeState = ['top', 'left'];
    const positionToRemove = 'top';
    const afterState = ['left'];

    // Act
    const result = removePosition(beforeState, 'top');

    test('Should remove position', () => {
        // Assert
        expect(result).toEqual(afterState);
    });

    test('removePosition should not mutate state', () => {
        // Assert
        expect(result).not.toBe(beforeState);
    });
});

describe.skip('Should add position and not mutate state', () => {
    // Arrange
    const beforeState = ['top'];
    const positionToAdd = 'left';
    const afterState = ['top', 'left'];

    // Act
    const result = addPosition( beforeState, positionToAdd );

    test('Should add position', () => {
        // Assert
        expect(result).toEqual(afterState);
    });

    test('addPosition should not mutate state', () => {
      // Assert
        expect(result).not.toBe(beforeState);
    });
});

describe.skip( 'toggleOppositePosition should only remove a position\'s counter part if it is avaliable', () => {

  // Arrange
  const beforeState = ['top', 'bottom', 'right'];
  const positionToToggleFrom = 'top';
  const afterState = ['top', 'right'];

  // Act
  const result = toggleOppositePosition( beforeState, positionToToggleFrom );

  test( 'Should only remove position\'s counter part', () => {
    // Assert
    expect(result).toEqual(afterState);
  } );

  test( 'Should not remove any position other then it\'s counter part', () => {
    // Assert
    expect(result).not.toEqual(['top', 'bottom']);
    expect(result).not.toEqual(['top']);
    expect(result).not.toEqual(['bottom']);
  } );

});
