import React from 'react'
import { Link } from 'react-router-dom'

const CardComponent = ({
  title = 'Card Title',
  subTitle = 'Card Text',
  buttonText = 'Button Text',
  styles = { bgColor: 'bg-gray-100', buttonBG: 'bg-black' },
  link = '/',
}) => {
  return (
    <>
      <div
        className={`m-4 p-4 rounded-lg max-w-xl ${styles.bgColor} text-black shadow-md`}
      >
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-2 mb-4">{subTitle}</p>
        <button
          className={`p-3 rounded-lg ${styles?.buttonBG} text-xl text-white`}
        >
          <Link to={link}>{buttonText}</Link>
        </button>
      </div>
    </>
  )
}

export default CardComponent
