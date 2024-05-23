import { Menu, MenuButton, MenuItems, Transition } from '@headlessui/react'
import Link from 'next/link'

interface LinkProps {
    name: string;
    href: string;
}

const Header = () => {
    const links: LinkProps[] = [
        { name: 'About', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'Resume', href: '/resume' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' }
    ]

    return (
        <div className= 'sticky top-0 z-40 w-full bg-transparent-white backdrop-blur-xl flex-none border-b'>
            <div className='flex flex-row mx-4 sm:mx-0 py-4 sm:px-8'>
                <div className='flex w-fit text-2xl'>
                    Juan R. Cifuentes
                </div>
                <div className='flex items-center sm:hidden ml-auto'>
                <Menu>
                    <MenuButton>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </MenuButton>
                    <Transition
                        enter="transition-opacity duration-200 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-300 ease-out"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <MenuItems anchor="bottom end" className="flex flex-col z-50 p-3 gap-6 bg-transparent-white backdrop-blur-xl shadow-2xl w-3/4 rounded-lg mt-5">
                            <HeaderLinks params={{links}}/>
                        </MenuItems>
                    </Transition>
                </Menu>
                </div>
                <div className='relative hidden sm:flex items-center ml-auto'>
                    <div className='flex text-sm leading-6 font-semibold space-x-8'>
                        <HeaderLinks params={{links}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

type HeaderLinksProps = {
    params: {
        links: Array<LinkProps>
    }
}

const HeaderLinks = (props: HeaderLinksProps) => {
    const { links } = props.params
    return (
        <>
            {links.map((link, index) => (
                <Link key={index} href={link.href}>
                    {link.name}
                </Link>
            ))}
        </>    
    )
}

export default Header