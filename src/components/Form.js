import React,{useState} from 'react'
import axios from 'axios'

function Form() {

const [destination,setDestination] = useState('')

const SubmitForm = async (e)=>{
    e.preventDefault()
    try{

        await axios.post('/api/v1/tours/',{
            destination
        }).then((res)=>console.log(res)).catch(err=>console.log(err))
    }catch(error){

    }
}


  return (
    <div>
        <form>
           <input type="text" onChange={(e)=>setDestination(e.target.value)}/> 
  
  <button onClick={SubmitForm}>submit</button>
</form>
    </div>
  )
}

export default Form