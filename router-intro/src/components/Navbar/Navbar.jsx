import { Link } from 'react-router-dom'
import style from './Navbar.module.scss'

export function Navbar() {
    return (
        <div className={style.navbarContainer}>
            <ul>
                <li><Link to='/' className={style.navbarLink}>Home</Link></li>
                <li><Link to='/about' className={style.navbarLink}>About</Link></li>
                <li><Link to='/contact' className={style.navbarLink}>Contact</Link></li>
            </ul>
        </div>
    )
}