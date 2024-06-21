import data from '@/lib/data'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { FaRegStar, FaStar } from 'react-icons/fa'
import "../../../globals.css";
import { IoLocationOutline } from "react-icons/io5";
const ProductDetails = (
    {params} : {params : {id  :string}}
) => {
    const product = data.products.find(one => one.id == params.id)
    if(!product)
        return (
            <div>
                Product not found!!
            </div>
        )
    return (
        <>
            <div className='flex w-full max-lg:flex-col'>
                <div className='w-full lg:hidden flex flex-col text-[15px]'>
                    <div className='flex w-full justify-between items-center'>
                        <p className='text-sm text-blue-500 hover:text-orange-400 hover:underline hover:cursor-pointer'>Brand: {product.brand}</p>
                        <p className='flex items-center text-sm gap-x-[2px] my-1'>
                            <span className='mr-2'>{product.rating}</span>
                            {
                                [...Array(product.rating)].map((e, i) => {
                                    return(
                                        <FaStar key={i} className='text-yellow-500 mb-[2px]'/>
                                    )
                                })
                            }
                            {
                            [...Array(5-product.rating)].map((e, i) => <FaRegStar key={i} className='text-yellow-500 mb-[1px]'/>)    
                            }
                            <span className='mx-4 text-blue-500 hover:text-orange-400 hover:underline hover:cursor-pointer'>({product.reviewNum})</span>
                        </p>
                    </div>
                    <p className='font-sans font-gray-500'>
                        {product.name}
                    </p>
                </div>
                <div className='w-[40%] max-lg:w-full '>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={640}
                        height={640}
                        sizes='100vw'
                        style={{
                            width:"100%",
                            height:"auto"
                        }}
                    />
                </div>
                <div className='w-[60%] flex max-lg:flex-col max-lg:w-full overflow-y-auto p-4 max-lg:p-0 text-[25px]' id="product-info">
                    <div className='w-2/3 max-lg:hidden'>
                        <h1 className='font-sans '>
                            {product.name}
                        </h1>
                        <p className='text-sm text-blue-500 hover:text-orange-400 hover:underline hover:cursor-pointer'>Brand: {product.brand}</p>
                        <p className='flex items-center text-sm gap-x-[3px] my-1'>
                            <span className='mr-2'>{product.rating}</span>
                            {
                                [...Array(product.rating)].map((e, i) => {
                                    return(
                                        <FaStar key={i} className='text-yellow-500 mb-[2px]'/>
                                    )
                                })
                            }
                            {
                            [...Array(5-product.rating)].map((e, i) => <FaRegStar key={i} className='text-yellow-500 mb-[2px]'/>)    
                            }
                            <span className='mx-4 text-blue-500 hover:text-orange-400 hover:underline hover:cursor-pointer'>{product.reviewNum} Reviews</span>
                        </p>
                        <hr className='w-full bg-black' />
                        <h2>

                        </h2>

                    </div>
                    <div className='w-1/3 p-1  max-lg:w-full flex justify-center items-start'>
                        <div className='w-[90%] max-lg:border-0 border-2 h-auto rounded-lg max-lg:p-0 p-6'>
                            <p className='font-sans'>Rs.{product.price}</p>
                            <p className='text-[15px] font-sans'>Inclusive of all taxes</p>
                            <hr className='hidden max-lg:block my-2 h-[2px] bg-black/20' />
                            <div className='flex items-start gap-x-2'>
                                <IoLocationOutline className='text-black text-[20px] mt-1'/>
                                <div className='text-blue-400 text-[12px] gap-y-2'>
                                    <p className='flex items-center'>
                                        Delivering to Noida 201308
                                    </p>
                                    <p className="">Update location</p>
                                </div>
                            </div>
                            <p className={`font-medium my-2 text-[20px] ${product.inStock ? "text-green-600" : "text-red-500"}`}>
                                {product.inStock ? "In-Stock" : "Out of Stock"}
                            </p>
                            <div className='flex text-[15px] gap-x-3'>
                                Quantity: 
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className='w-full justify-center items-center'>
                                <button className='w-full rounded-full text-sm bg-yellow-500 text-black p-2 px-4 text-center hover:bg-opacity-90'>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails