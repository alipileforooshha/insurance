import axios from 'axios'
import React, { useEffect, useState } from 'react'

const VehicleBrand = ({ postForm, setPostForm }) => {

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/vehicle/systems").then((res) => {
            // console.log('systems',res.data.data);
            setModels(res.data.data);
        })
        axios.get("http://127.0.0.1:8000/api/vehicle/kinds").then((res) => {
            // console.log('kinds',res.data.data);
            setKinds(res.data.data);
        })

        
    }, []);


    const [kinds, setKinds] = useState(false);
    const [models, setModels] = useState(false);

    return (
        <div className='flex flex-row-reverse justify-center'>
            <div className='flex-1 mx-3 flex flex-col justify-start items-end'>
                <label className='my-2'>مدل خودرو</label>
                <select className='form-control form-select py-2 ' value={postForm.brand} onChange={(e) => {
                    setPostForm({
                        ...postForm,
                        brand: e.target.value
                    });
                }}>
                    {kinds && kinds.map((value, index) => {
                        return <option key={index} className='form-control text-center'>{value.caption}</option>
                    })}
                </select>
            </div>
            <div className='flex-1 mx-3 flex flex-col justify-start items-end'>
                <label className='my-2'>نوع خودرو</label>
                <select className='form-control form-select py-2 ' value={postForm.brand} onChange={(e) => {
                    setPostForm({
                        ...postForm,
                        brand: e.target.value
                    });
                }}>
                    {console.log('wowo',kinds)}
                    {kinds && kinds.map((value, index) => {
                        return <option key={index} className='form-control text-center'>{value.caption}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default VehicleBrand
