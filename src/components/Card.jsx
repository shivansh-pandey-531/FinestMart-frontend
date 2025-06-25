import React from 'react';


const Card = (props) => {

  return (
    <div className='flex flex-col'>
        <img src={props.img} className='h-20 w-20' alt="product-img" />
        <h2 className='font-medium text-2xl mt-2'>{props.heading}</h2>
        <p className='text-gray-500 mt-1'>{props.desc}</p>
    </div>
  )
}

export default Card;