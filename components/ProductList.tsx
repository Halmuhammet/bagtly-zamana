"use client"

import { useState } from "react"
import Image from "next/image"
import { useScrollFade } from "@/hooks/useScrollFade"
import { useLanguage } from "@/contexts/LanguageContext"


interface Product {
  id: number
  name: string
  image: string
}

const products: Product[] = [
  { id: 1, name: "Aknur automatic wash detergent", image: "website_visuals/advertisement/35f667.jpg" },
  { id: 2, name: "Aknur automatic wash detergent", image: "website_visuals/advertisement/35f667.jpg?height=300&width=300" },
  { id: 3, name: "Aynur hand wash detergent", image: "website_visuals/advertisement/stiralny-poroshok-ay-nur-avtomat-v-upakovkah-1849480_big.jpg?height=300&width=300" },
  { id: 4, name: "Pakize soap", image: "website_visuals/products/Pakize Мята 100 гр.jpg?height=400&width=300" },
]


function ProductItem({ product }: { product: Product }) {
  const { domRef, isVisible } = useScrollFade()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div
      ref={domRef}
      className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Image
        src={product.image || "/placeholder.svg"}
        alt={product.name}
        width={300}
        height={300}
        className="w-full h-64 object-cover mb-6 rounded"
      />
      <h2 className="text-2xl font-semibold mb-4 text-green-800">{product.name}</h2>
      <button
        onClick={() => setSelectedProduct(product)}
        className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors text-lg"
      >
        Learn More
      </button>
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-3xl font-bold mb-4 text-green-800">{selectedProduct.name}</h2>
            <p className="mb-6 text-lg">For pricing and availability, please contact our customer service.</p>
            <p className="mb-6 text-gray-600">
              Experience the luxury of Bagtly Zamana's premium detergents, crafted for the most discerning customers.
            </p>
            <button
              onClick={() => setSelectedProduct(null)}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors text-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ProductList() {
  return (
    <div id="products" className="grid grid-cols-1 md:grid-cols-2 gap-16">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}
