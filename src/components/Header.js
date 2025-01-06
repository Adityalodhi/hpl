import React from 'react';
import logo from './images/hostellogo.jpg'
import logo2 from './images/HPL.png'

const Header = () => {
  return (
    <header className="App-header">
        <div className='mainlogo'>
            <img className='logoI' src={logo} alt="" />
            <img className='logo2' src={logo2} alt="" />

        </div>
      <h1>Boy's Hostel Presents</h1>
    </header>
  );
};

export default Header;

