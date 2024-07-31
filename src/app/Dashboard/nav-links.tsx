"use client"

import Link from 'next/link'
import {usePathname} from 'next/navigation';
import clsx from 'clsx';

const links = [
    {name:"Home",href:'/'},
    {name:"Customers",href:'/Dashboard/Customers'},
    {name:"Invoices",href:'/Dashboard/Invoices'}
] 


export default function NavLinks(){
    const pathname = usePathname(); 
    return(
        <>
            <ul className=''>
                {
                    links.map((link)=>{
                        return (
                            <Link key={link.name} href={link.href || ""}>
                                <li className={clsx(
                                    'p-4 text-center border border-white-500 text-black hover:bg-sky-500',
                                    {
                                        
                                        'bg-sky-500 text-white  -600' : pathname == link.href
                                    },
                                    )}>{link.name}</li> 
                            </Link>
                        );      
                    })
                }
            </ul>
        </>
    );
}