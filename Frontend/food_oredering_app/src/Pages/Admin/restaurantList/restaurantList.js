import axios from "axios";
import { useState, useEffect } from "react";
import config from "../../../config";
import NavbarAdmin from "../../../components/navbarAdmin";
import { Link } from "react-router-dom";
import GetRestaurantDetails from "./getRestaurantDetails";
import { useNavigate } from "react-router-dom";
const RestaurantList = () => {
  const navigate = useNavigate();
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");

  useEffect(() => {
    console.log(` is loaded`);
    getRestaurantList();
  }, []);

  const getRestaurantList = () => {
    axios.get(config.serverURL + "/admin/getAllRestaurant").then((response) => {
      // setDeliveryBoyList = response.data
      const result = response.data;

      console.log(restaurantList);
      console.log(response.data);
      if (result.status === "Success") {
        setRestaurantList(result.data);
      } else {
        alert("error while loading list of Restaurant List");
      }
    });
  };

  const GetDetails = (id) => {
    navigate("/getRestaurantDetails", { state: { restaurentId: id } });
  };

  const GetMenu = (id) => {
    navigate("/getRestaurantMenu", { state: { restaurentId: id } });
  };

  return (
    <div className="container-fluid">
      <NavbarAdmin></NavbarAdmin>
      <header style={{ textAlign: "center", fontSize: 30 }}>
        <b>Restaurants List</b>
      </header>
      <table
        className="table table-responsive table-striped table-hover table-bordered"
        style={{ marginTop: 60 }}
      >
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">name</th>

            <th scope="col">Email</th>
            <th scope="col">contact</th>
          </tr>
        </thead>
        <tbody>
          {restaurantList.map((user) => {
            return (
              <tr>
                <td scope="col">{user.id}</td>
                <td scope="col">{user.name}</td>

                <td scope="col">{user.email}</td>
                <td scope="col">{user.contact}</td>
                <td>
                  <button
                    onClick={() => GetDetails(user.id)}
                    className="btn"
                    style={{ backgroundColor: "#5C41A8", color: "white" }}
                  >
                    Review
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => GetMenu(user.id)}
                    className="btn"
                    style={{ backgroundColor: "#5C41A8", color: "white" }}
                  >
                    Menu
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantList;
