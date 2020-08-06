import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius:0.5em;
  border: 1px solid red;
  color:red;
  opacity:0.7;
  font-size:16px;
  background-color:white;
  width:80px;
  position:absolute;
  top:10px;
  right:5px;
  outline:none;
  cursor:pointer;
  transition:transform 350ms ease-out;

  transform:${props=>props.state? 'translateX(-10px)': 'translateX(90px)'}

`



const DeleteButton =({state})=>{

  return(
    <div>
      <Button state={state}>Delete</Button>
    </div>
  )
}

export default DeleteButton
