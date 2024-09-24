import Typography from '@/components/typography'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full flex items-end justify-between py-4 px-6 border-b border-b-slate-300'>
      <Typography.h2>
        Chib&apos;s{" "}<span className='text-purple-700'>Blog</span>
      </Typography.h2>

      <Link className='text-base' href={"/blog"}>
        Blog
      </Link>
    </nav>
  )
}
