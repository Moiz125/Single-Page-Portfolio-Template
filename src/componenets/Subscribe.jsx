 import React from 'react';
 import email from '../images/email.png';
 import program from '../images/program.png';
 
 const Subscribe = () => {
   return (
    <>
    
      <div id='subscribe'>
      <div className="program">
      <img src={program} alt='program'/>
        </div>
        <h3>Subscribe</h3>
        <div className='subscribe-input'>
          <div className="email">
            <img src={email} alt='email'/>
            </div>
          <input type='email' placeholder='typography@gmail.com'/>
          <a href='#'>Continue</a>
        </div>
      </div>
    </>
     
   )
 }
 
 export default Subscribe;