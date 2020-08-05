

const validation =(value)=>{
  const errors={}

  if(!value){
    errors.errors ='Enter a search term before submitting'
  }


  return errors
}

export default validation
