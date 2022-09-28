import React from 'react'
import logo from '../assets/logo.svg' 
import {Link} from 'react-router-dom'
import {navbarData} from '../utils/data'
import "./component.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbars() {
  return (
    
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="teju and oju logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
                    {navbarData.map((data)=>{
                        const {id,title,subTitles,url} = data;
                        if(subTitles){
                            return <NavDropdown title={title} className="" id="basic-nav-dropdown">
                            {subTitles.map((subTitl)=>{
                                const {subTitle,subSubTitles} = subTitl
                                if(subSubTitles){
                                    subSubTitles.map((subSub)=>{})
                                }
                                if(!subSubTitles){
                                    
                                    return <NavDropdown.Item href="#action/3.1">{subTitle}</NavDropdown.Item>
                                }

                            })}
                            
                          </NavDropdown>

                        }
                        if(!subTitles){
                            return <Nav.Link href="">{title} </Nav.Link>
                            
                        }
                    })}
                
           
         
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  )
}

export default Navbars