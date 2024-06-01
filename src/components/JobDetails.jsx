import React, { useState, useEffect, useRef } from 'react'
import Spinner from './Spinner'
import CopyClipboardComponent from './CopyClipboardComponent'
import { fetchJobById } from '../services/jobService'
import { toast } from 'react-toastify'
import { FaMapMarker } from 'react-icons/fa'

const JobDetails = ({ jobID = null }) => {
  const [job, setJob] = useState(null)
  const isJobFetched = useRef(false)
  const [showSpinner, setShowSpinner] = useState(false)

  const getJob = async () => {
    try {
      const jobResponse = await fetchJobById(jobID)

      setJob(jobResponse)
    } catch (error) {
      console.log('Jobs could not be found!', error)
      toast(error?.message ?? 'Could not fetch the job', {
        position: 'top-center',
        type: 'error',
      })
    } finally {
      setShowSpinner(false)
    }
  }

  useEffect(() => {
    if (!isJobFetched.current) {
      setShowSpinner(true)
      getJob()
      isJobFetched.current = true
    }
  }, [])

  return (
    <>
      {showSpinner ? <Spinner loading={true} /> : <></>}

      {job ? (
        <section className="m-8 grid sm:grid-cols-2 gap-4">
          <div className="p-6 bg-slate-100 rounded-md shadow-md">
            <p className="text-lg text-slate-700 mb-4">{job?.jobType}</p>
            <h1 className="text-2xl font-bold text-slate-900 mb-4">
              {job?.jobTitle}
            </h1>
            <p className="text-lg text-red-600">
              <FaMapMarker className="inline-block text-lg mr-1 mb-1" />
              {job?.jobLocation}
            </p>
          </div>

          <div className="p-6 bg-slate-100 rounded-md shadow-md row-span-2">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">
              Company Info
            </h1>
            <h2 className="text-xl font-semibold text-lime-600 mb-4">
              {job?.company?.name}
            </h2>
            <p className="text-lg mb-4">{job?.company?.description}</p>

            <div className="border border-slate-200 my-5"></div>

            <CopyClipboardComponent
              copyTitle="Contact Email"
              copyText={job?.company?.contactEmail}
            />

            <CopyClipboardComponent
              copyTitle="Contact Phone"
              copyText={job?.company?.contactPhone}
            />
          </div>

          <div className="p-6 rounded-md shadow-md bg-slate-100 ">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">
              Job Description
            </h1>
            <p className="text-lg mb-4">{job?.jobIntro}</p>

            <h1 className="text-2xl font-bold text-slate-900 mb-4"> Salary </h1>
            <h4 className="text-lg text-indigo-800">{`${job?.jobSalary} / Year`}</h4>
          </div>
        </section>
      ) : (
        <div className="text-2xl text-center mt-10 my-5">
          Could not Find the Job!
        </div>
      )}
    </>
  )
}

export default JobDetails
