import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';
import './style.scss'
Clock.propTypes = {
    
};
// function formatDate(date) {
//     // const date =new Date();
//     const hours = `0${date.getHours()}`.slice(-2);
//     const min= `0${date.getMinutes()}`.slice(-2);
//     const se= `0${date.getSeconds()}`.slice(-2);
//     return `${hours}:${min}:${se}`;
// }
function Clock(props) {
    const {timeString}=useClock();
    // console.log(useClock());
    
    return (
       <div className="better-clock">
           <p className="better-clock__item">{timeString}</p>
       </div>
    
    );
}

export default Clock;