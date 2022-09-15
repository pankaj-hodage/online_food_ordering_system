import axios from "axios"
import config from "../../../config"
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NavbarAdmin from "../../../components/navbarAdmin"
const GetRestaurantDetails=()=>{


    const location = useLocation()
    
    const [restaurantList, setRestaurantList] = useState([])
    useEffect(() => {
        // get the parameters (state object) sent by the previous page
        // navigate('/edit-home', { state: { userId: id } })
        // the state passed in the above statement can be accessed by location.state
        const { userId } = location.state
    
        // get the details of the home
        getDetails(userId)
      }, [])

      const getDetails = (id) => {
        axios.get( config.serverURL + '/resto/allRatings/'+id).then((response) => {
            // setDeliveryBoyList = response.data
            const result=response.data
            
            console.log(result)
            // console.log(response.data)
            if (result.status == 'Success') {
            //   setDeliveryBoyList(result.data)
            setRestaurantList(result.data)
            } else {
              alert('error while loading list of restaurant details List')
            }
          })
      }
   
   

    return(
        <div className='container-fluid'>
        <NavbarAdmin></NavbarAdmin>
        <div style={{textAlign:'center'}}>
            <h4>restaurant details</h4>
        </div>
        <table className='table table-responsive table-striped table-hover table-bordered'
         style={{marginTop:60}}>
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Customer Name</th>
                                   
                                    <th scope="col">Comment</th>
                                    <th scope="col">Rating</th>
                        
                                </tr>
                            </thead>
                            <tbody>
                                {restaurantList.map((user) => {
                                   return(<tr>
                                    <td scope="col">{user.id}</td>
                                    <td scope="col">{user.selectedCustomer.name}</td>
                                   
                                    <td scope="col">{user.comment}</td>
                                    <td scope="col">{user.rating}</td>
                        
                                </tr>)
                                  })}
                            </tbody>
                                </table>
    </div>
    )
}

export default GetRestaurantDetails;