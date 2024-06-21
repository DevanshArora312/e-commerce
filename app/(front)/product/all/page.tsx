import ProductItem from '@/components/products/ProductItem'
import data from '@/lib/data'
import React from 'react'

const AllProducts = () => {
    // TODO : Fetch all
  return (
    <div>
      <h2 className='text-[30px]'>
        Shop from our collection
      </h2>
      <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        {
          data.products.map((product,ind) => {
            return(
              <ProductItem product={product} key={ind}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllProducts