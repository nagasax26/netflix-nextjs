import { useEffect, useState } from 'react'

import Link from 'next/link'
import Logo from '../Logo/Logo'
import Menu from './Menu'

function Nav() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else {
        handleShow(false)
      }
    }
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  return (
    <div
      className={`flex justify-between items-center px-10 py-6 fixed w-full top-0 z-10 transition-all duration-500 ease-in ${
        show && 'bg-black'
      }`}
    >
      <Link href="/">
        <Logo />
      </Link>

      <Menu />
    </div>
  )
}

export default Nav
