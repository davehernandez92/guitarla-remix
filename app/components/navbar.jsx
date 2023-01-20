import { Link, useLocation } from "@remix-run/react"
import cartImg from '../../public/img/carrito.png'

function Navbar() {

    const location = useLocation()
    return (
        <nav className="navegacion">
            <Link
                to='/'
                className={location.pathname === '/' ? 'active' : ''}
            >
                Home </Link>
            <Link
                to='/about'
                className={location.pathname === '/about' ? 'active' : ''}
            >
                About </Link>
            <Link
                to='/guitars'
                className={location.pathname === '/guitars' ? 'active' : ''}
            >
                Store </Link>
            <Link
                to='/blog'
                className={location.pathname === '/blog' ? 'active' : ''}
            >
                Blog 
            </Link>
            <Link
                to='/checkout'
            >
                <img src={cartImg} alt='shopping cart'/>
            </Link>

        </nav>
  )
}

export default Navbar