import React, {Component} from 'react';
import {removePosition, addPosition, toggleOppositePosition} from './utils/positioning';
import {AlignButton} from './components/position/AlignButton';
import {TOP, BOTTOM, RIGHT, LEFT} from './utils/constants';
import img from './assets/images/img.jpg';
import './assets/styles/app.css';

class ImageAlign extends Component {
    state = {
        positions: ['center']
    }

    setPositionState = (positions) => {
        this.setState(Object.assign({}, this.state, {positions}));
    }

    removePositionFromState = (currentPosition) => {
        const positions = removePosition(this.state.positions, currentPosition);
        this.setPositionState(positions);
    }

    addPositionToState = (currentPosition) => {
        const toggledPositions = toggleOppositePosition(this.state.positions, currentPosition);
        const positions = addPosition(toggledPositions, currentPosition);
        this.setPositionState(positions);
    }

    alignButtonClickHandler = (currentPosition) => {
        if (this.state.positions.indexOf(currentPosition) !== -1) {
            this.removePositionFromState(currentPosition);
        } else {
            this.addPositionToState(currentPosition);
        }
    }

    render() {
        let posStyle;
        const positionValue = this.state.positions;

        if ('center' === positionValue) {
            posStyle = {justifyContent: 'center', alignItems: 'center'};
        }

        return (
            <div className="alignment">
                <div className="alignment__container">
                    <div className="alignment__controls">
                        <div className="alignment__controls--vertical">
                            { [TOP, BOTTOM].map(position =>
                                <AlignButton
                                    key={position}
                                    clickHandler={this.alignButtonClickHandler}
                                    {...this.state}
                                    currentPosition={position}
                                />
                            ) }
                        </div>
                        {/*<div className="alignment__controls--horizontal">*/}
                        {/*{ [LEFT, RIGHT].map(position =>*/}
                        {/*<AlignButton*/}
                        {/*key={position}*/}
                        {/*clickHandler={this.alignButtonClickHandler}*/}
                        {/*{...this.state}*/}
                        {/*currentPosition={position}*/}
                        {/*/>*/}
                        {/*) }*/}
                        {/*</div>*/}
                    </div>

                    <div className="alignment__image-container"
                         style={posStyle}>
                        <img className="image-to-align" src={img}/>
                    </div>


                </div>

            </div>
        )
    }
}

export default ImageAlign;
