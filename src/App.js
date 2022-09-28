import TopCarousel  from './components/TopCarousal';
import React from 'react'
import Navbars from './components/Navbar'
import Specification from './components/Specification';
import Feautred from './components/Feautred';
import Tours from './components/Tours';
import Footer from './components/Footer'
function App() {
  return (<>
  
  <Navbars/>
  <TopCarousel/>
<Specification/>
<Feautred/>
<Tours/>
<Footer/>
  </>
  );
}

export default App;
