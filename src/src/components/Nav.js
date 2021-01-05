import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link to='/'>Hot Now</Link>
      </ul>
      <ul>
        <Link to='/pizzas'>Pizzas</Link>
      </ul>
      <ul>
        <Link to='/'>LOGO</Link>
      </ul>
      <ul>
        <Link to='/slicemasters'>SliceMasters</Link>
      </ul>
      <ul>
        <Link to='/orders'>Order Ahead!</Link>
      </ul>
    </nav>
  )
}
