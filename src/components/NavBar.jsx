import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/react.svg'
import { IoMenuSharp } from 'react-icons/io5'

const NavBar = () => {
  const returnLinkClass = ({ isActive }) => {
    if (isActive) {
      return 'p-3 bg-green-900 text-white rounded-md'
    } else {
      return 'p-3 hover:bg-green-700 hover:text-white hover:font-bold rounded-md'
    }
  }

  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <>
      <nav className="flex justify-evenly sm:justify-around bg-green-600 text-slate-100 p-6 border-stone-100">
        <IoMenuSharp
          className="sm:hidden absolute left-5 top-7 text-4xl text-white cursor-pointer"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />

        <div>
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start mt-2">
            <a className="flex flex-shrink-0 items-center mr-4" href="/">
              <img src={Logo} alt="Logo" />
              <span className="hidden sm:block text-2xl font-bold ml-4">
                React Jobs
              </span>
            </a>
          </div>
        </div>

        <div className="hidden sm:flex space-x-10 text-xl font-bold">
          <NavLink className={returnLinkClass} to={'/'}>
            Home
          </NavLink>
          <NavLink className={returnLinkClass} to={'/jobs'}>
            Jobs
          </NavLink>
          <NavLink className={returnLinkClass} to={'/add-job'}>
            Add Job
          </NavLink>
        </div>
      </nav>

      {showMobileMenu && (
        <div className="py-10 mb-4 bg-green-400">
          <div className="flex mx-auto flex-col items-center text-white text-lg">
            <NavLink
              className={returnLinkClass}
              to={'/'}
              onClick={() => setShowMobileMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              className={returnLinkClass}
              to={'/jobs'}
              onClick={() => setShowMobileMenu(false)}
            >
              Jobs
            </NavLink>
            <NavLink
              className={returnLinkClass}
              to={'/add-job'}
              onClick={() => setShowMobileMenu(false)}
            >
              Add Job
            </NavLink>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar
