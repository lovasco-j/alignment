import React from 'react';
import {AlignButton} from './AlignButton';
import {TOP, BOTTOM, CENTER, RIGHT, LEFT} from '../../utils/constants';

export const AlignmentController = ({positions, clickHandler}) => {

  return (
    <div className="alignment__controls">

      <div className="alignment__controls-btn alignment__controls--top">
        <AlignButton
            key={TOP}
            clickHandler={clickHandler}
            positions={positions}
            buttonPosition={TOP}
        />
      </div>
      <div className="alignment__controls-btn alignment__controls--middle">
        {[LEFT, CENTER, RIGHT].map( position =>
          <AlignButton
            key={position}
            clickHandler={clickHandler}
            positions={positions}
            buttonPosition={position}
          />
        )}
      </div>
      <div className="alignment__controls-btn alignment__controls--bottom">
        <AlignButton
            key={BOTTOM}
            clickHandler={clickHandler}
            positions={positions}
            buttonPosition={BOTTOM}
        />
      </div>
    </div>
  );

};
