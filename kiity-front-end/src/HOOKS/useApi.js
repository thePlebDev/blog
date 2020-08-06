import {useState} from 'react';
import axios from 'axios';


const useApi = (destination)=>{
  const [data,setData] = useState('')
  const [errors,setErrors] = useState('')
  axios.get(destination)
    .then(results=>{
      setData(results.data)
    })
    .catch(error=> setErrors('Something bad happened. Fly you fools!'))

    return{
      data,
      errors
    }
}

export default useApi
