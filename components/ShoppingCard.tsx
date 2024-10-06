"use client"

import React from 'react'
import ProductItem from './ProductItem'

const ShoppingCard = () => {
  const { items, removeItem, increaseQuantity, decreaseQuantity } = useCartStore()

  return (
    <div className='p-4'>
        <h2 className='text-2xl font-bold mb-4'>Shopping Card</h2>
        {items.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
            items.map((item) => (
                <ProductItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                />
            ))
        )}
    </div>
  )
}

export default ShoppingCard