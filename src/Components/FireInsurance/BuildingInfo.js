import React from 'react'

const BuildingInfo = () => {
    return (
        <div>
            <div className='flex-1 mx-3 flex flex-col justify-start items-end'>
                <label className='my-2'>نوع خودرو</label>
                <select className='form-control form-select py-2 ' value={postForm.kind_name} onChange={(e) => {
                    const found = kinds.find(m => m.caption == e.target.value);
                    setPostForm({
                        ...postForm,
                        kind_name: e.target.value,
                        kind_id: found.fanavaran_id
                    });
                    console.log('ewww', e.target.options[e.target.selectedIndex].text)
                    console.log('kind_name', e.target.value)
                    console.log('kind_id', found.fanavaran_id)
                }}>
                    {systemId && kinds?.filter((value, index) => {
                        return value.vehicle_system_id == systemId
                    }).map((value, index) => {
                        // console.log('sssss',value)
                        return <option key={index} className='form-control text-center'>{value.caption}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default BuildingInfo
