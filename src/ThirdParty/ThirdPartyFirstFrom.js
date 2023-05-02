import React, { useState } from 'react'
import Completed from '../Components/Globals/Completed'
import FirstPageStepsContainer from './FirstPageSteps/FirstPageStepsContainer'

const ThirdPartyFirstFrom = () => {
    const [postForm, setPostForm] = useState({
        system_name : null,
        system_id : null,
        kind_name : null,
        kind_id : null,
        method_name : null,
        method_value : 0,
        plaque : null
    });

    return (
        <div className='flex border w-2/3 mx-auto flex-row-reverse rounded-lg my-4'>
            <FirstPageStepsContainer postForm={postForm} setPostForm={setPostForm} />
            <div class="vr h-56 my-auto"></div>
            <Completed postForm={postForm} setPostForm={setPostForm}/>
        </div>
    )
}

export default ThirdPartyFirstFrom