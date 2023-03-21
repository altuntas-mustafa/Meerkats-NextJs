"use client"

import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/router";
const contentful = require("contentful");


export default async function Product() {
  const router = useRouter();
  console.log('hey', router.query);
  // const {item, price, quantity, description} = router.query
  return (
    <>
      <main>
       {/* <p>{item}</p> */}
      </main>
    </>
  );
}
