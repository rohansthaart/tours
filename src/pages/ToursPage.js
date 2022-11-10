import React,{useEffect} from 'react'
import Tours from '../../src/components/Tours'
import styled from 'styled-components'
import PageHero from '../components/PageHero'

function ToursPage() {

  useEffect(()=>{
    document.title = "Tours"
  })
  return (
    <Wrapper>
      <PageHero tours="true"/>
    <h2>All Available Tours Destination</h2>
        <Tours />
    
    </Wrapper>
      )
}

const Wrapper = styled.main`
 h2{
    text-align: center ;
 }

`
export default ToursPage