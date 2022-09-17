import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import config from "../../config";
import { toast } from "react-toastify";
import RestoNav from "../../components/RestoNav";

const AddMenu = () => {
  const [menuName, setMenuName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [file, setFile] = useState("");
  const [data, setData] = useState(undefined);
  const [categoryList, setCategoryList] = useState([]);

  const restoId = sessionStorage.getItem("restaurentId");
  const navigate = useNavigate();

  useEffect(() => {
    allCategories();
  }, []);

  const allCategories = () => {
    axios.get(`${config.serverURL}/category/all`).then((Response) => {
      const result = Response.data;

      if (result["status"] === "success") {
        console.log(result);
        setCategoryList(result["data"]);
      } else {
        toast.error("ERROR OCCURED...");
      }
    });
  };

  const addNewMenu = () => {
    if (menuName.length === 0) {
      toast.warning("enter name");
    } else if (description.length === 0) {
      toast.warning("enter description");
    } else if (price.length === 0) {
      toast.warning("enter prive");
    } else if (categoryId.length === 0) {
      toast.warning("choose Category");
    } else if (file.length === 0) {
      toast.warning("choose image");
    } else {
      const body = new FormData();
      body.set("menuName", menuName);
      body.set("description", description);
      body.set("price", price);
      body.set("restaurent", restoId);
      body.set("catagory", categoryId);
      body.set("imageName", file);

      // axios.post(`${config.serverURL}/menu/add`,{"menuName":menuName,"description":description,
      // "price":price, "restaurent":restoId, "catagory":categoryId}
      axios.post(`${config.serverURL}/menu/add`, body).then((Response) => {
        const result = Response.data;

        if (result["status"] === "Success") {
          toast.success("New menu added");
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
          MENU{" "}
        </h3>

        <div className="form-outline mb-4">
          <label className="form-label" for="form3Example97">
            Name
          </label>
          <input
            type="text"
            id="form3Example97"
            className="form-control form-control-lg"
            onChange={(e) => {
              setMenuName(e.target.value);
            }}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" for="form3Example97">
            Description
          </label>
          <input
            type="text"
            id="form3Example97"
            className="form-control form-control-lg"
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
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" for="form3Example97">
            Category &nbsp;&nbsp;
          </label>
          <select
            className="form-select form-select mb-3"
            aria-label=".form-select-lg example"
            onChange={(e) => {
              setCategoryId(e.target.value);
            }}
          >
            <option value="">select Category</option>
            {categoryList.map((cat) => {
              return <option value={cat.id}>{cat.name}</option>;
            })}
          </select>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" for="form3Example97">
            image
          </label>
          <input
            type="file"
            id="form3Example97"
            className="form-control form-control-lg"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>

        <button
          onClick={addNewMenu}
          type="submit"
          className="btn btn-success "
          style={{ marginLeft: 220 }}
        >
          Submit
        </button>
      </section>
    </div>
  );
};

export default AddMenu;
