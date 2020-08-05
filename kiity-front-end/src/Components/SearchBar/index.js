import React from 'react';

import useForm from '../../HOOKS/useForm.js';
import validation from '../../utils/validaiton.js'


const SearchBar =()=>{
  // (DONE) 1) make it into a controlled form
  // (DONE) 2) abstract away the data,apicall,validation and errors into a custom hook
  //3) create validation utility functions
  //4) prosper
  const {errors,values,handleChange,handleSubmit} = useForm(validation)

  return(
    <div>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label>
          <input type='text' name='search' value={values.search} onChange={(e)=>{handleChange(e)}}></input>
        </label>
        <button type="Submit">Search</button>
      </form>

    </div>
  )
}

export default SearchBar
