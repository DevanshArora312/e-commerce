import { Product } from '@/lib/models/ProductModel'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { FaStar,FaRegStar  } from "react-icons/fa";
const ProductItem = ({product} : {product : Product}) => {
  return (
    <Link href={`/product/${product.id}`} className='flex flex-col gap-y-2 w-[300px] h-auto border-[0px] border-gray-700 rounded-lg p-3 hover:shadow-2xl'>
        <figure>
            <Image 
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className='object-cover w-full'
            />
        </figure>
        <div className='w-full flex flex-col justify-center items-start leading-tight'>
            <p className='text-gray-500 text-[15px]'>
                {product.category}
            </p>
            <p className='font-semibold text-[20px]'>
                {product.name.length < 40 ? product.name : product.name.slice(0,35)+"..."}
            </p>
        </div>
       <div className='text-[15px] flex w-full gap-x-2 text-gray-700 items-center'>
            <p className='flex items-center gap-x-[2px]'>
                {
                    [...Array(product.rating)].map((e, i) => {
                        return(
                            <FaStar key={i} className='text-yellow-500 mb-[3px]'/>
                        )
                    })
                }
                {
                   [...Array(5-product.rating)].map((e, i) => <FaRegStar key={i} className='text-yellow-500 mb-1'/>)    
                }
            </p>
            <p className=''>
               ({product.reviewNum} { product.reviewNum !== 1 ? "Reviews" : "Review" })
            </p>
       </div>
        <div className='w-full font-semibold text-xl text-blue-600 flex items-center justify-between'>
            <p>
                Rs. {product.price}
            </p>
            {/* <button className='bg-orange-400 rounded-lg text-white p-2 text-[15px]'>
                Add to Cart
            </button> */}
        </div>
    </Link>
  )
}

export default ProductItem