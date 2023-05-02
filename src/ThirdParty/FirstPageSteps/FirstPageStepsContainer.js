import React, { useState } from 'react'
import VehicleBrand from './VehicleBrand';
// import NextButton from '../../Components/Globals/NextButton';
// import PreviousButton from '../../Components/Globals/PreviousButton';

const FirstPageStepsContainer = () => {
    const [step, setStep] = useState(0);
    
    const [postForm, setPostForm] = useState({
        brand : null,
        kind : null
    });

    const stepFunc = () => {
        switch (step) {
            case 0:
                return <VehicleBrand postForm={postForm} setPostForm={setPostForm} />
                break;
        
            default:
                break;
        }
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center car-and-insurance-info px-3 px-md-5 pt-3 flex-1'>
            <div className="title mb-3">
                <h1 className="h5 fw-bold text-slate-700">اطلاعات شما</h1>
            </div>
            <div className="insurance-info-new w-full">
                {stepFunc()}
            </div>
            <div>
                {/* <NextButton />
                <PreviousButton /> */}
            </div>
        </div>
    )
}

export default FirstPageStepsContainer
