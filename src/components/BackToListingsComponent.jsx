import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const BackToListingsComponent = ({ bgColor = 'bg-slate-100' }) => {
  const navigate = useNavigate()

  return (
    <section>
      <div className={`p-8 ${bgColor} text-emerald-600`}>
        <button
          className="group flex items-center font-semibold rounded hover:text-emerald-800 transition-colors"
          onClick={() => navigate('/jobs')}
        >
          <FaArrowLeft className="mr-2 text-xl transition-transform group-hover:-translate-x-1" />
          <span className="text-xl">Back to Listings</span>
        </button>
      </div>
    </section>
  )
}

export default BackToListingsComponent
