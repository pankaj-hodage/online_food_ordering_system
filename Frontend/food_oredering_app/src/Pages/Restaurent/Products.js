
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import config from '../../config'
import { toast } from 'react-toastify'
import RestoNav from '../../components/RestoNav'
import './Resto.css'

const Products=()=>{
    
    const[menuList,setMenuList]=useState([])
    const restoId=7//sessionStorage.getItem("userId")

    useEffect(() => {
        console.log(`menus loaded`)
        getMenus()
      }, [])

    const getMenus = () => {
        
          axios.get( `${config.serverURL}/menu/allMenuOfResto/${restoId}`).then((response) => {
          const result = response.data
          if (result.status === 'success') {
            setMenuList(result.data)
            
          } else {
            toast.error('error while loading list of menus')
        
          }
        })
    }

    return(
        <div className="container-fluid">
        <RestoNav/>
        <section className="h-100 bg-dark" class="productStyle">
        <div >
        <table class="table table-striped">
                      <thead  class="thead-dark">
                          <tr>
                              <th scope="col">Product Name</th>
                              <th scope="col">Category</th>
                              <th scope="col">status</th>
                              <th scope="col">Price</th>
                              <th scope="col">Actions</th>   
                          </tr>    
                      </thead>
                      <tbody>
                        {
                            menuList.map((menu)=>{

                                const status=menu.status==1?'AVAILABLE':'NOT-AVAILABLE'

                                return(
                                    <tr>
                                        <td>{menu.productName}</td>
                                        <td>{menu.category.name}</td>
                                        <td>{status}</td>
                                        <td>{menu.price}</td>
                                        <td> <button type="button" class="btn btn-warning btn-sm">EDIT</button>
                                        </td>
                                    </tr>
                                )
                            })

                        }

                      </tbody>
        </table>  
        <button type="button" class="btn btn-danger btn-sm" style={ {marginLeft:250,marginTop:30}}>ADD MENU</button>
        </div>
        </section>
        </div>
    )
}

export default Products