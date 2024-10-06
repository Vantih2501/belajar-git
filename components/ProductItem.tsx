import React from "react";

interface ProductItemProps {
    item: {
        id: number;
        name: string;
        price: number;
        quantity: number;
    }
    onRemove: (id:number) => void;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
}

const ProductItem = ({ item, onRemove, onIncrease, onDecrease }: ProductItemProps) => {
  return (
    <div className="flex items-center justify-center border-b py-2">
        <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-gray-500">Product Price:{item.price}</p>
            <p className="text-gray-500">Product Quantity:{item.quantity}</p>
        </div>
        <div className="flex items-center space-x-2">
            <button
            onClick={() => onIncrease(item.id)}
            className="bg-blue-500 text-white px-2 py-1 rounded"
            >+</button>

            <button
            onClick={() => onDecrease(item.id)}
            className="bg-red-500 text-white px-2 py-1"
            >-</button>

            <button
            onClick={() => onRemove(item.id)}
            className="bg-red-500 text-white px-2 py-1"
            >Remove</button>
        </div>
    </div>
  );
};

export default ProductItem;
