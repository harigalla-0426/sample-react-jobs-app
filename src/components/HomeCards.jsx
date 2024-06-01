import React from 'react'
import CardComponent from './CardComponent'

const HomeCards = () => {
  const devCardProps = {
    title: 'For Developers',
    subTitle: 'Browse our React jobs and start your career today',
    buttonText: 'Browse Jobs',
    styles: { bgColor: 'bg-gray-100', buttonBG: 'bg-black' },
    link: 'jobs',
  }

  const empCardProps = {
    title: 'For Employers',
    subTitle: 'List your job to find the perfect developer for the role',
    buttonText: 'Add Job',
    styles: { bgColor: 'bg-blue-200', buttonBG: 'bg-blue-600' },
    link: 'add-job',
  }

  return (
    <>
      <div className="md:flex justify-center">
        <CardComponent {...devCardProps} />
        <CardComponent {...empCardProps} />
      </div>
    </>
  )
}

export default HomeCards
