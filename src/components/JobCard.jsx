import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarker } from 'react-icons/fa'

const JobCard = ({
  jobObj: {
    jobID,
    jobType = 'N/A',
    jobTitle = 'N/A',
    jobIntro = 'N/A',
    jobSalary = 'N/A',
    jobLocation = 'N/A',
  },
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false)

  const description = jobIntro.slice(0, 100)

  return (
    <div className="p-4 m-2 md:m-4 shadow-md bg-emerald-200 max-w-full rounded-xl">
      <p className="text-sm text-neutral-600 mb-2">{jobType}</p>
      <h1 className="text-2xl font-bold mb-4">{jobTitle}</h1>
      <p className="text-md text-neutral-950 mb-3">
        {showFullDescription ? jobIntro : description + '...'}
      </p>
      <button
        onClick={() => setShowFullDescription((prevState) => !prevState)}
        className="mb-4 text-md font-semibold text-zinc-500 hover:text-zinc-700"
      >
        {showFullDescription ? 'Less' : 'More'}
      </button>
      <h4 className="text-lg text-indigo-800">{`${jobSalary} / Year`}</h4>
      <div className="border border-gray-500 my-5"></div>
      <p className="text-lg text-red-600 mb-4">
        <FaMapMarker className="inline-block text-lg mr-1 mb-1" />
        {jobLocation}
      </p>
      <button className="p-3 rounded-lg bg-blue-600 text-xl text-white">
        <Link to={`/job/${jobID}`}> Read More </Link>
      </button>
    </div>
  )
}

export default JobCard
