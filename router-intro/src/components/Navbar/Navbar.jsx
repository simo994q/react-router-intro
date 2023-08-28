import { Link } from 'react-router-dom'
import style from './Navbar.module.scss'

export function Navbar() {

    const linksArray = [
        {url: '/', page: 'Home'},
        {url: '/about', page: 'About'},
        {url: '/contact', page: 'Contact'},
        {url: '/store', page: 'Store'}
    ]

    return (
        <div className={style.navbarContainer}>
            <ul>
                {linksArray.map(item => {
                    return (
                        <li><Link to={item.url} className={style.navbarLink}>{item.page}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}