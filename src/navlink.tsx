"use client"

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';

const links =
    [
        { name: 'Home', href:'/' },
        { name: 'Customers', href: '/ui/dashboard/Customers1'},
        { name: 'Invoices', href: '/ui/dashboard/Invoices1' },

    ]
export default function NavLinks() {
    const pathname = usePathname(); 

    return (
        <>
        <ul>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        // className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 "
                        className={clsx(
                            'p-4 text-center border border-white-500 text-black hover:bg-sky-500',
                            {
                                
                                'bg-sky-500 text-white  -600' : pathname == link.href
                            },
                            )}
                   >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
            </ul>
        </>
    );
}