import { useLoaderData } from "@remix-run/react"
import PostList from '~/components/postList.jsx'
import { getPosts } from "~/models/post.server"


export function meta() {
  return {
    title: 'GuitarLA - Our Blog',
    description: 'GuitarLa, Music Blog and online store'
  }
}

export async function loader(){
  const posts = await getPosts()
  return posts.data
}

function Blog() {
  const posts = useLoaderData()

  return (
    <PostList
        posts={posts}
    />
   
  )
}

export default Blog