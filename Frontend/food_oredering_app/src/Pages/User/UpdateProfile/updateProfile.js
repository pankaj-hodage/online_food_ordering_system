
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import config from '../../../config'
import { useState , useEffect  } from 'react'
const UpdateProfile=()=>{

   
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//    const [contactNo , setContactNo] = useState('')
   const [user , SetUser] = useState({})
//    const [user , SetUser] = useState({})
const [newName, setNewName] = useState('')
const [newEmail, setNewEmail] = useState('')
const [newPassword, setNewPassword] = useState('')
const [newContactNo , setNewContactNo] = useState('')
  
   const[PhoneNumber , setPhoneNumber] = useState(false)
   const[emailId , setEmailId] = useState(false)
   const[Name , setFName] = useState(false)
   const[codeWord , setCodeWord] = useState(false)
   
  
    const navigate = useNavigate();
    
    useEffect(()=>{
      
      getUserDetails();
        
    },[])
  
    const getUserDetails=()=>{

      //const id = sessionStorage.getItem("userId");
      const id=2;
      axios.get(`${config.serverURL}/user/getDetails/${id}` ).then((Response)=>{

        console.log(Response.data.data);
       
        user.name = Response.data.data.name;
        user.email = Response.data.data.email;
        user.password = Response.data.data.password;
        user.contactNo = Response.data.data.contact;
        SetUser(user);
        console.log(user);
        
      })
   }
    const updateUser = () => {
     // e.preventDefault();
     console.log(user);
       const updatedContact = PhoneNumber?newContactNo:user.contactNo;
       const updatedName = Name?newName:user.name;
       const updatedEmail = emailId?newEmail:user.email;
       const updatedPassword = codeWord?newPassword:user.password;
       const id=2;
       axios.put(`${config.serverURL}/user/update/${id}`,
             {
             'name':updatedName,
             'email':updatedEmail,
             'contact_no':updatedContact ,
             'password':updatedPassword},
             {"Content-Type": "application/json"}).then((Response)=>{

               const result = Response.data
                 
               if (result['status'] == 'Success') {
                 toast.success('update Successfully')
       
                 // navigate to the signin page
                 navigate("/CustomerHomePage")
               } else {
                 toast.error(result['error'])
               }
                
                
               })
     
      
    }
    return( <div>
        
    <div style={{ marginTop: 30 , marginBottom:20}}>
        
  <div style={styles.container}>
    <form>
    <div className='mb-3'>
      <label>Name</label>
      <input placeholder={user.name} 
                     onChange={(e) => {
                        setNewName(e.target.value);
                        setFName(true)
      }}
        className='form-control'
        type='text'
        required=''
      />
    </div>

    <div className='mb-3'>
      <label>Phone Number</label>
            <input placeholder={user.contactNo}
            onChange={(e) => {
                setNewContactNo(e.target.value);
                setPhoneNumber(true)
            }}
        className='form-control'
        type='tel'
        required=''
      />
    </div>

    <div className='mb-3'>
      <label>Email</label>
      <input
         defaultValue={user.email}
         onChange={(e) => {
            setNewEmail(e.target.value);
          setEmailId(true);
       }}
        className='form-control'
        type='email'
        required=''
      />
    </div>

    <div className='mb-3'>
      <label>Password</label>
      <input placeholder={user.password}
                          onChange={(e) => {
                            setNewPassword(e.target.value);
                           setCodeWord(true)
                        }}
        className='form-control'
        type='password'
        required=''
      />
    </div>

    
   

    <div className='mb-3' style={{ marginTop: 40 }}>
      
      <button  onClick={updateUser} style={styles.signinButton} type="submit">
        Update
      </button>
    </div>
    </form>
  </div>
</div>
</div>)
}

const styles = {
    container: {
      width: 400,
      height: 460,
      padding: 20,
      position: 'relative',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 'auto',
      borderColor: '#5C41A8',
      borderRadius: 10,
      broderWidth: 1,
      borderStyle: 'solid',
      boxShadow: '1px 1px 20px 5px #C9C9C9',
    },
    signinButton: {
      position: 'relative',
      width: '100%',
      height: 40,
      backgroundColor: '#5C41A8',
      color: 'white',
      borderRadius: 5,
      border: 'none',
      marginTop: 10,
    },
  }
export default UpdateProfile