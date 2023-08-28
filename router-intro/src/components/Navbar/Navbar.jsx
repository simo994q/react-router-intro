import { Link, NavLink } from 'react-router-dom'
import style from './Navbar.module.scss'
import { useEffect } from 'react'

export function Navbar() {

    const linksArray = [
        { url: '/', page: 'Home'},
        { url: '/about', page: 'About'},
        { url: '/contact', page: 'Contact'},
        { url: '/store', page: 'Store'}
    ]

    return (
        <div className={style.navbarContainer}>
            <ul>
                {linksArray.map((item, index) => {
                    return (
                        <li key={index}><NavLink to={item.url} className={style.navbarLink} style={({ isActive }) => {
                            return {
                                borderBottom: isActive ? "2px solid blue" : "",
                                color: isActive ? 'blue' : 'black'
                            };
                        }}>{item.page}</NavLink></li>
                    )
                })}
            </ul>
        </div>
    )
}