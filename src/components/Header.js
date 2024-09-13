import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
export default function Header() {
  return (
    <div>
      <ul classname='nav'>
<li classname='prod'>
<Link to='/'>Home Page</Link>
</li>
<li classname='prod1'>
<Link to='/cart'>Cart</Link>
</li>
      </ul>
    </div>
  )
}
