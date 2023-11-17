import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './Product'
import {Cpu} from 'phosphor-react'

function badRules() {
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; i++) {
      let test =  i + j
      for (let k = 0; k < 100; k++) {
        test = test + k
      }
    }
  }
  console.log('badRules : ' + test)
}

export const Shop = () => {
  badRules()
  return (
    <>
      <h1 className='mb-4 text-4xl font-extrabold leading-none font-custom tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
        AnthoTech Shop
      </h1>
        {PRODUCTS.map((product) => (
                <Product data={product}/>
                ))}
      {Array.from({length: 100}, (_, i) => i + 400).map((num) => (
        <img loading='lazy' src={`https://placekitten.com/${num}/${num}`} width='400' height='400' alt='' />
      ))}
    </>
  )
}