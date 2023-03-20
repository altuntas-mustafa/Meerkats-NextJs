import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
const contentful = require("contentful");

const inter = Inter({ subsets: ["latin"] });

const client = contentful.createClient({
  space: "9yj1xgb6zgkj",
  environment: "master", // defaults to 'master' if not set
  accessToken: "LD3cBN2QhxQwzRhvuBJihPMfUu5dQ2Qgde_u3flr8FM",
});
const getData = async () => {
  await client
    .getEntries()
    .then((response: any) => {
      console.log("", response.items);
      const data = response;
      return data.items;
    })
    .catch(console.error);
};

export default async function Home() {
  console.log("hello");
  const data: any = await getData();
  return (
    <main>
      <h1>Products</h1>
      <p>{JSON.stringify(data)}</p>
    </main>
  );
}
