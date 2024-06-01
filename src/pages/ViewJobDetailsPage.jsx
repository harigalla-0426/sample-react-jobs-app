import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BackToListingsComponent from '../components/BackToListingsComponent'
import JobDetails from '../components/JobDetails'

const ViewJobDetailsPage = () => {
  const { jobID } = useParams()

  return (
    <>
      <BackToListingsComponent />

      <JobDetails jobID={jobID} />
    </>
  )
}

// CSS Styles to note:
// group keyword it tailwind allows nested selectors to be used in conjunction with the group-hover class.

// group-hover:-translate-x-1 -  Moves the arrow to the left by 0.25rem (4px) when the button is hovered. this is placed with group
// so that it is applied when any items in the group is hovered

// items-center - vertically centers the components of flex; meanwhile justify takes care of horizontally positioning them

// transition-colors and transition-transform are tailwind classes that can be used to make a smoother color change and transition with a delay (150ms)

export default ViewJobDetailsPage
