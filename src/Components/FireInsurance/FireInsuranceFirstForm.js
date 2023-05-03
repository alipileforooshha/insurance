import React from 'react'

const FireInsuranceFirstForm = () => {
    const [postForm, setPostForm] = useState({
        building_kind : null,
        floor : null,
        construction_kind : null,
    });

    return (
        <div className='flex border w-2/3 mx-auto flex-row-reverse rounded-lg my-4'>
            <FirstPageStepsContainer postForm={postForm} setPostForm={setPostForm} />
            <div class="vr h-56 my-auto"></div>
            <Completed postForm={postForm} setPostForm={setPostForm}/>
        </div>
    )
}

export default FireInsuranceFirstForm
