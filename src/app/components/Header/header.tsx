import Link from 'next/link'

const header = () => {

    return (
        <div className= 'sticky top-0 z-40 w-full backdrop-blur flex-none border-b'>
            <div className='flex flex-row mx-4 sm:mx-0 py-4 sm:px-8'>
                <div className='flex w-fit'>
                    Juan R. Cifuentes
                </div>
                <div className='relative hidden sm:flex items-center ml-auto'>
                    <div className='flex text-sm leading-6 font-semibold space-x-8'>
                        <Link href='/'>
                            About
                        </Link>
                        <Link href='/projects'>
                            Proyects
                        </Link>
                        <Link href='/resume'>
                            Resume
                        </Link>
                        <Link href='/blog'>
                            Blog
                        </Link>
                        <Link href='/contact'>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header