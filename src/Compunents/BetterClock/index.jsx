import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';



function BeterClock(props) {
    const {timeString}=useClock();
    // console.log(useClock());
    
    return (
        <p style={{fontSize:'42px'}}>{timeString}</p>
    
    );
}

export default BeterClock;