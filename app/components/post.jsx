import { Link } from "react-router-dom"
import { formatDate } from "~/utils/helpers";

export default function Post({post}) {
    const {content, title, url, publishedAt, image } = post.attributes
   
    return (
        <article className="post">
            <img className="imagen" src={image.data.attributes.formats.small.url} alt={`blog imagen ${title}`}/>
            <div className="contenido">
                <h3>{title}</h3>
                <p className="fecha">{formatDate(publishedAt)}</p>
                <p className="resumen">{content}</p>
                <Link className="enlace" to={`/blog/${url}`}>Read article</Link>
            </div>
        </article>
  )
}

