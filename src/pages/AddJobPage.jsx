import axios from 'axios'
import React, { useState } from 'react'
import BackToListingsComponent from '../components/BackToListingsComponent'
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddJobPage = () => {
  const [loading, setLoading] = useState(false)

  const salaryOptions = [
    { text: '$70K - $80K', value: '$70K - $80K' },
    { text: '$80K - $90K', value: '$80K - $90K' },
    { text: '$90K - $100K', value: '$90K - $100K' },
    { text: '$100K - $110K', value: '$100K - $110K' },
    { text: '$110K - $120K', value: '$110K - $120K' },
    { text: '$120K - $130K', value: '$120K - $130K' },
    { text: '$130K - $140K', value: '$130K - $140K' },
    { text: '$140K - $150K', value: '$140K - $150K' },
  ]

  // {
  //   "id": "eda9",
  //   "jobTitle": "NextJS Developer",
  //   "jobType": "Hybrid",
  //   "jobIntro": "Join our team as a Full-stack Developer in beautiful Chicago, IL. We are looking for a skilled and enthusiastic individual to help us create innovative web solutions. Competitive salary and great benefits package available.",
  //   "jobSalary": "$120K - $130K",
  //   "companyName": "US Bank",
  //   "companyDescription": "At U.S. Bank, we help millions of clients achieve their goals with a balance of best-in-class technology and human expertise tailored to individual needs. As the fifth-largest commercial bank in the United States, we’ve built a reputation for strength and stability across a diversified mix of businesses, including commercial and institutional banking, business banking, payments, wealth management and consumer banking.",
  //   "companyEmail": "contact@usbank.com",
  //   "companyNumber": "888-888-8888",
  //   "jobID": 7
  // }

  const validateForm = async (e) => {
    e.preventDefault()

    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const reqBody = Object.fromEntries(formData.entries())

    const {
      jobTitle,
      jobIntro,
      jobLocation,
      jobType,
      jobSalary,
      companyName,
      companyDescription,
      companyEmail,
      companyNumber,
    } = reqBody

    // Validations
    if (
      !jobTitle ||
      !jobIntro ||
      !jobLocation ||
      !companyName ||
      !companyDescription ||
      !companyEmail ||
      !companyNumber
    ) {
      toast('Please fill all the fields!', {
        type: 'warning',
        position: 'top-center',
      })

      setLoading(false)
      return
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (!emailRegex.test(companyEmail)) {
      toast('Please enter a valid email!', {
        type: 'warning',
        position: 'top-center',
      })

      setLoading(false)
      return
    }

    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g

    if (!phoneRegex.test(companyNumber)) {
      toast('Please enter a valid phone number!', {
        type: 'warning',
        position: 'top-center',
      })

      setLoading(false)
      return
    }

    // Service Call POST Operation
    try {
      const getResponse = await axios.get('http://localhost:3005/jobs')
      const length = getResponse?.data.length

      const response = await axios.post('http://localhost:3005/jobs', {
        jobID: length + 1,
        jobTitle,
        jobIntro,
        jobLocation,
        jobType,
        jobSalary,
        company: {
          name: companyName,
          description: companyDescription,
          contactEmail: companyEmail,
          contactPhone: companyNumber,
        },
      })

      if (response.status !== 201) {
        throw new Error('Error while trying to make a POST req')
      }

      toast('Job Posting added successfully! Please navigate to all Jobs...', {
        type: 'success',
        position: 'top-center',
      })

      form.reset()
      // navigate('/jobs')
    } catch (error) {
      console.error('Jobs could not be posted!', error)
      toast('Jobs could not be posted! Please try again later.', {
        type: 'error',
        position: 'top-center',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <BackToListingsComponent bgColor="bg-white" />

      <section className="relative bg-slate-100 m-4 p-6 flex flex-col justify-center items-center shadow-lg text-lg">
        {loading && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
            <Spinner loading={loading} />
          </div>
        )}
        <h1 className="text-4xl font-bold text-emerald-600 mb-5">Add Job</h1>

        <form className="grid grid-flow-row gap-8" onSubmit={validateForm}>
          <div className="flex flex-col items-center justify-center">
            <label
              className="text-neutral-700 font-mono mr-3"
              htmlFor="jobTitle"
            >
              Job Title
            </label>
            <input
              className="m-2 p-2 rounded-md md:w-64"
              type="text"
              name="jobTitle"
              id="jobTitle"
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <label
              className="text-neutral-700 font-mono mr-3"
              htmlFor="jobType"
            >
              Job Type
            </label>
            <select
              name="jobType"
              id="jobType"
              className="m-3 p-2 rounded-md md:w-64"
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <div className="flex flex-col items-center justify-center">
            <label
              className=" text-neutral-700 font-mono mr-3 mb-2"
              htmlFor="jobIntro"
            >
              Job Description
            </label>
            <textarea
              className="rounded-lg text-md"
              name="jobIntro"
              id="jobIntro"
              cols="36"
              rows="6"
              autoComplete="off"
            ></textarea>
          </div>

          <div className="flex flex-col items-center justify-center">
            <label
              className="text-neutral-700 font-mono mr-3"
              htmlFor="jobSalary"
            >
              Salary Range offered{' '}
            </label>
            <select
              className="m-3 p-2 rounded-md md:w-64 "
              name="jobSalary"
              id="jobSalary"
            >
              {salaryOptions.map((salaryOption) => (
                <option key={salaryOption.text} value={salaryOption.value}>
                  {salaryOption.text}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col items-center justify-center">
            <label
              className="text-neutral-700 font-mono mr-3"
              htmlFor="jobLocation"
            >
              Job Location
            </label>
            <input
              className="m-2 p-2 rounded-md md:w-64"
              type="text"
              name="jobLocation"
              id="jobLocation"
              autoComplete="off"
            />
          </div>

          <h2 className="flex items-center justify-center text-2xl font-bold text-teal-600">
            Company Info
          </h2>

          <div className="flex flex-col items-center justify-center">
            <label
              className=" text-neutral-700 font-mono mr-3"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              className="m-2 p-2 rounded-md md:w-64"
              type="text"
              name="companyName"
              id="companyName"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <label
              className=" text-neutral-700 font-mono mr-3 mb-2"
              htmlFor="companyDescription"
            >
              Company Description
            </label>
            <textarea
              className="rounded-lg text-md"
              name="companyDescription"
              id="companyDescription"
              cols="36"
              rows="6"
            ></textarea>
          </div>

          <div className="flex flex-col items-center justify-center">
            <label
              className=" text-neutral-700 font-mono mr-3"
              htmlFor="companyEmail"
            >
              Company Email
            </label>
            <input
              className="m-2 p-2 rounded-md md:w-64"
              type="email"
              name="companyEmail"
              id="companyEmail"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <label
              className=" text-neutral-700 font-mono mr-3"
              htmlFor="companyNumber"
            >
              Company Phone Number
            </label>
            <input
              className="m-2 p-2 rounded-md md:w-64"
              type="text"
              name="companyNumber"
              id="companyNumber"
            />
          </div>

          <button
            className="p-3 my-5 bg-black text-white rounded-md"
            type="submit"
          >
            Add Job Listing
          </button>
        </form>
      </section>
    </>
  )
}

export default AddJobPage
