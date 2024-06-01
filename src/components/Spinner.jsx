import React from 'react'
import BounceLoader from 'react-spinners/BounceLoader'

const Spinner = ({ loading = false }) => {
  const override = {
    display: 'block',
    margin: '100px auto',
  }
  return (
    <BounceLoader
      color="#36d7b7"
      loading={loading}
      size={100}
      cssOverride={override}
    />
  )
}

export default Spinner
