import { useLoaderData } from "@remix-run/react";
import {getGuitars} from '~/models/guitars.server'
import {getPosts} from '~/models/post.server'
import {getCourse} from '~/models/course.server'

import GuitarList from "~/components/guitarList";
import PostLits from '~/components/postList'
import Course from '~/components/course'

import stylesGuitars from '~/styles/guitars.css'
import stylesPosts from '~/styles/blog.css'
import stylesCourses from '~/styles/course.css'

export function meta(){
  
}
export function links(){
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitars
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCourses
    }
  ]
}

export async function loader(){

  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse()
  ])

  
  return  {

    guitars: guitars.data,
    posts: posts.data,
    course: course.data
  }
}

function Index() {

  const {guitars, posts, course } = useLoaderData()
 
  return (
    <>

      <main className="contenedor">
        <GuitarList
          guitars={guitars}
        />

      <Course
        course={course.attributes}
      />
      <section className="contenedor">
          <PostLits
            posts={posts}
          />
      </section>
        
      </main>

      
    </>
  )
}

export default Index