import React from 'react';
import useMagicColor from '../../hooks/useMagicColor';

import './style.scss'
function MagicBox(props) {
    const color = useMagicColor();
    return (
        <div
         style={{backgroundColor:color}}
         className='magic-box'>
            
        </div>
    );
}

export default MagicBox;