import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <ul style={{listStyle:'none'}}>
        <li style={{textDecoration:'none'}}><NavLink to ='/about'> About Us </NavLink></li>
        <li style={{textDecoration:'none'}}><NavLink to ='/contact'>Contact Us</NavLink></li>
        <li style={{textDecoration:'none'}}><NavLink to ='/github'>Github</NavLink></li>
    </ul>
  )
}
