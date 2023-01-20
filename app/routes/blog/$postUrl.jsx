import { useLoaderData } from "@remix-run/react"
import { getPost } from "~/models/post.server"
import { formatDate } from "~/utils/helpers"


export async function loader({params}) {
    const { postUrl } = params
    const post = await getPost(postUrl)
    
    if(post.data.length === 0 ) {
        throw new Response('', {
            status: 404,
            statusText: 'Article not found!'
        })
    }
    return post
}

export function meta({data}){

    if(!data) {
        return{
            title: 'GuitarLA - Post not founded',
            description: `Music Blog, online store , guitar not founded}`

        }
    }
    return {
        title: `GuitarLA - ${data.data[0].attributes.title}`,
        description: `Music Blog, online store , Article ${data.data[0].attributes.title}`
    }
}


export default function Post() {

    const post = useLoaderData()
    const {title, content, image, publishedAt} = post.data[0].attributes
  return (
    <article className="post mt-3">
            <img className="imagen" src={image.data.attributes.url} alt={`blog imagen ${title}`}/>
            <div className="contenido">
                <h3>{title}</h3>
                <p className="fecha">{formatDate(publishedAt)}</p>
                <p className="texto" >{content}</p>
            </div>
    </article>
  )
}
