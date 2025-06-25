import React from 'react';


const Card = (props) => {

  return (
    <div className='flex gap-1 sm:flex sm:flex-col'>
        <img src={props.img} className='h-20 w-20' alt="product-img" />
        <div>
          <h2 className='font-medium text-2xl mt-2'>{props.heading}</h2>
          <p className='text-gray-500 mt-1'>{props.desc}</p>
        </div>
    </div>
  )
}

export default Card;