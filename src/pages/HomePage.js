import React, { useEffect } from 'react'
import TopCarousal from '../../src/components/TopCarousal'
import Specification from '../../src/components/Specification'
import Tours from '../../src/components/Tours'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


function HomePage() {

  useEffect(()=>{
    document.title="Teju and Oju Alltours"
  })


  return (
    <>
      <Navbar/>
        <TopCarousal/>
        <Specification/>
      
        <Tours/>
       
            <Link className='btn center' to="/tours" style={{backgroundColor:"#031a5b",color:"white"}}>View All</Link>
        
    </>
  )
}

export default HomePage