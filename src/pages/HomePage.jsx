import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import HomeJobs from '../components/HomeJobs'
import ViewJobsButton from '../components/ViewJobsButton'

const HomePage = () => {
  return (
    <>
      <Hero
        title={'Become a React Dev'}
        subtitle={'Find the React job that fits you!'}
      />
      <HomeCards />
      <HomeJobs jobsLimit={3} />
      <ViewJobsButton />
    </>
  )
}

export default HomePage
