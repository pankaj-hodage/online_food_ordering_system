import axios from 'axios'
import { useState,useEffect } from 'react'
import {  Link,useNavigate } from 'react-router-dom'
import './Address.css'
import config from '../../config'
import { toast } from 'react-toastify'
import CustHomeNv from './../../components/CustHomeNv';
import {useForm} from "react-hook-form";


const SelectAddress=()=>{
    
    const[address,setAddress]=useState([])
    const {register, handleSubmit} = useForm();
    const userid = 2//sessionStorage.getItem("userId")

    useEffect(() => {
        
        getAddress()
        console.log(`address is loaded`)
      }, [])

        const getAddress=()=>{

        axios.get( `${config.serverURL}/address/show/${userid}`).then((response) => {
            const result = response.data
            setAddress(result.data)
            // if (result.status === 'success') {
            //   setAddress(result.data)
            // } else {
            //   toast.error('error while loading Address')
          
            // }
          })
    }
    function onSubmitButton(data) {
        console.log(data)
    }

    return(
    <div>
         <table class="table m-0">
                         <thead>
                                 <tr>
                                     <th scope="col">Line 1</th>
                                     <th scope="col">Line 2</th>
                                     <th scope="col">City</th>
                                     <th scope="col">State</th>
                                     <th scope="col">contact no</th>
                                     <th scope="col">pinCode</th>

                                 </tr>
                             </thead>
                             <tbody>
                             <form onSubmit={handleSubmit(onSubmitButton)}>
                             {address.map((addresse) => {
                              
                                return (
                                    <tr>
                                    <input
                    {...register("option")}
                    type="radio"
                    name="id"
                    value={address.id}
                    id="name"
                />
                                    <td>{addresse.line1}</td>
                                    <td>{addresse.line2}</td>
                                    <td>{addresse.city}</td>
                                    <td>{addresse.state}</td>
                                    <td>{addresse.contactNo}</td>
                                    <td>{addresse.pincode}</td>
                                  </tr>
                                )
                                 })}
                                <button type="submit" className="btn btn-success ">proceed</button>
                                 </form>
                             </tbody>
            </table>
        </div>
    )
}

export default SelectAddress