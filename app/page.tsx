import Hero from '@/components/hero';
import Product from '@/components/product';
import { ProductType } from '@/interfaces';

export default async function Home() {
    let products: ProductType[] = [];

    try {
        const res = await fetch('https://fakestoreapi.com/products');

        if (res.ok) {
            products = (await res.json()) as ProductType[];
        }
    } catch {
        products = [];
    }

    return (
        <main className='mx-auto min-h-screen max-w-7xl px-8 xl:px-0'>
            <Hero />
            <section className='flex flex-col space-y-12'>
                <h1 className='text-center text-5xl font-bold'>ASILBEK SHOP DEALS</h1>
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
        </main>
    );
}
