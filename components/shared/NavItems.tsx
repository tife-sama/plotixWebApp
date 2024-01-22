"use client"
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path'
import React from 'react'

const NavItems = () => {
    const pathname = usePathname();

  return (
    <div>
     <ul className='flex w-full flex-col items-start gap-5 '>
        {headerLinks.map((link) => {
            const isActive = pathname === link.route;
            return(
                <li
                key={link.route}
                className={`${
                isActive && 'text-primary-500'}flex-center p-medium-16 whitespace-nowrap`}
                >
                    <Link href={link.route}>{link.label}</Link>
                </li>
            )
        })}
     </ul>
    </div>
  )
}

export default NavItems
