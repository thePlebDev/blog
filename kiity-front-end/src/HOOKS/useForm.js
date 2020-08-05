import {useState,useEffect} from 'react';


const useForm = (validationCallback)=>{

  const [values,setValue] = useState({search:''})
  const [errors,setErrors] = useState({errors:''})
  const [isSubmitting,setIsSubmitting] = useState(false)

  const handleChange=(e)=>{
    const {value,name} = e.target
    setValue({[name]:value})

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('this has been submitted')
    setErrors(validationCallback(values.search))
    setIsSubmitting(true)

  }

useEffect(()=>{

  if(isSubmitting ===true && Object.keys(errors).length === 0){
    console.log('this is where the api call is going to go')
    setIsSubmitting(false)
  }
},[errors,isSubmitting])

  return{
    values,
    errors,
    handleChange,
    handleSubmit
  }
}

export default useForm
