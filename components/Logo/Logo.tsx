import React from "react"
import Image from "next/image"

const Logo = React.forwardRef(() => {
    return (
        <img  className='h-full w-40' src='/netflix-logo.png' alt="Netflix Logo" />
    )
})

export default Logo
