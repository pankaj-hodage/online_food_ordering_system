import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Address.css";
import config from "../../config";
import { toast } from "react-toastify";
import CustHomeNv from "../../components/CustHomeNv";

const MyOrders = () => {
  const [orderList, setOrderList] = useState([]);
  const [orderDetailsList, setOrderDetailsList] = useState([]);
  const userid = sessionStorage.getItem("customerId");

  useEffect(() => {
    getOrderDetails();
  }, []);

  const getOrderDetails = () => {
    axios
      .get(`${config.serverURL}/order/myorders/${userid}`)
      .then((response) => {
        const result = response.data;
        if (result.status === "success") {
          setOrderList(result.data);
          console.log(result.data);
        } else {
          toast.error("error while loading order list");
        }
      });
  };

  const loadList = (list) => {
    setOrderDetailsList(list);
    return orderDetailsList;
  };

  return (
    <div className="container-fluid">
      <CustHomeNv></CustHomeNv>
      <section className="h-100 bg-dark" class="myStyle">
        <div>
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                {/* <th scope="col">cart_Id</th> */}
                {/* <th scope="col">MenuType</th> */}
                <th scope="col">Details</th>
                <th scope="col">Total Bill</th>
                <th scope="col">Order status</th>
                <th scope="col">Pay status</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((list) => {
                // const oList = loadList(list);
                return (
                  <tr>
                    <td>
                      {list.orderDetails.map((details) => {
                        return (
                          <div>
                            {details.selectedProduct.productName}-
                            {details.quantity}
                          </div>
                        );
                      })}
                    </td>
                    {/* <td>{list.orderDetails[0].selectedProduct.productName}</td> */}
                    <td>{list.order.totalPrice}</td>
                    <td>{list.order.status}</td>
                    <td>{list.payment.paymentStatus}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyOrders;
