export default function RootLayout( {children}: {children: React.ReactNode} ) {
    return (
    <div className="py-10">
        <div className='max-w-screen-xl mx-auto px-4 text-gray-600 sm:px-8'>
            {children}
        </div>
    </div>
    )
}