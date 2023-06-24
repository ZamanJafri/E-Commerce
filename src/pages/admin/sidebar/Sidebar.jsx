import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <ul className='list-group'>
        <li className='list-group-item active'>
          <h5 className='text-center'>
            <i>Dashboard</i>
          </h5>
        </li>
        <li className='list-group-item'>
          <Link to=''>Profile </Link>
        </li>
        <li className='list-group-item'>
          <Link to='/admin/orders'>Orders </Link>
        </li>
        <li className='list-group-item'>
        <Link to='/admin/product'>Product </Link>
          </li>
        <li className='list-group-item'>
        <Link to='/admin/category'>Category</Link>
          </li>
        <li className='list-group-item'>
        <Link to='/admin/users'>User </Link>
          </li>
      </ul>
    </>
  )
}

export default Sidebar
