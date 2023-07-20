import React, { useState, useEffect } from 'react'
import ProductService from '../services/productService'
import ProductCard from './productCard'

const GENDER = ["MALE", "FEMALE"];

const OutfitCreator = () => {

  const [products, setProducts] = useState()
  const [gender, setGender] = useState()

  useEffect(() => {
    const randomGender = GENDER[Math.floor(Math.random() * GENDER.length)];
    setGender(randomGender);
    ProductService.outfitCreator(randomGender).then((results) => {
      setProducts(results);
    })   
  }, [])

  return (    
    <>
      <h1 className='text-center py-5'>Random Outfit for {gender}</h1>
      <div className="d-flex justify-content-evenly">
        {products && products.data.map((product) => 
          <ProductCard {...product}/>
        )}
      </div>
      <footer className='d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top'>
        All Rights Reserved for NewYorker Fashion
      </footer>
    </>        
  )
}

export default OutfitCreator