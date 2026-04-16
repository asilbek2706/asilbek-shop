import Cta from '@/components/cta';
import Hero from '@/components/hero';
import ProductsGridClient from '@/components/products-grid-client';

export default function Home() {
    return (
        <main className='mx-auto min-h-screen max-w-7xl px-8 xl:px-0'>
            <Hero />
            <section className='flex flex-col space-y-12'>
                <h1 className='text-center text-5xl font-bold'>ASILBEK SHOP DEALS</h1>
                <ProductsGridClient />
            </section>
            <Cta />
        </main>
    );
}
