import React from 'react';
import featureimage from '../images/Frame 19.png';
const Features = () => {
  return (
    <>
    <div className='f-heading'>
        <h1>Features</h1>
        <p>Here are some features of the Software</p>
    </div>
    <div id='features'>
        <div className='features-model'>
            <img src={featureimage} alt='feature-image'/>
        </div>
        <div className='features-text'>
            <h2>Features</h2>
            <h3>This Application <span>Software</span> is Art</h3>
            <p>React is a JavaScript library developed by Facebook that has revolutionized the way we think about apps. Borrowing ideas from declarative, reactive, and functional programming, it makes developing highly interactive user interfaces a breeze..</p>
            <button>View More Features</button>
        </div>
    </div>

    </>
  )
}

export default Features