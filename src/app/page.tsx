'use client'

import { usePathname } from 'next/navigation'


export default function Galery() {
  const param = usePathname()
  return (
    <main className="flex min-h-screen">
      <p>{param}home</p>
    </main>
  )
}
