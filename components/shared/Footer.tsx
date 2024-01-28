import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center'>
        <Link href='/'>
          <Image
            src="/assets/icons/logo.png"
            alt='logo'
            width={128}
            height={38}
          />
        <p>2024 Plotix. All Rights reserved.</p>
        
        </Link>
      </div>
    </footer>
  )
}

export default Footer
