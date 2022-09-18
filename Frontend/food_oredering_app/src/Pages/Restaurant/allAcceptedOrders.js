import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import config from '../../config'
import { toast } from 'react-toastify'
import RestoNav from '../../components/RestoNav'
const AllAcceptedOrders=()=>{

    const navigate = useNavigate()
    const [orderList, setOrderList] = useState([]);
    
    const [status, setStatus] = useState('')
  
    useEffect(() => {
      console.log(` is loaded`)
      getOrderList()
    }, [])
  
    const getOrderList = () => {
        const id=sessionStorage.getItem("restaurentId");
      axios.get( config.serverURL + '/resto/allAcceptedOrders/'+id).then((response) => {
        // setDeliveryBoyList = response.data
        const result=response.data
        
        console.log(orderList)
        console.log(response.data)
        if (result.status === 'success') {
            setOrderList(result.data)
        } else {
          alert('error while loading list of OrderList')
        }
      })
    }

    const UpdateStatus = (id) => {
        
      axios.put(   `${config.serverURL}/resto/updateStatus/${id}/${status}`).then((response) => {
        // setDeliveryBoyList = response.data
        const result=response.data
        
        console.log(orderList)
        console.log(response.data)
        if (result.status === 'success') {

            toast.success('Status Updated Successfully')
            window.location.reload();
        } else {
            toast.error('ERROR OCCURED...')
        }
      })
    }


    return (<div className="container-fluid">
    <RestoNav/>
    <header style={{textAlign:"center",fontSize:30}}><b>Accepted Orders</b></header>
    <table className='table table-responsive table-striped table-hover' 
 style={{marginTop:60,fontSize:12}}>
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                            <th scope="col">Customer name</th>
                           
                            <th scope="col">Address</th>
                            <th scope="col">contact</th>
                            <th scope="col">product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Order Time</th>
                            <th scope="col">Status</th>
                
                        </tr>
                    </thead>
                    <tbody>
                        {orderList.map((order) => {
                           return(<tr>
                            <td scope="col">{order.currentOrder.id}</td>
                            <td scope="col">{order.currentOrder.customer.name}</td>
                           
                            <td scope="col"><p>{order.currentOrder.address.line1},{order.currentOrder.address.line2},
                            {order.currentOrder.address.city},{order.currentOrder.address.state} {order.currentOrder.address.pincode}</p></td>
                            <td scope="col">{order.currentOrder.address.contactNo}</td>
                            
                            <td scope="col">{order.selectedProduct.productName}</td>
                            <td scope="col">{order.quantity}</td>
                            <td scope="col">{order.currentOrder.orderTime}</td>
                            <td scope="col">{order.currentOrder.status}</td>
                            <td>
                                
                                <select className="form-select form-select mb-3" aria-label=".form-select-lg example"
                                required=''
                                onChange={(event) => {
                                    setStatus(event.target.value)
                                }}>
                                {/* <option selected>Select Role</option> */}
                                <option value="">select</option>
                                <option value="PACKING">Packing</option>
                                <option value="READY">Ready</option>
                                
                                </select>
                            </td>
                            <td><button 
                            onClick={() => UpdateStatus(order.currentOrder.id)}
                            className='btn' style={{backgroundColor:'#5C41A8', color:'white'}}>Update</button></td>
                        </tr>)
                          })}
                    </tbody>
                        </table>
   </div>)
}
export default AllAcceptedOrders