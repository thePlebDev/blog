import {useState,useEffect} from 'react';


const useForm = (validationCallback,apicall,destination,setLiftedState)=>{

  const [values,setValue] = useState({search:''})
  const [errors,setErrors] = useState({errors:''})
  const [isSubmitting,setIsSubmitting] = useState(false)

  const handleChange=(e)=>{
    const {value,name} = e.target
    setValue({[name]:value})

  }

  const handleSubmit=(e)=>{
      e.preventDefault()
      setErrors(validationCallback(values.search))
      setIsSubmitting(true)

  }

useEffect(()=>{

  if(isSubmitting ===true && Object.keys(errors).length === 0){
    console.log(values.search)
    apicall(destination,values.search)
      .then(result=>console.log(result))
      .catch(error=>console.log('ERROR: ' + error))
    setIsSubmitting(false)
  }
},[errors,isSubmitting,destination,apicall])

  return{
    values,
    errors,
    handleChange,
    handleSubmit
  }
}

export default useForm
