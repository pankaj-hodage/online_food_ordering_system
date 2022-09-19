import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../../config";
import { useState, useEffect } from "react";

const UpdateRestaurant = () => {

  const id = sessionStorage.getItem("restaurentId");

  const [user, SetUser] = useState({});
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newContactNo, setNewContactNo] = useState("");

  const navigate = useNavigate();
 
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
   
    

    axios.get(`${config.serverURL}/user/getDetails/${id}`).then((Response) => {
      console.log(Response.data.data);
      SetUser(Response.data.data);
    });
  };

  const updateUser = () => {
    console.log("in update user")
    if (newName.length === 0) {
      setNewName(user.name);
    } else if (newContactNo.length === 0) {
      setNewContactNo(user.contact);
    } else if (newEmail.length === 0) {
      setNewEmail(user.email);
    } else if (newPassword.length === 0) {
      setNewPassword(user.password);
    } else {
      axios
        .put(
          `${config.serverURL}/user/update/${id}`,{
            contact_no:newContactNo,
              email:newEmail,
	             name:newName,
           password:newPassword
          }
        )
        .then((Response) => {
          const result = Response.data;

          if (result["status"] == "Success") {
            toast.success("update Successfully");

            // navigate to the signin page
            navigate("/restaurantHome");
          } else {
            toast.error(result["error"]);
          }
        });
    }
  };
  return (
    <div>
      <div style={{ marginTop: 30, marginBottom: 20 }}>
        <div style={styles.container}>
          <div className="mb-3">
            <label>Name</label>
            <input
              defaultValue={user.name}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              className="form-control"
              type="text"
              required=""
            />
          </div>

          <div className="mb-3">
            <label>Phone Number</label>
            <input
              defaultValue={user.contact}
              onChange={(e) => {
                setNewContactNo(e.target.value);
              }}
              className="form-control"
              type="tel"
              required=""
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              defaultValue={user.email}
              onChange={(e) => {
                setNewEmail(e.target.value);
              }}
              className="form-control"
              type="email"
              required=""
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              placeholder="******"
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              className="form-control"
              type="password"
              required=""
            />
          </div>

          <div className="mb-3" style={{ marginTop: 40 }}>
            <button
              onClick={updateUser}
              style={styles.signinButton}
              type="submit"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    height: 460,
    padding: 20,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#5C41A8",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  signinButton: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "#5C41A8",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};
export default UpdateRestaurant;
