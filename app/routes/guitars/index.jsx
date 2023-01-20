import { useLoaderData } from "@remix-run/react";
import {getGuitars} from '~/models/guitars.server'
import GuitarList from "~/components/guitarList";


export function meta(){
  return{
    title: 'GuitarLA - Online store',
    description: 'GuitarLA - Our collection of awesome guitars'
  }
}



export async function loader() {
  const guitars = await getGuitars()
  return guitars.data

}



function Store() {
  const guitars = useLoaderData()
  
  return (
      <GuitarList
        guitars={guitars}
      />
  )
}

export default Store 