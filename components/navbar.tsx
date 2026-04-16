import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <header className='fixed top-0 z-50 flex w-full items-center justify-between bg-white px-4 py-2 shadow md:px-12'>
            <Link href='/'>
                <Image src='/logo.png' alt='Logo' width={150} height={50} />
            </Link>
            <div className='flex items-center space-x-2.5 text-sm'>
                <nav className='flex flex-wrap items-center justify-center text-base md:ml-auto'>
                    <Link href={'/'} className='mr-5 hover:text-gray-900'>
                        Home page
                    </Link>
                    <Link href={'/products'} className='mr-5 hover:text-gray-900'>
                        All products
                    </Link>
                </nav>
                <Link href={'/shopping-cart'}>
                    <button className='button border-transparent bg-blue-600 text-white hover:border-blue-600 hover:bg-transparent hover:text-black'>
                        My bag
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
