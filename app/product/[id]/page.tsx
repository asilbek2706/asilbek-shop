import { notFound } from 'next/navigation';
import CustomImage from '@/components/image';
import { ProductType } from '@/interfaces';

const ProductDetailPage = async ({ params }: PageProps<'/product/[id]'>) => {
    const { id } = await params;
    let product: ProductType;

    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);

        if (!res.ok) {
            notFound();
        }

        product = (await res.json()) as ProductType;
    } catch {
        notFound();
    }

    return (
        <div
            className={
                'mx-auto mt-48 flex max-w-5xl flex-col items-center gap-8 px-4 pb-10 md:flex-row'
            }
        >
            <CustomImage product={product} />

            <div className={'divide-2'}>
                <div className={'space-y-2 pb-8'}>
                    <h1 className={'text-2xl font-bold md:text-4xl'}>{product.title}</h1>
                    <h2 className={'text-xl font-bold text-gray-500 md:text-3xl'}>
                        ${product.price}
                    </h2>
                </div>

                <div>
                    <p className={'text-xs md:text-sm'}>{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
