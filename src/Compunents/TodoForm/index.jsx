import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit:PropTypes.func,
};
TodoForm.defaultProps={
    onSubmit:null,
}
function TodoForm(props) {
    // khai báo và prop ở thằng cha truyền cho 
    const {onSubmit}=props;
    // console.log(onSubmit)
    const [value,setValue] = useState('');
    function handleValueChange(e){
        // console.log(e.target.value);
        setValue(e.target.value)
      }
      function handleSubmit(e) {
      
          e.preventDefault();
          
          if(!onSubmit) return;
          const formValues={
              title:value,  
          }
        //  truyền ngược giá trị ra cho thằng cha
          onSubmit(formValues);
          setValue('')
      }
    return (
      <form onSubmit={handleSubmit}>
      <input 
      onChange={handleValueChange}
      type='text' value={value}></input>
      </form>
    );
}

export default TodoForm;