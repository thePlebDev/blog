import axios from 'axios';


const apicall = async (destination,value)=>{
    let response = await axios.get(destination)
    console.log('response:'+response)
    return response

}

export default apicall
