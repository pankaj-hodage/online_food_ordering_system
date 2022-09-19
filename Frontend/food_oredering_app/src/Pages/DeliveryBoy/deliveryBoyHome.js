import NavbarDeliveryBoy from "../../components/navbarDeliveryBoy";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const DeliveryBoyHome = () => {
  let navigate = useNavigate();
  const [orderList, setOrderList] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    console.log(` is loaded`);
    getOrderList();
  }, []);

  const getOrderList = () => {
    axios.get(config.serverURL + "/delivery/placedOrders").then((response) => {
      // setDeliveryBoyList = response.data
      const result = response.data;

      console.log(orderList);
      console.log(response.data);
      if (result.status === "success") {
        setOrderList(result.data);
      } else {
        alert("error while loading list of OrderList");
      }
    });
  };

  const acceptOrder = (Id) => {
    console.log("incart method");
    const deliveryBoyId = sessionStorage.getItem("deliveryBoyId");

    axios
      .put(
        `${config.serverURL}/delivery/update`,
        { orderId: Id, userId: deliveryBoyId },
        { "Content-Type": "application/json" }
      )
      .then((Response) => {
        const result = Response.data;

        if (result["status"] === "success") {
          console.log(result);
          navigate("/acceptedOrder");

          toast.success("Order Accepted");
          // window.location.reload();
        } else {
          toast.error("ERROR OCCURED...");
        }
      });
  };
 
    return(
       <div className="container-fluid">
        <NavbarDeliveryBoy></NavbarDeliveryBoy>
        <header style={{textAlign:"center",fontSize:30}}><b>New Orders</b></header>
        <table className='table table-responsive table-striped table-hover'
     style={{marginTop:60}}>
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Customer name</th>
                               
                                <th scope="col">Address</th>
                                <th scope="col">contact</th>
                                <th scope="col">Price</th>
                                <th scope="col">Order Time</th>
                               
                    
                            </tr>
                        </thead>
                        <tbody>
                            {orderList.map((order) => {
                               return(<tr>
                                <td scope="col">{order.id}</td>
                                <td scope="col">{order.customer.name}</td>
                               
                                <td scope="col"><p>{order.address.line1},{order.address.line2},
                                {order.address.city},{order.address.state} {order.address.pincode}</p></td>
                                <td scope="col">{order.address.contactNo}</td>
                                <td scope="col">Rs : {order.totalPrice}</td>
                                <td scope="col">{order.orderTime}</td>
                                
                                <td><button 
                                onClick={() => acceptOrder(order.id)}
                                className='btn' style={{backgroundColor:'#5C41A8', color:'white'}}>Accept</button></td>
                            </tr>)
                              })}
                        </tbody>
                            </table>
       </div>
    )
}


export default DeliveryBoyHome;
