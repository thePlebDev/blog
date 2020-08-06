import React,{useState} from 'react';
import styled from 'styled-components'

import DeleteButton from '../ButtonDelete';
import EditButton from '../ButtonEdit';


const Container = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  padding:5px;
  border-radius: 1em;
  margin:1em;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
  overflow:hidden;
`

const H2 = styled.h2`
  letter-spacing:2px;
`

const H3 = styled.h3`
  margin-top: 0;
`


const MainIndivDisplay =({title,body})=>{
  const [state,setState] = useState(false)

  const handleEnter =()=>{
    setState(true)
  }

  const handleLeave =()=>{
    setState(false)
  }

  return(
    <Container onMouseEnter={()=>handleEnter()} onMouseLeave={()=>handleLeave()}>
      <H2>{title}</H2>
      <H3>{body}</H3>
      <EditButton state={state}/>
      <DeleteButton state={state}/>
    </Container>
  )
}

export default MainIndivDisplay
