
import React, { useState, useContext } from 'react';
import BoomContext from '../../context/BoomContext.js';
import './fancyButton.scss';

export interface IFancyButton {
    name: string;
    background?: string;
    color?: string;
}

const FancyButton = ({
    name,
    background,
    color
}: IFancyButton) => {

    const [boom, setBoom] = useContext(BoomContext);

    const [isPresed, setIsPresed] = useState('');
    color = color || 'white';
    background = background || 'orangered';

    const onMouseUpHandler = (event: any) => {
        event.preventDefault();
        setIsPresed('');
        setBoom(!boom);
    }

    return (
        <div
            className={"fancy-button " + isPresed}

            onMouseDown={() => setIsPresed('pressed')}
            onTouchStart={() => setIsPresed('pressed')}

            onMouseLeave={(() => setIsPresed(''))}
            onTouchEnd={((e) => onMouseUpHandler(e))}
            onMouseUp={((e) => onMouseUpHandler(e))}

            style={{ backgroundColor: background, color: color }}
        >
            <span>&#11088;</span>
            {name}
        </div>
    )
}

export default FancyButton;
