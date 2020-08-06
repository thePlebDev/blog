import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border-radius:0.3em;
  border: 1px solid green;
  opacity:0.7;
  color:green;
  font-size:16px;
  background-color:white;
  width:80px;
  position:absolute;
  top:10px;
  left:5px;
  outline:none;
  cursor:pointer;
  transition:transform 350ms ease-out;
  transform:${props=>props.state ? 'translateX(10px)':'translateX(-90px)'};
`


const EditButton = ({state})=>{

  return(
    <div>
      <Button state={state}>Edit</Button>
    </div>
  )
}

export default EditButton
