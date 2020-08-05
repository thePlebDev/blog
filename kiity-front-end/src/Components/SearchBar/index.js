import React,{useState} from 'react';
import styled from 'styled-components'

import useForm from '../../HOOKS/useForm.js';
import validation from '../../utils/validaiton.js'

const Button = styled.button`
  position:absolute;
  text-transform:uppercase;
  letter-spacing:1px;
  padding:1.1em 1.7em;
  border-radius:1em;
  outline:none;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.2);
  border:1px solid rgba(0,0,0,0.2);
  width: 90px;
  top:20%;
  left:15%;

`

const Container = styled.div`
  position:relative:
`

const Input = styled.input`
 height:3.7em;
 position:absolute;
 top:20%;
 left:18%;
 border-radius:1em;
 outline:none;
 padding-left:80px;
 box-shadow: 0px 0px 6px rgba(0,0,0,0.2);
 border:1px solid rgba(0,0,0,0.2);
 transition:width 350ms ease-out, opacity 300ms ease-out;

 width:${props=>props.state? '60%': '0%'};
 opacity:${props=>props.state? '1': '0'};
`





const SearchBar =()=>{
  // (DONE) 1) make it into a controlled form
  // (DONE) 2) abstract away the data,apicall,validation and errors into a custom hook
  //3) create validation utility functions
  //4) prosper
  const [state,setState] = useState(false)
  const {errors,values,handleChange,handleSubmit} = useForm(validation)
  console.log(state)

  const handleClick =()=>{
    setState(true)

  }

  return(
    <Container>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <label>
          <Input state={state} type='text' name='search' value={values.search} onChange={(e)=>{handleChange(e)}}></Input>
        </label>
        <Button  type="Submit" onClick={()=>{handleClick()} }>
        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
          <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
        </svg>
        </Button>
      </form>

    </Container>
  )
}

export default SearchBar
