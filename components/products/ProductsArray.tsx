import React from 'react'
import ProductItem from './ProductItem'
import { Product } from '@/lib/models/ProductModel'

const ProductsArray = ({data} : {data : Product[]}) => {
  return (
    <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        {
          data.map((product,ind) => {
            return(
              <ProductItem product={product} key={ind}/>
            )
          })
        }
    </div> 
  )
}

export default ProductsArray