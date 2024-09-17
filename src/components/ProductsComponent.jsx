import React, { useEffect, useState } from 'react'
import ProductService from '../services/ProductService'
import CardComponent from './CardComponent'

function ProductsComponent() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        ProductService.getAllProduct()
        .then(res=>setProducts(res.data.products)
        .catch(err=>console.log(err)        )
        )
    },[])
  return (
    
    <div className='flex flex-wrap gap-10 justify-center items-center my-5'>
        {products.map((el,i)=>{
            return <CardComponent products={products} setProducts={setProducts} el={el}/>     
               })}

    </div>

  )
}

export default ProductsComponent