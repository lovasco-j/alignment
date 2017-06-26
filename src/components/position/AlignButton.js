import React from 'react';
import {getOppisitePosition} from '../../utils/positioning'

export const AlignButton = ({currentPosition, positions, clickHandler}) => {
    let btnTxt = currentPosition

    if ( positions.indexOf(currentPosition) !== -1 ) {
        // currentPosition = getOppisitePosition(currentPosition);
        btnTxt = 'X';
    }

    return (
        <button onClick={() => clickHandler(currentPosition)}>
            {btnTxt}
        </button>
    );
}