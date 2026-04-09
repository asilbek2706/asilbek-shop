'use client';

import { ProductType } from '@/interfaces';
import { FC } from 'react';
import Link from 'next/link';
import CustomImage from './image';

const Product: FC<{ product: ProductType }> = ({ product }) => {
    return (
        <Link
            href={`/product/${product.id}`}
            className='group flex h-96 flex-col rounded-lg border p-6 transition-transform duration-200 ease-out hover:scale-105'
        >
            <div className='relative max-h-80 flex-1'>
                <CustomImage product={product} fill />
            </div>

            <h3 className='title-font mt-5 text-xs font-medium tracking-widest text-indigo-500'>
                {product.category}
            </h3>
            <div className='mt-4 mb-1 flex items-center justify-between font-semibold'>
                <p className='w-44 truncate'>{product.title}</p>
                <p>${product.price}</p>
            </div>
            <p className='line-clamp-2 text-base leading-relaxed'>{product.description}</p>
        </Link>
    );
};

export default Product;
