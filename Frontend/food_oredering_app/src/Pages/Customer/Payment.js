
import CustHomeNv from './../../components/CustHomeNv';
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link, useNavigate,useLocation } from 'react-router-dom'
import config from '../../config'
import { toast } from 'react-toastify'

const Payment=()=>{

    const userId=1//sessionStorage.getItem("userId")
   // const addressId=2//sessionStorage.getItem("addressId")
    const location = useLocation()
    const navigate = useNavigate();
    const { addressId } = location.state

    // useEffect(() => {
    //   }, [])
    const makePayment=()=>{

        var form= document.getElementById("FORM")
        const formData = new FormData(form);
        const payMode=formData.get('paymentMode')
        console.log("paymentMode :"+payMode)
        if (payMode.length == 0) {
          toast.warning('please select payment mode')
      } else{
        axios.post(`${config.serverURL}/order/place` ,{'userId' :userId,'addressId':addressId,'paymentMode':payMode},{"Content-Type": "application/json"}).then((Response)=>{
            toast.success("Order placed Successfully !!!")
            navigate("/CustomerHomePage");
          })
      }
    }

    return(
        <div className="container">
        <CustHomeNv></CustHomeNv>
  <section className="h-100 bg-dark" class="paymentStyle">
        <div class="fs-1 fw-bold" style={ {marginLeft:140,marginTop:20,textDecoration:Animation}}>PAYMENT PAGE</div>
       
        <form id="FORM" action='/CustomerHomePage'>
            
        <div class="form-check"style={ {marginLeft:200,marginTop:20}}> 
        <input class="form-check-input" type="radio" name="paymentMode" id="flexRadioDefault1" value="COD"/>
        <label class="form-check-label" for="flexRadioDefault1"><h5>COD </h5></label>
       </div>
       <div class="form-check"style={ {marginLeft:200,marginTop:20}}> 
        <input class="form-check-input" type="radio" name="paymentMode" id="flexRadioDefault1" value="CREDIT_CARD"/>
        <label class="form-check-label" for="flexRadioDefault1"><h5>CREDIT CARD</h5> </label>
       </div>
       <div class="form-check"style={ {marginLeft:200,marginTop:20}}> 
        <input class="form-check-input" type="radio" name="paymentMode" id="flexRadioDefault1" value="CDEBIT_CARDOD"/>
        <label class="form-check-label" for="flexRadioDefault1"><h5>DEBIT CARD</h5> </label>
       </div>
       <div class="form-check"style={ {marginLeft:200,marginTop:20}}> 
        <input class="form-check-input" type="radio" name="paymentMode" id="flexRadioDefault1" value="UPI"/>
        <label class="form-check-label" for="flexRadioDefault1"><h5>UPI</h5> </label>
       </div>
       <div class="form-check"style={ {marginLeft:200,marginTop:20}}> 
        <input class="form-check-input" type="radio" name="paymentMode" id="flexRadioDefault1" value="NETBANKING"/>
        <label class="form-check-label" for="flexRadioDefault1"><h5>NETBANKING</h5> </label>
       </div>
       <button onClick={makePayment} className="btn btn-success " style={ {marginLeft:200,marginTop:50}}>PLACE ORDER</button>
        </form>
  </section>
  </div>
    )
}

export default Payment;