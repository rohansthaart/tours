import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return <Wrapper className='page-100'>
    <section>
    <h1>404</h1>
    <h3>Sorry, the page you tried cannot be found</h3>
    <Link to="/" className='btn'>
      Back home
    </Link>

    </section>
  </Wrapper>
}

const Wrapper = styled.main`
 font-family: 'Shadows Into Light', cursive;
  background: #031a5b;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  h1 {
    font-size: 15rem;
  }
  h3 {
    font-size: 3rem;
    text-transform: none;
    margin-bottom: 2rem;
  }
  .btn{
    color:white;
    font-size: 2rem;
  }
`

export default ErrorPage
