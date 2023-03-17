import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <ul className='list'>
            <li>
                <Link className='link' to={"/"}>Home</Link>
            </li>

            <li>
                <Link className='link' to={"/about"}>About</Link>
            </li>
            <li>
                <Link className='link' to={"/users"}>Users</Link>
            </li>
            <li>
                <Link className='link' to={"/todos"}>Todos</Link>
            </li>
        </ul>
    </div>
  )
}
