import React from 'react';

export const AlignButton = ({buttonPosition, positions, clickHandler}) => {
    let btnTxt = buttonPosition.charAt(0).toUpperCase() + buttonPosition.slice(1);

    if ( positions.indexOf(buttonPosition) !== -1 ) {
        btnTxt = 'X';
    }

    return (
        <button onClick={() => clickHandler(buttonPosition)}>
            {btnTxt}
        </button>
    );
}
