import axios from 'axios'
import { useState, useEffect } from 'react'
import NavbarAdmin from '../../../components/navbarAdmin';


import config from '../../../config';

const DeliveryBoyList = () => {
  
    const [deliveryBoyList, setDeliveryBoyList] = useState([])
    const [searchTerm, setsearchTerm]=useState("");
  
    useEffect(() => {
      console.log(` is loaded`)
      getDeliveryBoyList()
    }, [])
  
    const getDeliveryBoyList = () => {
      axios.get( config.serverURL + '/admin/getAllDeliveryBoy').then((response) => {
        // setDeliveryBoyList = response.data
        const result=response.data
        
        console.log(deliveryBoyList)
        console.log(response.data)
        if (result.status === 'Success') {
          setDeliveryBoyList(result.data)
        } else {
          alert('error while loading list of DeliveryBoyList')
        }
      })
    }
  
    return (
  
        <div className='container-fluid'>
            <NavbarAdmin></NavbarAdmin>
            <header style={{textAlign:"center",fontSize:30}}><b>DeliveryBoy List</b></header>
            <table className='table table-responsive table-striped table-hover table-bordered'
             style={{marginTop:60}}>
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">name</th>
                                       
                                        <th scope="col">Email</th>
                                        <th scope="col">contact</th>
                            
                                    </tr>
                                </thead>
                                <tbody>
                                    {deliveryBoyList.map((user) => {
                                       return(<tr>
                                        <td scope="col">{user.id}</td>
                                        <td scope="col">{user.name}</td>
                                       
                                        <td scope="col">{user.email}</td>
                                        <td scope="col">{user.contact}</td>
                            
                                    </tr>)
                                      })}
                                </tbody>
                                    </table>
        </div>
    )
  }
  
  export default DeliveryBoyList;