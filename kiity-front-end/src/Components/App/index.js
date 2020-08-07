import React,{useState,useEffect} from 'react'

import apiUtil from '../../utils/api.js';
import useApi from '../../HOOKS/useApi';

import SearchBar from '../SearchBar';
import MainDisplay from '../MainDisplay';

const App = ()=>{
  const [state,setState] = useState('')
  const {data,errors} = useApi('http://localhost:3001/all', apiUtil)

  useEffect(()=>{
    if(data){
      setState(data)
    }else if(errors){
      setState(errors)
    }
  },[data,errors])

  return(
    <div >
      {//<SearchBar setLiftedState={setState}/>
      }
      <MainDisplay state={state} />
    </div>
  )
}


export default App
