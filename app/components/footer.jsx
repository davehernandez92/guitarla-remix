import Navbar from "./navbar"

function Footer() {
  return (
    <footer className="footer">
        <div className="contenedor contenido">
            <Navbar/>

            <p className="copywrite">All rights reserved {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer