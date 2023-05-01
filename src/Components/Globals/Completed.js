import React from 'react'

const Completed = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center car-and-insurance-info px-3 px-md-5 pt-3'>
      <div class="title mb-3">
          <h1 class="h5 fw-bold">پیش نویس بیمه نامه</h1>
        </div>
        <div class="insurance-info-new">
          <div class="insurance-info-title mt-2">
            <h2 class="h6 fw-bold"><i class="fa fa-file-text ms-1"></i>مشخصات بیمه نامه جدید</h2>
          </div>
          <ul class="insurance-info-box rounded p-0">
            <li class="d-flex align-items-center justify-content-between text-no-wrap mb-4">
              <span class="text-nowrap">شرکت بیمه گذار</span>
              <div class="insurance-company d-flex align-items-center">
                <span class="insurance-company-name text-nowrap mx-3">بیمه تجارت نو</span>
                {/* <div class="insurance-company-logo">
                  <img src="./images/asia.png" width="40" alt="" />
                </div> */}
              </div>
            </li>
            <li class="d-flex align-items-center mb-4">
              <span>نوع پرداخت</span>
              <span>نقدی</span>
            </li>
            <li class="d-flex align-items-center mb-4">
              <span>تعهدات مالی</span>
              <span>20,000,000 تومان</span>
            </li>
            <li class="d-flex align-items-center mb-4">
              <span>مدت قرارداد</span>
              <span>یکساله</span>
            </li>
          </ul>
        </div>
        <ul class="row mx-0 mt-4 btn-actions list-unstyled justify-content-between d-flex mt-3 px-0" dir="ltr">
          <li class="col px-1">
            <div class="modal fade text-end" id="payment-confirm-modal" tabindex="-1"
              aria-labelledby="exampleModalLabel" aria-hidden="true" dir="rtl">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content small">
                  <div class="modal-header justify-content-between bg-light py-2">
                    <h5 class="h6 modal-title" id="exampleModalLabel">تائید پرداخت</h5>
                    <button type="button" class="btn-close m-0 w-auto" data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div
                      class="section-pelak-car d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
                      <span class="text-muted">پلاک خودرو</span>
                      <div class="pelak-car">
                        <span class="text-center border rounded-end px-2 py-1">99</span>
                        <span class="text-center border border-end-0 rounded-start px-2 py-1">144 ل
                          89</span>
                      </div>
                    </div>
                    <div
                      class="section-walet d-flex justify-content-between align-items-center border-bottom pb-4 mb-4">
                      <div class="credit">
                        <span class="mb-2">
                          استفاده از کیف پول آیتول
                        </span>
                        <span class="tooltip-click">
                          <i class="fa fa-question"></i>
                        </span>
                        <div class="hover-tooltip">
                          <p class="text-white mb-0">
                            متن تستی متن تستی متن تستی متن تستی
                          </p>
                        </div>
                        <span class="d-block text-muted">اعتبار 0 تومان</span>
                      </div>
                      <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                          checked />
                      </div>
                    </div>
                    <div class="discount-code position-relative pb-4">
                      <div class="form-check form-switch form-switch-percent">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                      </div>
                      <span>کد تخفیف دارید؟</span>
                      <div class="align-items-center position-absolute left-0 hide mb-5">
                        <ul class="row list-unstyled mx-0 mb-0 px-0" dir="ltr">
                          <li class="col">
                            <input type="password" class="form-control mt-1 flex-grow-1 w-100" />
                          </li>
                          <li class="col p-1">
                            <button
                              class="btn btn-sm h-auto px-sm-3 btn-outline-primary btn-register-percent float-start">ثبت
                              کد تخفیف</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer justify-content-start flex-wrap mt-3">
                    <div class="details flex-grow-1">
                      <h6 class="title fw-bold fs-6">جزییات پرداخت</h6>
                      <ul class="list-unstyled p-0">
                        <li class="d-flex justify-content-between align-items-center mb-3">
                          <span>نوع سرویس</span>
                          <span>تمدید بیمه شخص ثالث</span>
                        </li>
                        <li class="d-flex justify-content-between align-items-center">
                          <span class="fw-bold">مبلغ قابل پرداخت</span>
                          <span class="text-green">2,345,678 تومان</span>
                        </li>
                      </ul>
                    </div>
                    <button type="button" class="btn single-btn w-100 text-white">پرداخت (2,345,678 تومان) </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
    </div>
  )
}

export default Completed
