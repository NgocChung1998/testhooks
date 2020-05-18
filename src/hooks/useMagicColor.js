import React, { useState, useEffect, useRef } from 'react';

function randomColor(params) {
    const COLOR_LIST =['red','blue','pink','red','crimson'];
    const crIn=COLOR_LIST.indexOf(params)
    let newIn=crIn
    //nếu 2 màu còn bằng nhau thì tiếp tục
    while(newIn===crIn){
        newIn=Math.floor(Math.random()*COLOR_LIST.length)
    }
    // const ranIndex=Math.floor(Math.random()*COLOR_LIST.length)
    // return COLOR_LIST[ranIndex];
    return COLOR_LIST[newIn]
    
}
function useMagicColor(props) {
 const [color,setColor]= useState('transparent');
 const colorRef= useRef('transparent')
  useEffect(()=>{
    const colorInter =setInterval(()=>{
    //    console.log(color);
       //lấy giá trị màu trong DOM 
        // console.log(colorRef.current);
        
        // const newColor=randomColor();
        const newColor=randomColor(colorRef.current)
        
        setColor(newColor)
        colorRef.current=newColor
       
    },1000);
    return ()=>{
        clearInterval(colorInter)
    }
  },[])
 return color
}

export default useMagicColor;