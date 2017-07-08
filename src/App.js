import React, {Component} from 'react';
import {removePosition, addPosition, toggleOppositePosition} from './utils/positioning';
import {AlignmentController} from './components/alignment/AlignmentController';
import {CssSnippet} from './components/CssSnippet';

import img from './assets/images/img.jpg';
import './assets/styles/app.css';

class ImageAlign extends Component {
    state = {
        positions: ['center'],
        styles: {justifyContent: 'center', alignItems: 'center' },
    }

    setPositionState = (positions) => {
        this.setState(Object.assign({}, this.state, {positions}));
    }

    removePositionFromState = (currentPosition) => {
        const positions = removePosition(this.state.positions, currentPosition);
        this.setPositionState(positions);
    };

    addPositionToState = (currentPosition) => {
        const toggledPositions = toggleOppositePosition(this.state.positions, currentPosition);
        const positions = addPosition(toggledPositions, currentPosition);
        this.setPositionState(positions);
    };

    alignButtonClickHandler = (currentPosition) => {
        if (this.state.positions.indexOf(currentPosition) !== -1) {
            this.removePositionFromState(currentPosition);
        } else {
            this.addPositionToState(currentPosition);
        }
    };



    render() {

        return (
          <div>
            <div className="alignment">
                <div className="alignment__container">
                    <AlignmentController
                      positions={this.state.positions}
                      clickHandler={this.alignButtonClickHandler}
                    />

                    <div className="alignment__image-btn alignment__image-container"
                         style={this.state.styles}>
                        <img className="image-to-align" src={img}/>
                    </div>
                </div>
            </div>

            <CssSnippet styles={this.state.styles} />

          </div>
        )
    }
}

export default ImageAlign;
