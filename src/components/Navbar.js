import React from 'react'

const Navbar = () => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-center bg-gray-100 shadow-lg navbar navbar-expan-lg navbar-light ">
        <div className=" flex items-center sm:py-3 px-2 ">
          <h1 className='header'>MYCRYPTO</h1>
          {/* <a href="/#">
            <img
              src={Logo} //logo
              alt="Logo"
              className="pl-6 object-cover h-7 lg:h-8 cursor-pointer "
            />
          </a> */}
        </div>
    </nav>
  )
}

export default Navbar