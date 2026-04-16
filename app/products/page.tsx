import Cta from '@/components/cta';
import Feature from '@/components/feature';
import Product from '@/components/product';
import { ProductType } from '@/interfaces';

export const dynamic = 'force-dynamic';

const ProductsPage = async () => {
    let products: ProductType[] = [];

    try {
        const res = await fetch('https://fakestoreapi.com/products', {
            cache: 'no-store',
        });

        if (res.ok) {
            products = (await res.json()) as ProductType[];
        }
    } catch {
        products = [];
    }

    return (
        <main className='mx-auto min-h-screen max-w-7xl px-8 xl:px-0'>
            <Feature />
            <section className='flex flex-col space-y-12'>
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
            </section>
            <Cta />
        </main>
    );
};

export default ProductsPage;
