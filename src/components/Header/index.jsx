import React from "react"
import cls from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const navs = [
    {
        title: 'All',
        to: '/',
        id: 1,
    },
    {
        title: 'Africa',
        to: '/africa',
        id: 2,
    },
    {
        title: 'Americas',
        to: '/americas',
        id: 3,
    },
    {
        title: 'Europe',
        to: '/europe',
        id: 4,
    },
    {
        title: 'Asia',
        to: '/asia',
        id: 5,
    },
]
    
const Header = () => {
    return (
        <div className={cls.container}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/UN_emblem_blue.svg/2411px-UN_emblem_blue.svg.png" alt="" />
              <div>
              <h1>UNITED NATIONS COUNTRIES</h1>
              </div>
                <nav className={cls.root}>
                    <ul>
                       {
                            navs.map(( { title, to, id } ) => (
                                <li key={id}>
                                    <NavLink 
                                        to={to}
                                        className={({ isActive }) => {
                                        return isActive ? cls.active : null
                                    }}
                                    >{title}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
        </div>
    )
}

export default Header
