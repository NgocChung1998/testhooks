import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    
};
function formatDate(date) {
    // const date =new Date();
    const hours = `0${date.getHours()}`.slice(-2);
    const min= `0${date.getMinutes()}`.slice(-2);
    const se= `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${min}:${se}`;
}
function Clock(props) {
    const [timeString,setTimeString]= useState('');
    useEffect(()=>{
       const hide = setInterval(()=>{
            const now =new Date();
            const newTimeString=formatDate(now);
            setTimeString(newTimeString);
         
        },1000)
        return ()=>{
            console.log('Shut down');
            clearInterval(hide)
        }
        
    },[])
    return (
        <p style={{fontSize:'42px'}}>{timeString}</p>
    
    );
}

export default Clock;