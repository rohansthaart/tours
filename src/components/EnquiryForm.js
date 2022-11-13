import axios from 'axios'
import React,{useState} from 'react'

import {countries} from '../utils/countryOption'
import styled from 'styled-components'
import {query_url as url} from '../utils/constants'

function EnquiryForm({packages}) {
 const [name,setName] = useState('')
 const [email,setEmail] = useState('')
const [country,setCountry]=useState('')
const [contact,setContact] = useState('')
const [numberOfAdult,setNumberOfAdult] = useState('')
const [numberOfChildren,setNumberOfChildren] = useState('')
const [message,setMessage] = useState('')
const [subject,setSubject] = useState('')
const [packageName,setPackageName] = useState(packages)
const [sended,setSended] = useState(false)

const handleAlert = ()=>{
  setSended(true)
  setTimeout(()=>{
    setSended(false)
  },2000);
}

const buttonPress = async (e)=>{
  e.preventDefault()
 try{
  await axios.post(url,{packageName,name,email,country,contact,numberOfAdult,numberOfChildren,subject,message}).then(console.log('success'))
      setName('')
      setEmail('')
      setCountry('My country is*')
      setContact(0)
      setNumberOfAdult(0)
      setNumberOfChildren(0)
      setMessage('')
      setSubject('')
      handleAlert()
    }catch(error){
      console.log(error);
    }
    }
  return (
    <Wrapper>
        <h2>&bull;You can send your enquiry via the form below&bull;</h2>
        <div className='underline'></div>
        <p>Package name:* <span id="package_label">{packages}</span></p>  
        {sended?<div className='alert alert-success'>Message Sent ! Thankyou for choosing Teju & Oju Alltours </div>:null}
        <form>
            <input type="hidden" name='package_name' value={packages}/>
            <div className="name">
              <label htmlFor="name"></label>
              <input type="text" placeholder="My name is*" value={name}  required onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="email">
              <label htmlFor="email"></label>
              <input type="email" placeholder="My e-mail is*" value={email}  required onChange={(e)=>setEmail(e.target.value)}/>
            </div>
 
            <div className="country">
              <label htmlFor="country"></label>
              <select type="select" required="1" placeholder="Choose a country*" value={country} onChange={(e)=>setCountry(e.target.value)}>
                <option defaultValue>My country is*</option>
                {countries.map((country)=>{
                  const {name,code} = country
                  return <option value={name} key={code}>{name}</option>

                    })}
              </select>
            </div>
            
            <div className='contact'>
              <label htmlFor="contact"></label>
              <input type="text" required placeholder="My Contact Number is*" value={contact} onChange={(e)=>setContact(e.target.value)} />
            </div>
                
          
            <div className="adult">
              <input type="number" maxLength="50" min="1" placeholder="Enter Number of Adults*" value={numberOfAdult}  required onChange={(e)=>setNumberOfAdult(e.target.value)}/>
            </div>
            <div className="children">
              <input type="number"  maxLength="50" placeholder="Enter Number of Children" value={numberOfChildren}  required onChange={(e)=>setNumberOfChildren(e.target.value)}/>
            </div>
           
        
            <input type="text" placeholder='Enquiry Subject' value={subject}  required onChange={(e)=>setSubject(e.target.value)} /><br />
            <textarea  rows="4" cols="50" placeholder='Enter Your Message*' value={message}  required onChange={(e)=>setMessage(e.target.value)}/><br />
            <button className='btn center' onClick={buttonPress}>Submit Form</button>
        </form>
        
        
    </Wrapper>
  )
}

const Wrapper = styled.main`
padding: 1rem;
h2 {
  color: #474544;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: 3px;
  text-align: center;
  text-transform: uppercase;
  
}
.underline {
  border-bottom: solid 2px #474544;
  margin: -0.512em auto auto ;
  width: 80px;
}
p{
    color: #474544;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 5px;
  text-align: center;
  text-transform: uppercase;
}

input[type='text'], [type='email'],[type='number'] ,select, textarea {
	background: none;
  border: none;
	border-bottom: solid 2px #474544;
	color: #474544;
	font-size: 1.000em;
  font-weight: 400;
  letter-spacing: 1px;
	margin: 0em 0 1.875em 0;
	padding: 0 0 0.875em 0;
  text-transform: uppercase;
	width: 100%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	-ms-box-sizing: border-box;
	-o-box-sizing: border-box;
	box-sizing: border-box;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}
input[type='text']:focus, [type='email']:focus, textarea:focus {
	outline: none;
	padding: 0 0 0.875em 0;
}
.name  {
	float: left;
	width: 45%;
}
.email {
	float: right;
	width: 45%;
}
.country{
    float: left;
    width: 45%;
}
.contact{
    float: right;
    width: 45%;
}
.adult{
    float: left;
    width: 45%;
}
.children{
    float: right;
    width: 45%;
}
button{
  background-color: #031a5b;
  color: white;
}
button:hover {
  background-color: #031aaf;
  color: white;
}
`


export default EnquiryForm