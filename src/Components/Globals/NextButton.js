import React, { useContext } from 'react'
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import Swal from 'sweetalert2';
import DateObject from 'react-date-object';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NextButton = ({step, setStep, postForm}) => {
//   const navigate = useNavigate();

//   function postData(){
//     axios.post('http://127.0.0.1:8000/api/jobs',{
//         step : state.step,
//         relativity : state.relativity,
//         first_job : state.first_job,
//         second_job : state.second_job,
//         job_name : state.job_name,
//         birth_day : state.birth_day,
//         birth_month : state.birth_month,
//         birth_year : state.birth_year,
//         age : state.age,
//         insurance_length : state.insurance_length,
//         payment_method : state.payment_method,
//         first_payment : state.first_payment,
//     }).then((response)=>{
//       console.log(response.data);
//       navigate('/second');
//     }).catch((error)=>{
//       console.log(error);
//     })
//   }

  const checkCondition = () => {
    switch (step) {
      case 0:
        return checkVehicleKind();
        break;
      case 1:
        return checkMethod()
        break;
      case 2:
        return checkPlaque()
        break;
    //   case 4:
    //     return checkInsuranceLengthCondition()
    //     break;
    //   case 5:
    //     return checkPaymentMethodCondition()
    //     break;
    //   case 6:
    //     return checkFirstPaymentCondition()
    //     break;
    }
  }
    
    const checkVehicleKind = () => {
        console.log('222222222')
        if(postForm.system_name != null && postForm.kind_id != null && postForm.kind_name != null && postForm.system_id != null ){
          return true;
        }
        Swal.fire('لطفا نوع و مدل خودرو را پر کنید');
        return false;
    }
    
    const checkMethod = () => {
      if(postForm.method_name != null && postForm.method_value > 0){
        return true;
      }
      Swal.fire('لطفا نحوه تمدید و مقدار مربوط به آن را پر کنید');
      return false;
    }
    
    const checkPlaque = () => {
      if(postForm.plaque == null){
         Swal.fire('لطفا وضعیت تعویض پلاک را مشخص کنید');
         return false;
      }
      return true;
    }
    
//     const checkInsuranceLengthCondition = () => {
//       if(state.insurance_length == '' || isNaN(state.insurance_length)){
//         Swal.fire('مدت بیمه نامه را مشخص کنید');
//         return 0;
//       }
//     return 1
//   }

//   const checkPaymentMethodCondition = () => {
//     if(state.payment_method == 0){
//       Swal.fire('نحوه پرداخت را مشخص کنید')
//       return 0;
//     }
//     return 1
//   }

//   const checkFirstPaymentCondition = () => {
//     if((state.payment_method == 0 || state.payment_method == 1 || state.payment_method == 2) && state.first_payment < 400000){
//       Swal.fire('پرداختی سال اول باید بالای 400 هزار تومان باشد');
//       return 0;
//     } 
//     else if(state.payment_method == 3 && state.first_payment < 600000){
//       Swal.fire('پرداختی سال اول باید بالای 600 هزار تومان باشد');
//       return 0;
//     }else{
//       postData();
//     }
//     return 1
//   }

  return (
    <div>
        <button className="border-0 px-sm-5 text-white btn-right float-none float-sm-end fw-bold bg-green-500 rounded py-2 px-4" 
        onClick={() => {
            console.log('step',step)
            if(checkCondition() && step < 2){
                console.log('wwwwwwwwwww')
              setStep(step + 1);
            }
        }}
        >{step == 2 ? 'استعلام قیمت' : 'بعدی'}</button>
    </div>
  )
}

export default NextButton
