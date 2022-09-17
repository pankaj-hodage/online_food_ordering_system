import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Address.css";
import config from "../../config";
import { toast } from "react-toastify";

const AddAddress = () => {
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, SetAddress] = useState({});
  let [data, setData] = useState(undefined);

  const navigate = useNavigate();

  useEffect(() => {
    const id = sessionStorage.getItem("customerId");

    if (data !== undefined) {
      axios
        .post(
          `${config.serverURL}/address/add/${id}`,
          {
            line1: line1,
            line2: line2,
            city: city,
            state: state,
            contactNo: contactNo,
            pincode: pincode,
          },
          { "Content-Type": "application/json" }
        )
        .then((Response) => {
          toast.success("Address Added Successfully !!!");
          navigate("/SelectAddress");
        });
    }
  }, [data]);

  const addUserAddress = (e) => {
    if (line1.length === 0) {
      toast.error("please add Address line");
    } else if (city.length === 0) {
      toast.error(" please addcity");
    } else if (state.length === 0) {
      toast.error("please add state");
    } else if (pincode.length === 0) {
      toast.error("please Enter pincode ");
    } else if (contactNo.length === 0) {
      toast.error("please Enter contact no");
    } else {
      e.preventDefault();
      console.log(`addressLine1 = ${line1}`);
      console.log(`addressLine1 = ${line2}`);
      console.log(`city = ${city}`);
      console.log(`state= ${state}`);
      console.log(`country = ${contactNo}`);
      console.log(`pinCode= ${pincode}`);

      data = {};
      data.line1 = line1;
      data.line2 = line2;
      data.city = city;
      data.state = state;
      data.contactNo = contactNo;
      data.pincode = pincode;
      setData(data);
    }
  };

  const back = () => {
    navigate("/SelectAddress");
  };
  return (
    <section className="h-100 bg-dark" class="myStyle">
      <h3 className="mb-5 text-uppercase" style={{ textAlign: "center" }}>
        ADDRESS{" "}
      </h3>

      <div className="form-outline mb-4">
        <label className="form-label" for="form3Example97">
          AddressLine 1
        </label>
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
          onChange={(e) => {
            setLine1(e.target.value);
          }}
        />
      </div>

      <div>
        <label className="form-label" for="form3Example97">
          AddressLine 2
        </label>
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
          onChange={(e) => {
            setLine2(e.target.value);
          }}
        />
      </div>

      <div>
        <label className="form-label" for="form3Example97">
          City
        </label>
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>
      <div>
        <label className="form-label" for="form3Example97">
          State
        </label>
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
      </div>
      <div>
        <label className="form-label" for="form3Example97">
          ContactNo{" "}
        </label>
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
          onChange={(e) => {
            setContactNo(e.target.value);
          }}
        />
      </div>
      <div className="form-outline mb-4">
        <label className="form-label" for="form3Example97">
          pinCode{" "}
        </label>
        <input
          type="text"
          id="form3Example97"
          className="form-control form-control-lg"
          onChange={(e) => {
            setPincode(e.target.value);
          }}
        />
      </div>

      <button
        onClick={addUserAddress}
        type="submit"
        className="btn btn-success "
      >
        Submit
      </button>
      <button
        onClick={back}
        type="submit"
        className="btn btn-dark "
        style={{ margin: 20 }}
      >
        Back
      </button>
    </section>
  );
};

export default AddAddress;
