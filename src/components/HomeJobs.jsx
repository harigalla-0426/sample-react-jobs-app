import React, { useEffect, useState, useRef } from 'react'
import { fetchJobs } from '../services/jobService'
import JobCard from './JobCard'
import Spinner from './Spinner'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const HomeJobs = ({ jobsLimit = null, isHome = true }) => {
  const [jobs, setJobs] = useState([])
  const [showSpinner, setShowSpinner] = useState(true)
  const hasFetchedJobs = useRef(false)

  const getJobs = async () => {
    try {
      const jobResponse = await fetchJobs(jobsLimit)

      setJobs(jobResponse)
    } catch (error) {
      console.log('Jobs could not be found!', error)

      toast('Error while fetching data from the server!', {
        position: 'top-center',
        type: 'error',
      })
    } finally {
      setShowSpinner(false)
    }
  }

  useEffect(() => {
    if (!hasFetchedJobs.current) {
      setShowSpinner(true)
      getJobs()
      hasFetchedJobs.current = true
    }
  }, [])

  return (
    <div className="m-3 p-6 bg-slate-100 rounded-sm">
      <div className="text-center text-3xl font-bold text-green-600">
        {isHome ? 'Browse Jobs' : 'All Jobs'}
      </div>
      {showSpinner ? <Spinner loading={true} /> : <></>}
      {jobs.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.jobID} jobObj={job} />
          ))}
        </div>
      ) : (
        <div className="text-2xl text-center mt-10 my-5">No jobs found!!</div>
      )}
    </div>
  )
}

export default HomeJobs
