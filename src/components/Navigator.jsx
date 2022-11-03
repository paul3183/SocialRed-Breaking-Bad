import React from 'react';
import {Link, Outlet} from 'react-router-dom'

const Navigator = () => {
  return (
    <div className='content-page'>
     <nav className='navigator'>
      <Link to='/Home'>Home</Link>
      <Link to='/Profile'>Profile</Link>
     </nav>
     <Outlet/>
    </div>
  );
};

export default Navigator;