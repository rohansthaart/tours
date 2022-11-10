import React from 'react'

import { BrowserRouter , Routes, Route } from 'react-router-dom'
import {Home,About,SingleTour,Error,Tours, Entry, Query,Category,SubCategory} from './pages'
import Footer from './components/Footer'
import Test from './components/test'

function App() {
  return (
    <BrowserRouter>
    <Test/>
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path = "/tours/:id" element={<SingleTour/>}/>
        <Route exact path='/tours' element={<Tours/>}/>
        <Route exact path='/entry' element={<Entry/>}/>
        <Route exact path='/query' element={<Query/>}/>
        <Route exact path="/category/:categoryName" element={<Category/>} />
        <Route exact path="/category/subCategory/:name" element={<SubCategory/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  


  );
}

export default App;
