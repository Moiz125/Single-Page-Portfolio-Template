import React from 'react';
import Box from './Box';
// import image1 from '../images/s1.png';
// import image2 from '../images/s2.png';
import vue from '../images/vue.png';
import react from '../images/react.png';
import django from '../images/django.png';
import solidity from '../images/solidity.png';

const Services = () => {
  return (
    <div id='services'>
        <div className='s-heading'>
            <h1>Services</h1>
            <p>Here are some Services I provide</p>
        </div>
        <div className='b-container'>
            <Box image={react} alte={react} button='REACT JS' text='React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.'/>
            <Box image={solidity} alte={solidity} button='SOLIDITY' text='Solidity is an object-oriented programming language for implementing smart contracts on various blockchain platforms, most notably, Ethereum. It was developed by Christian Reitwiessner, Alex Beregszaszi, and several former Ethereum core contributors. Programs in Solidity run on Ethereum Virtual Machine'/>
            <Box image={vue} alte={vue} button='VUE JS' text='Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members'/>
        </div>
        <div className='b-container'>
            
            <Box image={django} alte={django} button='DJANGO' text='Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern. It is maintained by the Django Software Foundation, an independent organization established in the US as a 501 non-profit'/>
        </div>
    </div>
  )
}

export default Services;