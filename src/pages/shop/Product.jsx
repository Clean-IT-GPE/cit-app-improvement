import React from 'react'

export const Product = (props) => {
    const { id, name, price, image } = props.data;
  return (
    <div className='flex flex-col m-20 items-center'>
        
        <img loading='lazy' className="w-[400px] transition-all duration-75 ease-in 
        hover:w-[500px] flex justify-center items-center"  src={image} />
        <div className="flex justify-center">{name}</div>
        <div className="flex justify-center">{price}</div>
    </div>
  )
}
