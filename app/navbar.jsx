import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-transparent p-8 navbar">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
        <Image src={`/docslogo.svg`} alt={'logo'} width="64" height="64" />
          <span className="text-white text-4xl font-bold px-4 text-[#1487a1]">OnlineDocs</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;