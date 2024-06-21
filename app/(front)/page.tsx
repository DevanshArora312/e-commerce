import Hero from "@/components/products/Hero";
import ProductsArray from "@/components/products/ProductsArray";
import ProductItem from "@/components/products/ProductItem";
import data from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight  } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <Hero/>
      <div>
        <Link href="/product/all" className="text-2xl py-2 hover:underline flex gap-x-2 items-center">
            Latest Products <FaLongArrowAltRight className="mt-[3px]"/>
        </Link>
        <ProductsArray data={data.products}/> 
      </div>
      <h1 className="font-bold text-3xl py-4">
        Shop by category
      </h1>
      <div className="px-4">
        <div>
          <Link href="/categories/spectacles" className="text-2xl py-2 hover:underline flex gap-x-2 items-center">
            Spectacles <FaLongArrowAltRight className="mt-[3px]"/>
          </Link>
          <ProductsArray data={data.products}/> 
        </div>
        <div>
          <Link href="/categories/sunglasses" className="text-2xl py-2 hover:underline flex gap-x-2 items-center">
            Sunglasses <FaLongArrowAltRight className="mt-[3px]"/>
          </Link>
          <ProductsArray data={data.products}/>   
        </div>
        <div>
          <Link href="/categories/contact-lens" className="text-2xl py-2 hover:underline flex gap-x-2 items-center">
            Contact Lenses <FaLongArrowAltRight className="mt-[3px]"/>
          </Link>
          <ProductsArray data={data.products}/>   
        </div>
        <div>
          <Link href="/categories/utility" className="text-2xl py-2 hover:underline flex gap-x-2 items-center">
            Utility <FaLongArrowAltRight className="mt-[3px]"/>
          </Link>
          <ProductsArray data={data.products}/> 
        </div>
      </div>
    </>
  );
}
