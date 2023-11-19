import React from 'react'
import Image from 'next/image'

function Logo() {
  return (
    <div>
    <Image src={'/logo.png'}
      width={120}
      height={60}
      alt="Set Logo"
    /></div>
  )
}

export default Logo