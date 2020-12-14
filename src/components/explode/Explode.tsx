import React, { useContext } from 'react';
import BoomContext from '../../context/BoomContext';

import './explode.scss';

const Explode = () => {
    const [isBoomVisible] = useContext(BoomContext);
    return <> {
        isBoomVisible &&
        <div className="explode">
            <div className="star"></div>
        </div>
    }</>
}

export default Explode;
