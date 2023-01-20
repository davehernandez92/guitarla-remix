import { useEffect,useState } from "react"
import { useOutletContext } from "@remix-run/react"
import { ClientOnly} from "remix-utils"
import styles from "../styles/checkout.css"

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}
export function meta () {
    return {
        title: 'GuitarLA - Checkout',
        description: 'Guitar Online Store, music, blog, checkout summary, store'
    }
}

export default function Checkout() {
    const [ total, setTotal] = useState(0)
    const { cart, updateQty, deleteGuitar } = useOutletContext();

    useEffect(() => {
      const calcTotal = cart.reduce( (total, guitarCart ) => total + (guitarCart.cantidad * guitarCart.price), 0)
      setTotal(calcTotal)
    }, [cart])
    
    
  return (
    <ClientOnly fallback={'Loading...'}>
        {() => (
        <main className="contenedor">
            <h1 className="heading"> Chekout </h1>

            <div className="contenido">

                <div className="carrito">
                    <h2>Items</h2>

                    {cart?.length === 0 ? 'Empty cart ' : (
                        cart?.map( product => (
                            <div key={product.id} className='producto' >
                                <div>
                                    <img src={product.image} alt={`Product ${product.name} Guitar `}/>
                                </div>

                                <div>
                                    <p className="nombre">{product.name}</p>
                                    <p >Qty: 

                                        <select className="select"
                                            value={product.cantidad}
                                            onChange={e => updateQty({
                                                cantidad: +e.target.value,
                                                id: product.id
                                            })}

                                        >
                                            <option value="1"> 1 </option>
                                            <option value="2"> 2 </option>
                                            <option value="3"> 3 </option>
                                            <option value="4"> 4 </option>
                                            <option value="5"> 5 </option>
                                            <option value="6"> 6 </option>
                                            <option value="7"> 7 </option>
                                            <option value="8"> 8 </option>
                                            <option value="9"> 9 </option>
                                            <option value="10"> 10 </option>

                                        </select>
                                    
                                    
                                    </p>

                                    <p className="precio"><span> $ {product.price}</span></p>
                                    <p className="subtotal">Subtotal: $ <span>{product.cantidad * product.price}</span></p>

                                    
                                </div>

                                <button
                                type="button"
                                className="btn_eliminar"
                                onClick={ () => deleteGuitar(product.id)}
                                >X</button>
                                
                            </div>
                        ))
                    )}
                </div>

                <aside className="resumen">
                    <h3>Order Summary</h3>
                    <p>Your total is: ${total}</p>
                </aside>

            </div>

        </main>
        )}
    </ClientOnly>
  )
}
