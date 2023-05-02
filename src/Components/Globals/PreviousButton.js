import React, { useContext } from 'react'

function PreviousButton({step, setStep}) {
  return (
    <div>
        <button className='border-0 px-sm-5 text-white btn-right float-none float-sm-end fw-bold bg-green-500 rounded py-2 px-4 bg-blue-800' 
        onClick={() => {
          if( step >= 0){
            console.log('step is : ',step)
            setStep(step-1);
          }
        }}
        >قبلی</button>
    </div>
  )
}

export default PreviousButton
