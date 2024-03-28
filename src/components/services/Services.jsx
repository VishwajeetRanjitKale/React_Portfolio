import React from 'react'
import './services.css'
import MINAL from '../../assets/vishwak.png'
import CER from '../../assets/cer.jpg'



const Services = () => {
  return (
    <section id='services'>
      <h2>My Certificates</h2>



      
      <div className='certificates'>

        <div className='block'>
          <a href={MINAL} target="_blank" rel="noreferrer">
            <img width="220" height="250" border="0" align="center"  alt="" src={MINAL} className='indivi-cert'/>
            <div className='title'>title</div>
          </a>
        </div>

        <div className='block'>
          <a href={CER} target="_blank" rel="noreferrer">
            <img width="220" height="250" border="0" align="center"  alt="" src={CER} className='indivi-cert'/>
            <div className='title'>Python Fundamentals for Beginners</div>
          </a>
        </div>

        <div className='block'>
          <a href={MINAL} target="_blank" rel="noreferrer">
            <img width="220" height="250" border="0" align="center"  alt="" src={MINAL} className='indivi-cert'/>
            <div className='title'>title</div>
          </a>
        </div>

        

        
      

  </div>

      
      
      


      

    


      


      

      
      

  
    </section>
  )
}

export default Services