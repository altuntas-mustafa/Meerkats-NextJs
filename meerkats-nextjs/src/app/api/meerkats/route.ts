const contentful = require('contentful')

export async function GET(request: Request) {


  const client = contentful.createClient({
    space: '9yj1xgb6zgkj',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'LD3cBN2QhxQwzRhvuBJihPMfUu5dQ2Qgde_u3flr8FM'
  })

  const data = await client.getEntries()
    .then((response: any) => {
      console.log(response.items)
      return response.items
      })
    .catch(console.error)
  console.log("data", data[0].fields);
  return new Response('Hello, meerkats.js!')



}

