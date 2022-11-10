import React from 'react'
import './component.css'
import { Link } from 'react-router-dom'
function PageHero({title,tours,head}) {
  return (
    <div className="wrapper">
        <div className="section-center">

      <h3>
        <Link to='/'>Home</Link>
        
         <Link to='/tours'>{tours?`/ tours`:`/ ${head}`}</Link> {title?`/ ${title}`: null}
      </h3>
        </div>
    </div>
  )
}

export default PageHero