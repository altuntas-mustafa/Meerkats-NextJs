import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from './page.module.css'
const contentful = require('contentful')


const inter = Inter({ subsets: ['latin'] })

const client = contentful.createClient({
  space: '9yj1xgb6zgkj',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'LD3cBN2QhxQwzRhvuBJihPMfUu5dQ2Qgde_u3flr8FM'
})

const getData = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'goodies'
    })
    // console.log('hello', response.items[0].fields)
    return response.items
  } catch (error) {
    console.error(error)
    return null
  }
}



export default async function Home() {
  const data : any = await getData()
  return (
    <main>
      <>
      <h1>Products</h1>
      {data.map((product:any, index:number)=>{ 
      return <li key={index}>
        <Link href={`/api/${product.fields.item}`}>{product.fields.item}</Link>
        </li>
        // return <p>{item.fields.item}</p>
      })}

      </>
       
    </main>
  )
}
