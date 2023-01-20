import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitar } from "~/models/guitars.server";


export async function loader({params}){

    const { guitarUrl } = params
    const guitar = await getGuitar(guitarUrl)

    if(guitar.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitar not found'
        })
    }


    return guitar
}

export function meta({data}){

    if(!data) {
        return{
            title: 'GuitarLA - Guitar not founded',
            description: `Guitars, online store , guitar not founded}`

        }
    }
    return {
        title: `GuitarLA - ${data.data[0].attributes.name}`,
        description: `Guitars, online store , model ${data.data[0].attributes.name}`
    }
}


function Guitar() {

    const {addToCart} = useOutletContext()
    const [cantidad, setCantidad ] = useState(0)
    const guitar = useLoaderData()
    const { name, description, image, price } = guitar.data[0].attributes

    
    

    const handleSubmit = e => {
        e.preventDefault();

        if(cantidad < 1) {
            alert('Quantity must be more than 0 ')
            return 
        }

        const selectedGuitar = {
            id: guitar.data[0].attributes,
            image: image.data.attributes.url,
            name,
            price,
            cantidad
        }
        addToCart(selectedGuitar)
    }
    return (
        <div className="guitarra">
            <img className="imagen" src={image.data.attributes.url} alt={`Guitar model ${name}`} />

            <div className="contenido">
                <h3>{name}</h3>
                <p className="texto">{description}</p>
                <p className="precio">$ {price}</p>

                <form onSubmit={handleSubmit} className="formulario">
                    <label htmlFor="cantidad"> Qty </label>

                    <select
                    onChange={ e => setCantidad(Number(e.target.value))} 
                    id="cantidad">
                        <option value="0"> -- Select -- </option>
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

                    <input
                        type="submit"
                        value='Add to cart'
                    />
                </form>
            </div>
        </div>
    )
}

export default Guitar