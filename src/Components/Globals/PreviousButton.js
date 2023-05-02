import React, { useContext } from 'react'

function PreviousButton() {
  return (
    <div>
        <button className='btn btn-primary mt-3 w-50' 
        // onClick={() => {
        //   if(state.step > 1){
        //     setState({
        //       ...state,
        //       step : state.step - 1
        //     });
        //   }
        // }}
        >قبلی</button>
    </div>
  )
}

export default PreviousButton
