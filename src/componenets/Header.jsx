import React from 'react'
import NavBar from './NavBar';

const Header = () => {
  return (
    <div id='main'>
        <NavBar />
        <div className='name'>
            <h1> It's a <span>ReactJs</span> Website</h1>
            <p className='details'>Most Calanders are designed for teams. This is
            designed for freelancers who want a simple way to plan their schools</p>
            <div className='header-btns'>
                <a href='#' className='cv-btn'>Hire me</a>
                <a href='#' className='cv-btn1'>Download App</a>
            </div>
        </div>
        <div className='arrow'></div>
    </div>
  )
}

export default Header;