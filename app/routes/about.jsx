import image from '../../public/img/nosotros.jpg'
import styles from '~/styles/about.css'

export function meta(){
  return {
    title: 'GuitarLA - About us ',
    description: 'Guitar online store, music blog'
  }
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ]
}

function About() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading"> About us </h2>
      <div className="contenido">
        <img src={image} alt='about us logo'/>

        <div>
          <p>With an illustrious history dating back to 1946, Fender has touched and transformed music worldwide and in nearly every genre: rock n roll, country and western, jazz, rhythm and blues and many others.

            Everyone from beginners and hobbyists to the worlds most acclaimed artists and performers have used Fender instruments and amps, in the process making the company not only a revered music industry name, but also a cultural icon.
          </p>
          <p>
          It is our vision to continue championing THE SPIRIT OF ROCK-N-ROLL® throughout the world and our mission to exceed the expectations of music enthusiasts worldwide.

          </p>

          <p>
          

            In 1951, we wanted to liberate musicians from the confines of the upright bass. And we did it by introducing a brand-new instrument with a bold, new sound. That instrument was the Precision Bass®, a name that would not only become synonymous with rock ‘n’ roll, but also shape its very being. As time went on, we created new instruments to cater to a new, evolving type of musician: the electric bassist. Each one was and still is a driving force behind the greatest moment in music—of every era, of every genre. Period.
          </p>
        </div>
      </div>

    </main>
  )
}

export default About