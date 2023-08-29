import React from 'react'
import { Link , Outlet} from 'react-router-dom'

function Products() {
  return (
    <>
    <input type="search" placeholder='Search For Products'/>
    <nav>
      <Link to="featured">Featured</Link>
      <Link to="new">new</Link>
    </nav>
    <Outlet/>
    </>
  )
}

export default Products