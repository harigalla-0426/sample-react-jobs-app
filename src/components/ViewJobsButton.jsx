import React from 'react'
import { Link } from 'react-router-dom'

const ViewJobsButton = () => {
  return (
    <div className="flex justify-center">
      <div className="text-center text-white bg-black m-12 md:m-6 p-5 rounded-lg min-w-full md:min-w-80">
        <button>
          <Link to="/jobs">View All Jobs</Link>
        </button>
      </div>
    </div>
  )
}

export default ViewJobsButton
