import {useState,useEffect} from 'react';



const useApi = (destination,apiCall)=>{
  const [data,setData] = useState('')
  const [errors,setErrors] = useState('')

  useEffect(()=>{
    apiCall(destination)
      .then(results=>setData(results))
      .catch(error=>setErrors([{title:'An error has occured, please try again'}]))
  },[apiCall,destination])

    return{
      data,
      errors
    }
}

export default useApi
