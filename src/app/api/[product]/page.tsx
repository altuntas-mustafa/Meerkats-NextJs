"use client"

import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
const contentful = require("contentful");


export default function Product() {
  const searchParams = useSearchParams();
  const item = searchParams.get('item')
  const quantity = searchParams.get('quantity')
  const price = searchParams.get('price')
  const description = searchParams.get('description')

  return (
    <>
      <main>
      <h1>{item}</h1>
      <p>Quantity: {quantity}</p>
      <p>{price}€</p>
      <p>Description: {description}</p>
      </main>
    </>
  );
}
