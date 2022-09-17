import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Address.css";
import config from "../../config";
import { toast } from "react-toastify";
import CustHomeNv from "./../../components/CustHomeNv";
import { useForm } from "react-hook-form";

const SelectAddress = () => {
  const [address, setAddress] = useState([]);
  const userid = sessionStorage.getItem("customerId");
  let navigate = useNavigate();
  var result;
  useEffect(() => {
    getAllAddress();
    console.log(`address is loaded`);
  }, []);

  const getAllAddress = () => {
    axios.get(`${config.serverURL}/address/show/${userid}`).then((response) => {
      result = response.data;
      if (result.status === "Success") {
        setAddress(result.data);
        console.log(result.data);
        console.log(address);
        //result.data.forEach((add) => {console.log(add)})
      } else {
        toast.error("error while loading list of cart");
      }
    });
  };
  const nextPage = () => {
    var form = document.getElementById("FORM");
    const formData = new FormData(form);
    const addId = formData.get("radio");
    console.log("address id :" + addId);
    if (addId.length == 0) {
      toast.warning("please select address");
    } else {
      // sessionStorage.setItem("addressId" , addId)
      navigate("/Payment", { state: { addressId: addId } });
    }
  };
  const goToPage = () => {
    navigate("/AddAddress");
  };

  return (
    <div className="container-fluid">
      <CustHomeNv></CustHomeNv>
      <div class="myStyle">
        <form id="FORM">
          <h4 style={{ marginLeft: 240, marginTop: 20 }}>Address</h4>
          {address.map((add) => {
            return (
              <div
                class="form-check"
                style={{ marginLeft: 150, marginTop: 20 }}
              >
                <input
                  class="form-check-input"
                  type="radio"
                  name="radio"
                  id="flexRadioDefault1"
                  value={add.id}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  <div class="my_text">
                    <div>
                      {" "}
                      {add.line1}, {add.line2},
                    </div>
                    <div>
                      {add.city}, {add.state}, pin: {add.pincode}
                    </div>
                    <div> Mob:{add.contactNo}</div>
                  </div>
                </label>
              </div>
            );
          })}

          <button
            onClick={nextPage}
            className="btn btn-success "
            style={{ marginLeft: 240, marginTop: 50 }}
          >
            proceed
          </button>
          <button
            onClick={goToPage}
            className="btn btn-dark "
            style={{ marginLeft: 225, marginTop: 20 }}
          >
            Add address
          </button>
        </form>
      </div>
    </div>
  );
};

export default SelectAddress;

//     return(
//     <div class="myStyle">
//       <form id="FORM">
//          <table class="table m-0">
//                          <thead>
//                                  <tr>
//                                      <th scope="col">Line 1</th>
//                                      <th scope="col">Line 2</th>
//                                      <th scope="col">City</th>
//                                      <th scope="col">State</th>
//                                      <th scope="col">contact no</th>
//                                      <th scope="col">pinCode</th>

//                                  </tr>
//                              </thead>
//                              <tbody>

//                              {address.map((add) => {

//                                 return (
//                                     <tr>
//                                         {/* <div class="form-check"> */}
//   <input class="form-check-input" type="radio" name="radio" id="flexRadioDefault1" value={add.id}/>
//   <label class="form-check-label" for="flexRadioDefault1">
//                                     <td>{add.line1}</td>
//                                     <td>{add.line2}</td>ss
//                                     <td>{add.city}</td>
//                                     <td>{add.state}</td>
//                                     <td>{add.contactNo}</td>
//                                     <td>{add.pincode}</td>
//                                     </label>
//                                     {/* </div> */}

//                                   </tr>

//                                 )
//                                  })}

//                                 <button onClick={nextPage}type="submit" className="btn btn-success " style={ {marginLeft:240,marginTop:50}}>proceed</button>

//                              </tbody>
//             </table>
//             </form>
//         </div>
//     )
// }
