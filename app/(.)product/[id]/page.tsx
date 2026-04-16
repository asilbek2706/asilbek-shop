'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ProductType } from '@/interfaces';
import { Dialog } from '@headlessui/react';
import CustomImage from '@/components/image';
import ReactStars from 'react-stars';
import { toast } from 'react-toastify';

const ProductDetailedPage = () => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState<ProductType>();
    const [isOpen, setIsOpen] = useState(true);

    const { id } = useParams();
    const router = useRouter();

    const handleClick = () => {
        const products: ProductType[] = JSON.parse(localStorage.getItem('carts') || '[]');

        const isExistProduct = products.find((c) => c.id === product?.id);
        if (isExistProduct) {
            const updatedData = products.map((c) => {
                if (c.id === product?.id) {
                    return { ...c, quantity: c.quantity + 1 };
                }
                return c;
            });
            localStorage.setItem('carts', JSON.stringify(updatedData));
        } else {
            const data = [...products, { ...product, quantity: 1 }];
            localStorage.setItem('carts', JSON.stringify(data));
        }
        toast('Product added to your bag!');
    };
    useEffect(() => {
        async function getData() {
            setLoading(true);
            const res = await fetch(`https://fakestoreapi.com/products/${id}`);
            const product = await res.json();
            setProduct(product);
            setLoading(false);
        }

        getData();
    }, [id]);

    return (
        <Dialog
            open={isOpen}
            onClose={() => {
                setIsOpen(false);
                router.back();
            }}
            className={'relative z-50'}
        >
            <div className='fixed inset-0 bg-black/30' aria-hidden='true' />

            <div className={'fixed inset-0 overflow-y-auto'}>
                <div className={'flex min-h-full items-center justify-center p-4'}>
                    <Dialog.Panel className={'mx-auto max-w-3xl rounded bg-white p-10'}>
                        {loading ? (
                            <div
                                className={
                                    'h-8 w-8 animate-spin rounded-full border-2 border-dotted border-blue-600'
                                }
                            />
                        ) : (
                            <div className={'flex h-96 gap-x-8'}>
                                {product?.image && (
                                    <div className={'relative hidden h-full w-72 md:inline'}>
                                        <CustomImage product={product} fill />
                                    </div>
                                )}
                                <div className={'flex flex-1 flex-col'}>
                                    <div className={'flex-1'}>
                                        <h4 className={'font-semibold'}>${product?.title}</h4>
                                        <p className={'text-sm font-medium'}>${product?.price}</p>

                                        <div className={'my-4 flex items-center text-sm'}>
                                            <p>{product?.rating.rate}</p>
                                            {product?.rating.rate && (
                                                <div className={'mr-6 ml-2 flex items-center'}>
                                                    <ReactStars
                                                        value={product.rating.rate}
                                                        edit={false}
                                                    />
                                                </div>
                                            )}
                                            <p
                                                className={
                                                    'cursor-pointer text-xs text-blue-600 hover:underline'
                                                }
                                            >
                                                {' '}
                                                See all {product?.rating.count} reviews
                                            </p>
                                        </div>

                                        <p className={'line-clamp-5 text-sm'}>
                                            {product?.description}
                                        </p>
                                    </div>
                                    <div className={'space-y-3 text-sm'}>
                                        <button
                                            className={
                                                'button w-full border-transparent bg-blue-600 text-white hover:border-blue-600 hover:bg-transparent hover:text-black'
                                            }
                                            onClick={handleClick}
                                        >
                                            Add to bag
                                        </button>
                                        <button
                                            onClick={() => window.location.reload()}
                                            className={
                                                'button w-full border-transparent bg-blue-600 text-white hover:border-blue-600 hover:bg-transparent hover:text-black'
                                            }
                                        >
                                            View full details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    );
};

export default ProductDetailedPage;
