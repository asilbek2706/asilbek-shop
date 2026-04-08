export default function Loading() {
    return (
        <main className='mx-auto min-h-screen max-w-7xl px-8 xl:px-0'>
            <section className='py-24'>
                <div className='mx-auto h-12 w-72 animate-pulse rounded bg-slate-200' />
            </section>

            <section className='flex flex-col space-y-12 pb-16'>
                <div className='mx-auto h-12 w-96 max-w-full animate-pulse rounded bg-slate-200' />

                <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className='h-96 rounded-lg border p-6'>
                            <div className='h-full animate-pulse rounded-md bg-slate-100' />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
