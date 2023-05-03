import React from 'react'

const Completed = ({postForm, setPostForm}) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center car-and-insurance-info px-3 px-md-5 pt-3 flex-1'>
      <div className="title mb-3">
          <h1 className="h5 fw-bold text-slate-700">اطلاعات شما</h1>
        </div>
        <div className="insurance-info-new w-full">
          <ul className="rounded p-0 flex flex-column justify-center items-between">
            <li className="flex justify-between mb-4 md:flex-row-reverse  md:flex-row flex-col">
              <span className="">مدل خودرو</span>
              <span className="">{postForm.system_name ? postForm.system_name : '-'}</span>
            </li>
            <li className="flex justify-between mb-4 md:flex-row-reverse  md:flex-row flex-col">
              <span>نوع خودرو</span>
              <span>{postForm.kind_name ? postForm.kind_name : "-"}</span>
            </li>
            <li className="flex justify-between mb-4 md:flex-row-reverse flex-col md:flex-row">
              <span>نوع تمدید</span>
              <span>{postForm.method_name ? postForm.method_name : '-'}</span>
            </li>
            <li className="flex justify-between mb-4 md:flex-row-reverse flex-col md:flex-row">
              <span>{postForm.method_name ? postForm.method_name : "شناسه تمدید"}</span>
              <span>{postForm.method_value ? postForm.method_value : '-'}</span>
            </li>
            <li className="flex justify-between mb-4 md:flex-row-reverse flex-col md:flex-row">
              <span>وضعیت پلاک</span>
              <span>{postForm.plaque > -1 ? (postForm.plaque == 1 ? 'تعویض پلاک داشته ام' : 'تعویض پلاک نداشته ام') : '-'}</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Completed
