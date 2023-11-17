import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './Product'
import * as echarts from 'echarts';

export const Shop = () => {
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