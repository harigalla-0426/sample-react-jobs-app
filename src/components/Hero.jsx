import React from 'react'

const Hero = ({
  title = 'Test Title',
  subtitle = 'This is a test subtitle.',
}) => {
  return (
    <section className="py-20 mb-4 bg-green-500">
      <div className="flex mx-auto flex-col items-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-extrabold"> {title} </h1>
          <p className="text-xl my-4"> {subtitle} </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
