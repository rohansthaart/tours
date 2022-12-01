import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo.svg' 

import { Categorys } from '../utils/data'

function Navbar() {
 
 
  const navigate = useNavigate();
  
  return (
      <Wrapper>
       <div className='container'>
    <nav className="navbar navbar-expand-md navbar-light bg-light">
    <Link className="navbar-brand pb-2" to="/"><img src={logo} alt="teju and oju logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
           
            
            <li className="nav-item" >
                <Link className="nav-link" to="/">HOME</Link>
            </li>
            
    {Categorys.map((category,index)=>(
         <li className="nav-item dropdown" key={index}>
         <a className="nav-link dropdown-toggle" href onClick={()=>navigate('/category/'+category.category)} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {category.category} </a>
         <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
             {category.subCategorys.map((sub,i)=>{
                  return <li key={i} className='dropdown-item' onClick={()=>navigate('/category/subCategory/'+sub.subCategory)}>{sub.subCategory}</li>
             })}
             
            
         </ul>
     </li>
    ))}
    <li className="nav-item">
            <Link className='nav-link' to="/tours/634fa5b08f1b08f563636268">Adventure</Link>
            </li> 

         <li className="nav-item">
            <Link className='nav-link' to="/category/Kailash%20Mansarovar">Kailash Mansarovar</Link>
            </li>   
           
            <li className="nav-item">
            <Link className='nav-link' to="/category/Buddhist%20Pilgrimage">Buddhist Pilgrimage</Link>
            </li> 
            
            <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT US</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contact">CONTACT</a>
            </li>
        </ul>
    </div>
</nav>
</div>
</Wrapper>
  )
}

const Wrapper = styled.main`
    .navbar-nav li:hover > ul.dropdown-menu {
    display: block;
}
.dropdown-submenu {
    position:relative;
}
.dropdown-submenu > .dropdown-menu {
    top: 0;
    left: 100%;
    margin-top:-6px;
}

/* rotate caret on hover */
.dropdown-menu > li > a:hover:after {
    text-decoration: underline;
    transform: rotate(-90deg);
} 

`

export default Navbar