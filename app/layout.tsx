import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import { ReactNode } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS ni unutmang!
import Footer from '@/components/footer';

const monsterrat = Montserrat({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
    title: 'Asilbek Shop',
    description: 'A simple e-commerce website built with Next.js and TypeScript.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={monsterrat.className}>
                <Navbar />
                <ToastContainer />
                {children}
                <Footer />
            </body>
        </html>
    );
}
