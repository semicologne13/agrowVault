"use client"
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation';
import React from 'react'

const NavLink = ({ 
    href, 
    label, 
    className 
}: { 
    href:string, 
    label:string, 
    className?:string
}) => {
    const pathName = usePathname();
  return (
    <Link href={href}
        className={`py-3 text-gray-700 hover:text-purple transition-colors relative block after:block after:absolute after:left-0 after:h-0.5 after:bg-purple after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right after:hover:origin-left ${className}
        ${
            pathName === href ? "after:scale-x-100 after:origin-right" : "after:scale-x-0 after:origin-left" 
        }
        `}
    >{label}</Link>
  )
};

export default NavLink;