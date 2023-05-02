import React from 'react'

const Completed = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center car-and-insurance-info px-3 px-md-5 pt-3 flex-1'>
      <div className="title mb-3">
          <h1 className="h5 fw-bold text-slate-700">اطلاعات شما</h1>
        </div>
        <div className="insurance-info-new w-full">
          <ul className="rounded p-0 flex flex-column justify-center items-between">
            <li className="flex justify-between mb-4 md:flex-row-reverse  md:flex-row flex-col">
              <span className="">شرکت بیمه گذار</span>
              <span className="">بیمه تجارت نو</span>
            </li>
            <li className="flex justify-between mb-4 md:flex-row-reverse  md:flex-row flex-col">
              <span>نوع پرداخت</span>
              <span>نقدی</span>
            </li>
            <li className="flex justify-between mb-4 md:flex-row-reverse flex-col md:flex-row">
              <span>تعهدات مالی</span>
              <span>20,000,000 تومان</span>
            </li>
            <li className="flex justify-between mb-4 md:flex-row-reverse flex-col md:flex-row">
              <span>مدت قرارداد</span>
              <span>یکساله</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Completed
