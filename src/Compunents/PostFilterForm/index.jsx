import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit:PropTypes.func,
};
PostFilterForm.defaultProps={
    onSubmit:null
}

function PostFilterForm(props) {
    const {onSubmit}=props
    const [searchTerm,setSearchTerm]=useState('');
    const typingTimeoutRef=useRef(null);
     console.log(typingTimeoutRef);
     
    function handleChangeSearch(e) {
        const value =e.target.value
        setSearchTerm(value)
        if(!onSubmit) return
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current=setTimeout(()=>{
            const formValues={
                searchTerm:value
            }
            // console.log(formValues);
            
            onSubmit(formValues)
        },300)
       
    }

    return (
      <form>
          <input type="text" value={searchTerm}
          onChange={handleChangeSearch}
          />
      </form>
    );
}

export default PostFilterForm;