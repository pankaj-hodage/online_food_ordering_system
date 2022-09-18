import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import config from "../../config";
import { toast } from "react-toastify";
import RestoNav from "../../components/RestoNav";

const EditMenu = () => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [menu, setMenu] = useState("");

  const location = useLocation();
  const { menuId } = location.state;

  const navigate = useNavigate();

  useEffect(() => {
    getDetails(menuId);
  }, []);

  const getDetails = (id) => {
    axios.get(config.serverURL + "/menu/getById/" + id).then((response) => {
      const result = response.data;
      if (result["status"] === "success") {
        // set the details
        setMenu(result["data"]);

        setStatus(menu.status);
        console.log(result["data"]);
      } else {
        toast.error("menu not found");
      }
    });
  };

  const editMenu = () => {
    if (description.length === 0) {
      setDescription(menu.description);
    } else if (price.length === 0) {
      setPrice(menu.price);
    } else if (status.length === 0) {
      setStatus(menu.status);
    } else {
      axios
        .put(
          `${config.serverURL}/menu/edit/${menuId}`,
          { description: description, price: price, status: status }
          // axios.post(`${config.serverURL}/menu/add`,body
        )
        .then((Response) => {
          const result = Response.data;

          if (result["status"] === "Success") {
            toast.success("menu edited successfully");
            navigate("/Products");
          } else {
            toast.error("ERROR OCCURED...");
          }
        });
    }
  };

  return (
    <div className="container-fluid">
      <RestoNav />
      <section className="h-100 bg-dark" class="menuStyle">
        <h3 className="mb-5 text-uppercase" style={{ textAlign: "center" }}>
          {" "}
          EDIT MENU{" "}
        </h3>

        <div>
          <h4>PRODUCT NAME : {menu.productName}</h4>
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" for="form3Example97">
            Description
          </label>
          <input
            type="text"
            id="form3Example97"
            className="form-control form-control-lg"
            defaultValue={menu.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" for="form3Example97">
            price
          </label>
          <input
            type="number"
            id="form3Example97"
            className="form-control form-control-lg"
            defaultValue={menu.price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" for="form3Example97">
            Status &nbsp;&nbsp;
          </label>
          <select
            className="form-select form-select mb-3"
            aria-label=".form-select-lg example"
            defaultValue={menu.status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="">select</option>
            <option value="1">AVAILABLE</option>
            <option value="0">NOT-AVAILABLE</option>
          </select>
        </div>

        <button
          onClick={editMenu}
          type="submit"
          className="btn btn-success "
          style={{ marginLeft: 220 }}
        >
          SAVE
        </button>
      </section>
    </div>
  );
};

export default EditMenu;
