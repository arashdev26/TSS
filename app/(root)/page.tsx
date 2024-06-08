import Collections from '@/components/Collections'
import ProductList from '@/components/ProductList'
import React from 'react'

import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
      />
      {/* @ts-expect-error Server Component */}
      <Collections />
      {/* @ts-expect-error Server Component */}
      <ProductList />
    </>
  )
}

export const dynamic = 'force-dynamic'
