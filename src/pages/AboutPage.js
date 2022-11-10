import React, { useEffect } from 'react'
 import PageHero from '../../src/components/PageHero'
 import '../index.css'
function AboutPage() {
  useEffect(()=>{
    document.title = "About Us"
  })
  return (
    <div className=''>
        <PageHero title='About Us'/>
      <div className='container'>
        <h3 className=' about-heading'>“We travel, initially, to lose ourselves; and we travel, next to find 
ourselves”</h3>
<p className='about-content'>We, at ‘Teju & Oju All Tours Pvt.Ltd’, swear by this and put stock in satisfying travel dreams that
make you perpetually rich constantly.
Teju & Oju All Tours Pvt.Ltd is a full service travel, tour operator and destination 
management company which offers a wide array of services to cater the needs of travel 
connoisseurs.
We put forward unique solutions, paying careful attention to each client’s individual needs – 
to deliver a successful and memorable trip that is reliable, safe, affordable and enjoyable for
all clients.
Our Inbound Department specializes on top tourist destinations in Nepal  that include 
Kathmandu, Pokhara, Chitwan, Everest Region, Annapurna Region and many more.
Our Outbound Department handles top brands worldwide and a preferred sales agent for 
several companies and ground operators such as Royal Orbit, Royal Air.
Our MICE team can conceptualize theme events based on the client’s objective for 
meetings, incentive travel and conference programs and events. We professionally 
arranged and managed many company trips that exceeded our clients’ expectations.</p>
<h3 className='about-heading'>Mission</h3>
<p className='about-content'>Teju and Oju All Tours Pvt.Ltd is composed of a dynamic, passionate, dedicated and fun-
loving team.
We aspire to be the Nepal’s’ premiere full service travel company focused on creating and 
providing quality, valuable, efficient, innovative, reliable travel related services to clients’ 
best management of its technological and human resources.
We also deliver total client satisfaction through integrity, excellence, passion, teamwork that
will contribute to economic strength and sustainable tourism.
In respect, we will conduct our operations prudently and will provide profits and growth 
which will assure our ultimate success.</p>
<h3 className='about-heading'>Vision</h3>
<p className='about-content'>Our vision is to empower our employees to deliver total client satisfaction and best travel 
experience.</p>
      </div>
    </div>
  )
}

export default AboutPage