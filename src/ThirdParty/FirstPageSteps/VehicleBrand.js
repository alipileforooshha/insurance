import axios from 'axios'
import React, { useEffect, useState } from 'react'

const VehicleBrand = ({ postForm, setPostForm }) => {

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/vehicle/systems").then((res) => {
            // console.log('systems',res.data.data);
            setSystems(res.data.data);
        });

        axios.get("http://127.0.0.1:8000/api/vehicle/kinds").then((res) => {
            // console.log('kinds',res.data.data);
            // console.log('type kinds',typeof res.data.data);
            setKinds(res.data.data);
        });

        
    }, []);


    const [systems, setSystems] = useState([]);
    const [kinds, setKinds] = useState([]);
    const [systemId, setSystemId] = useState(postForm.system_id ? postForm.system_id : 1);
    
    return (
        <div className='flex flex-row-reverse justify-center'>
            <div className='flex-1 mx-3 flex flex-col justify-start items-end'>
                <label className='my-2'>مدل خودرو</label>
                <select className='form-control form-select py-2 ' value={postForm.system_name} onChange={(e) => {
                    // console.log(e);
                    const found = systems.find(m => m.caption == e.target.value);
                    setSystemId(found.fanavaran_id);
                    // console.log('system_id',found.fanavaran_id);
                    setPostForm({
                        ...postForm,
                        system_name: e.target.value,
                        system_id: found.fanavaran_id
                    });
                    // setKindId(e.target.value);
                }}>
                    {systems?.map((value, index) => {
                        return <option key={index} className='form-control text-center'>{value.caption}</option>
                    })}
                </select>
            </div>
            <div className='flex-1 mx-3 flex flex-col justify-start items-end'>
                <label className='my-2'>نوع خودرو</label>
                <select className='form-control form-select py-2 ' value={postForm.kind_name} onChange={(e) => {
                    const found = kinds.find(m => m.caption == e.target.value);
                    setPostForm({
                        ...postForm,
                        kind_name: e.target.value,
                        kind_id: found.fanavaran_id
                    });
                    console.log('ewww',e.target.options[e.target.selectedIndex].text)
                    console.log('kind_name',e.target.value)
                    console.log('kind_id',found.fanavaran_id)
                }}>
                    {systemId && kinds?.filter((value,index) => {
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

export default VehicleBrand
