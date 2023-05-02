import React from 'react'

const ThirdPartMethod = ({postForm, setPostForm}) => {
  const options = [
    {
      caption : "نوع تمدید",
      value : 0
    },
    {
      caption : "کد ملی",
      value : 1
    },
    {
      caption : "کد یکتا",
      value : 2
    }
  ];
  return (
    <div>
      <div className='flex flex-row-reverse justify-center'>
        <div className='flex-1 mx-3 flex flex-col justify-start items-end'>
          <label className='my-2'>مدل خودرو</label>
          <select className='form-control form-select py-2 ' value={postForm.method_id} onChange={(e) => {
            const found = options.find(m => m.caption == e.target.value);
            // setSystemId(found.fanavaran_id);
            setPostForm({
              ...postForm,
              method_name : e.target.value,
            });
            // setKindId(e.target.value);
          }}>
            {options?.map((value, index) => {
              return <option key={index} className='form-control text-center'>{value.caption}</option>
            })}
          </select>
        </div>
        <div className='flex-1 mx-3 flex flex-col justify-start items-end'>
          <label className='my-2'>کد ملی / کد یکتا</label>
          <input className='form-control py-2 ' value={postForm.method_value} onChange={(e) => {
            // const found = kinds.find(m => m.caption == e.target.value);
            setPostForm({
              ...postForm,
              method_value : e.target.value
            });
          }} />
        </div>
      </div>
    </div>
  )
}

export default ThirdPartMethod
