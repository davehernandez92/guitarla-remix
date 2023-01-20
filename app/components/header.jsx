import { Link } from "@remix-run/react"
import Navbar from "./navbar"
import logo from '../../public/img/logo.svg'

function Header() {

  

  return (
    <div className="header">
      <div className="contenedor barra">
        <Link to='/'>
          <img className="logo" src={logo} alt='Imagen de Logo'/>

        </Link>
        <Navbar/>
        
      </div>
    </div>
  )
}

export default Header