import React from 'react'
import {useQueryContext} from '../context/query_context'
import axios from 'axios'
import Navbar from '../components/Navbar'

function QueryPage() {
    const {query,isLoading,fetchQuery} = useQueryContext()
    const deleteQuery = async (id)=>{
      try{
       await axios.delete(`/api/v1/query/delete/${id}`)
       fetchQuery('/api/v1/query')
      }catch(error){
        console.log(error);
      }
    }

    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <div className=''>
        <Navbar/>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Package Name</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">CONTACT</th>
      <th scope='col'>COUNTRY</th>
      <th scope='col'>ADULT</th>
      <th scope='col'>CHILDREN</th>
      <th scope='col'>SUBJECT</th>
      <th scope='col'>MESSAGE</th>
      <th scope='col'>REMOVE</th>
      
    </tr>
  </thead>
  <tbody>
    
        {query.map((query)=>{
            const {_id,name, email, contact, country, subject, message,numberOfAdult:adult, numberOfChildren:children,packageName
            } = query;
           
            return(
            <tr key={_id}>
                <th scope="row">{packageName}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{contact}</td>
                <td>{country}</td>
                <td>{adult}</td>
                <td>{children?children:`-`}</td>

                <td>{subject}</td>
                <td>{message}</td>
                <td><i className="fas fa-trash-alt" onClick={()=>{deleteQuery(_id)}}></i></td>
                </tr>
            )
        })}
  </tbody>
</table>
    </div>
  )
}

export default QueryPage