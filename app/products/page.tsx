import Cta from '@/components/cta';
import Feature from '@/components/feature';
import ProductsGridClient from '@/components/products-grid-client';

const ProductsPage = () => {
    return (
        <main className='mx-auto min-h-screen max-w-7xl px-8 xl:px-0'>
            <Feature />
            <section className='flex flex-col space-y-12'>
                <ProductsGridClient />
            </section>
            <Cta />
        </main>
    );
};

export default ProductsPage;
