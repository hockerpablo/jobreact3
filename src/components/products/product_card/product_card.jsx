import React from 'react'
import { ProductStyle } from './styles'

export const ProductCard = ({img, name, desc, price, category}) => {
  return (
    <ProductStyle>

        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>{desc}</p>
        <p>Categoria: {category}</p>
        <div>
            <p>${price}</p>
            <button>Agregar</button>
        </div>
    
    </ProductStyle>
  )
}
