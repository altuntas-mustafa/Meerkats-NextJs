import { Inter } from 'next/font/google'
import styles from './page.module.css'
const contentful = require('contentful')


const inter = Inter({ subsets: ['latin'] })

const client = contentful.createClient({
  space: '9yj1xgb6zgkj',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'LD3cBN2QhxQwzRhvuBJihPMfUu5dQ2Qgde_u3flr8FM'
})
// const getData = async () => {
//   await client.getEntries()
//     .then((response: any) => {
//       console.log('hello', response.items[0].fields)
//       return response.items
//       })
//     .catch(console.error)
// }
const getData = async () => {
  try {
    const response = await client.getEntries()
    // console.log('hello', response.items[0].fields)
    return response.items[0].fields
  } catch (error) {
    console.error(error)
    return null
  }
}


export default async function Home() {
  const data : any = await getData()
  console.log(data.tShirt)
  return (
    <main>
      <h1>Products</h1>
      {/* {data.mug} */}
      <p>{JSON.stringify(data.mug)}</p>
      
    </main>
  )
}
