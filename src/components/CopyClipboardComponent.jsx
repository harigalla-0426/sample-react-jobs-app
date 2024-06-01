import React, { useState } from 'react'
import { FaCopy } from 'react-icons/fa'

const CopyClipboardComponent = ({ copyTitle, copyText }) => {
  const [showCopyTooltip, setShowCopyTooltip] = useState(false)

  const handleCopy = (copyText) => {
    setShowCopyTooltip(true)
    navigator.clipboard.writeText(copyText)
    setTimeout(() => {
      setShowCopyTooltip(false)
    }, 2000)
  }

  return (
    <>
      <h3 className="my-4 text-xl text-slate-800">{copyTitle}</h3>
      <div className="flex items-center">
        <button
          className="p-3 flex items-center bg-green-200 text-cyan-800 font-semibold"
          onClick={() => handleCopy(copyText)}
        >
          <span className="mr-3">{copyText}</span>
          <FaCopy className="text-lg" />
        </button>
        {showCopyTooltip && (
          <div className="ml-4 mt-3 bottom-full mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg animate-fade-in">
            Copied!
          </div>
        )}
      </div>
    </>
  )
}

export default CopyClipboardComponent
