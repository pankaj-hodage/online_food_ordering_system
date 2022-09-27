import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Address.css";
import config from "../../config";
import { toast } from "react-toastify";
import CustHomeNv from "./../../components/CustHomeNv";

const Cart = () => {
  const [cart, setCart] = useState([]);
  let total = 0;
  const userid = sessionStorage.getItem("customerId");

  useEffect(() => {
    console.log(`Cart is loaded`);
    getCart();
  }, []);

  const getCart = () => {
    axios.get(`${config.serverURL}/cart/all/${userid}`).then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setCart(result.data);
        console.log(cart);
      } else {
        toast.error("error while loading list of cart");
      }
    });
  };
  const removeItem = (cartId) => {
    axios
      .delete(`${config.serverURL}/cart/delete/${cartId}`)
      .then((response) => {
        const result = response.data;
        if (result.status === "success") {
          toast.success(result.data);
          window.location.reload();
        } else {
          toast.error("error while deleteing cart");
        }
      });
  };

  return (
    <div className="container-fluid">
      <CustHomeNv></CustHomeNv>
      <section className="h-100 bg-dark" class="myStyle">
        <div>
          <table class="table m-0">
            <thead>
              <tr>
                {/* <th scope="col">cart_Id</th> */}
                {/* <th scope="col">MenuType</th> */}
                <th scope="col">Menu Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cart) => {
                total = total + cart.selectedMenu.price * cart.quantity;
                return (
                  <tr>
                    {/* <td>{cart.selectedMenu.menutype.menuType}</td> */}
                    <td>{cart.selectedMenu.productName}</td>
                    <td>{cart.quantity}</td>
                    <td>{cart.selectedMenu.price}</td>
                    <td>{cart.selectedMenu.price * cart.quantity}</td>
                    <td>
                      <button
                        onClick={() => removeItem(cart.id)}
                        type="button"
                        className="btn btn-danger btn-sm"
                        style={{ marginTop: 5 }}
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={{ marginLeft: 130 }}>
            <br />
            <h6>Order total : {total} + Rs.50 (delivery charge) </h6>
          </div>
        </div>
        <Link to="/SelectAddress">
          <button
            type="button"
            class="btn btn-info btn-sm"
            style={{ marginLeft: 240, marginTop: 50 }}
          >
            proceed
          </button>
        </Link>
        <Link to="/CustomerHomePage">
          <button
            type="button"
            class="btn btn-danger btn-sm"
            style={{ marginLeft: 250, marginTop: 10 }}
          >
            Back
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Cart;
