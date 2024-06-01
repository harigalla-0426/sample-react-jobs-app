import axios from 'axios'

const BASE_URI = 'http://localhost:3005'

const fetchJobs = async (jobLimit = null) => {
  const response = await axios.get(`${BASE_URI}/jobs`)

  if (response.status !== 200) {
    throw new Error('Service Call failed!')
  }

  let jobResponse = response?.data || []

  if (jobLimit) {
    jobResponse = jobResponse.slice(0, jobLimit)
  }

  return jobResponse
}

const fetchJobById = async (jobID = null) => {
  if (!jobID || isNaN(+jobID)) {
    throw new Error('Invalid job ID in the URL!')
  }

  const response = await axios.get(`${BASE_URI}/jobs?jobID=${jobID}`)

  if (response.status !== 200) {
    throw new Error(`Could not find the job with ID: ${jobID}`)
  }

  let jobResponse = response?.data?.[0]

  return jobResponse
}

export { fetchJobs, fetchJobById }
