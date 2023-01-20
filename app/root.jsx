import { useState, useEffect } from "react"
import { Meta, Links , Outlet, Scripts, LiveReload, useCatch, Link} from "@remix-run/react"
import styles from './styles/index.css'
import Header from "./components/header"
import Footer from "./components/footer"


export function meta () {
    return (
        {
            
            title: 'GuitarLA - Remix',
            viewport: 'width=device-width,initial-scale=1',
            description: "Small project using remix "
        }
    )
}


export function links(){
    return[
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'hhttps://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export default function App() {
    const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : null// We try to pull out from local storage the cart , if there is no cart  with ?? we asigned [] to it so it does not go undefined 
    const [cart, setCart] = useState(cartLS)

    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(cart))

    }, [cart])
    
    const addToCart = (selectedGuitar) => {
        // adding item that is in cart already
        if(cart.some(guitarState => guitarState.id === selectedGuitar.id)) {
            
            const cartUpdated = cart.map( guitarState => {
                if(guitarState.id === selectedGuitar.id ){
                    // Rewrite qty 
                    guitarState.cantidad += selectedGuitar.cantidad
                }
                return guitarState
            })
            // add to cart 
            setCart(cartUpdated)
        } else{
            //New item added to cart 
            setCart([...cart, selectedGuitar])
        }
        
    }
    
    const updateQty = guitar => {
        const cartUpdated = cart.map( guitarStates => {
            if(guitarStates.id === guitar.id) {
                guitarStates.cantidad = guitar.cantidad
            }
            return guitarStates
        })
        setCart(cartUpdated)
        
    }

    const deleteGuitar = id => {
        const cartUpdated = cart.filter( guitarState => guitarState.id !== id)
        setCart(cartUpdated)
    }

    return(
        <Document>
            <Outlet
                context={{
                    addToCart,
                    cart,
                    updateQty,
                    deleteGuitar
                }}
            />
        </Document>
    )
}

// Se llama document o layout  esta funcion toma un children para renderizar todos los componentes del HTML 
// esa funcion la podemos consumir en la app principal renderizando como componente , Lo que este dentro de este se pasa como el children 
function Document({children}) { 
    return (
        <html lang="en-us">
            <head>
                <Meta/>
                <Links/>
            </head> 
            <body>
                <Header/>
                {children}
                
                    
                <Footer/>

                <Scripts/>
                <LiveReload/>

                
            </body>
        </html>
    )
}

/** Error Handling  */
export function CatchBoundary(){
    const error = useCatch()

    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="error-enlace" to='/'>Go back to the main page!</Link>
        </Document>
    )
}

export function ErrorBoundary(error){
    return (
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="error-enlace" to='/'>Go back to the main page!</Link>
        </Document>
    )
}