'use client';

import { useEffect, useState } from 'react';
import Product from '@/components/product';
import { ProductType } from '@/interfaces';

const ProductsGridClient = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const getProducts = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products', {
                    signal: controller.signal,
                    cache: 'no-store',
                });

                if (!res.ok) {
                    setProducts([]);
                    return;
                }

                const data = (await res.json()) as ProductType[];
                setProducts(data);
            } catch {
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };

        getProducts();

        return () => {
            controller.abort();
        };
    }, []);

    if (loading) {
        return <p className='text-center text-sm text-gray-500'>Loading products...</p>;
    }

    return (
        <>
            <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                {products.map((product) => {
                    return <Product key={product.id} product={product} />;
                })}
            </div>
            {products.length === 0 && (
                <p className='text-center text-sm text-gray-500'>
                    Products are temporarily unavailable.
                </p>
            )}
        </>
    );
};

export default ProductsGridClient;
