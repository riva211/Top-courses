import React from 'react'
import "./Spinner.css"

//? spinner from https://www.cssportal.com/css-loader-generator/
function Spinner() {
  return (
    <div>
     <div className="custom-loader"></div>
      <p className='text-white'>Loading...</p>
    </div>
  )
}

export default Spinner