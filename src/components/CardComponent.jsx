import React from 'react'

function CardComponent({products,setProducts,el}) {
  return (
    <div className='w-[250px] h-[350px] flex flex-col justify-center items-center'>
        <h2>{el.title}</h2>
        <img src={el.thumbnail} className='w-[250px] h-{250px}' alt="" />
        <p>{el.description.substring(0,60)}</p>
    </div>
  )
}

export default CardComponent