import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center my-8">
      <FaExclamationTriangle className="text-yellow-600 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">Oops! This page does not exist!</p>
      <Link
        className="px-5 py-3 mt-4 text-white bg-green-600 hover:bg-green-800 rounded-md"
        to={'/'}
      >
        Go Back
      </Link>
    </section>
  )
}

export default NotFoundPage
