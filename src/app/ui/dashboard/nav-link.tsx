"use client"
import Link from 'next/link';

const links =
    [
        { name: 'Home', href: '' },
        { name: 'Customers1', href: './dashboard/Customers1'},
        { name: 'Invoices', href: './dashboard/Invoices1' },
        { name: 'Dashboard', href: '' },

    ]
export default function NavLinks() {
    return (
        <>
        <ul>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
            </ul>
        </>
    );
}