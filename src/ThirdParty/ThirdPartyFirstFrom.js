import React from 'react'
import Completed from '../Components/Globals/Completed'
import FirstPageStepsContainer from './FirstPageSteps/FirstPageStepsContainer'

const ThirdPartyFirstFrom = () => {

    return (
        <div className='flex border w-1/2 mx-auto flex-row-reverse rounded-lg my-4'>
            <FirstPageStepsContainer />
            <div class="vr h-56 my-auto"></div>
            <Completed />
        </div>
    )
}

export default ThirdPartyFirstFrom