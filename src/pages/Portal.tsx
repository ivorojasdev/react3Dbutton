import React from 'react';

import './portal.scss';

const Portal = (props: any) => {
    return (
        <div className="portal">
            {props.children}
        </div>
    );
}

export default Portal;
