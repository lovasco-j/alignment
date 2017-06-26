import {TOP, BOTTOM, RIGHT, LEFT } from './constants';

export const removePosition = (positions, positionToRemove) => {
    return positions.filter(p => p !== positionToRemove)
}

export const addPosition = (positions, positionToAdd) => {
    return [ ...positions, positionToAdd ];
}

export const toggleOppositePosition = (positions, currentPosition) => {
    const oppositePosition = getOppositePosition(currentPosition);
    if ( positions.indexOf(oppositePosition) !== -1 ) {
        return removePosition( positions, oppositePosition );
    }
    return positions;
}

export const getOppositePosition = ( currentPosition ) => {
    switch (currentPosition) {
        case TOP:    return BOTTOM;
        case BOTTOM: return TOP;
        case RIGHT:  return LEFT;
        case LEFT:   return RIGHT;
    }
}
