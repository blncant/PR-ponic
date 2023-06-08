import React from 'react'

import { ProductCard, CardTop, CardContent } from './ProductsStyles'
import {FaShoppingBag} from 'react-icons/fa'

import { formatPrice } from '../../utils/formatPrice'

import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';

const CardProduct = ({name, category, price, cardImg, id, cartImg }) => {
    const dispatch = useDispatch()
    
    return (
        <ProductCard>
            <CardTop>
            <button
                onClick={() => 
                dispatch(addToCart({ cardImg, cartImg, name, price, id }))
                }
            >
                <FaShoppingBag/>
            </button>
            <img src={cardImg} alt={name} />
            </CardTop>
            <CardContent>
            <p>{formatPrice(price)}</p>
            <h4>{category}</h4>
            <h3>{name}</h3>
            </CardContent>
        </ProductCard>
    )
}

export default CardProduct