import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='py-4 w-4/5 mx-auto flex flex-row justify-center items-center'>
      <Link to='/users'>
        <p className=' font-sans font-semibold text-lg mr-10'>Users</p>
      </Link>
      <Link to='/products'>
        <p className=' font-sans font-semibold text-lg'>Products</p>
      </Link> 
    </div>
  )
}

export default Header;