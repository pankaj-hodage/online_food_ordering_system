
import CustHomeNv from './../../components/CustHomeNv';
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import config from '../../config'
import { toast } from 'react-toastify'
import IncDecCounter from './IncDecCounter';


const CustomerHome=()=>{
   
    const [category,setCategory] = useState([])
    const [menu,setMenu] = useState([])
    const[quantity,setQuantity]=useState(0)
    const [image,setImages]=useState([])

    useEffect(() => {
        allCategories()
        allMenus()
      },[]);
     
      const allCategories=()=>{
        axios.get(`${config.serverURL}/category/all`,).then((Response)=>{

            const result = Response.data

            if (result['status'] === 'success') {
              console.log(result)
              setCategory(result['data'])
            } else {
              toast.error('ERROR OCCURED...')
            }
        })
      }

      const allMenus=()=>{
        axios.get(`${config.serverURL}/menu/allMenus`,).then((Response)=>{

            const result = Response.data

            if (result['status'] === 'success') {
              console.log(result)
              setMenu(result['data'])
            } else {
              toast.error('ERROR OCCURED...')
            }
        })
      }
      const addToCart=(id)=>{
        const userId = 1 //sessionStorage.getItem("userId");

        axios.post(`${config.serverURL}/cart/add`,{"menuId" :id,"userId" :userId,
        "quantity" :1},{"Content-Type": "application/json"}).then((Response)=>{

            const result = Response.data

            if (result['status'] === 'success') {
              console.log(result)
              toast.success('menu added to cart')
            } else {
              toast.error('ERROR OCCURED...')
            }
        })
      }

    // const loadImage=(menuId)=>{
    //     axios.post(`${config.serverURL}/menu/image/${menuId}`).then((Response)=>{

    //         setImages( Response.data)
    //     })
    // }

    return(
        <div className="container">
        <CustHomeNv/>
        <div className="container">
        { 
        category.map((cat)=>{

            return(
                <button onClick={CustomerHome} type="submit" className="btn btn-outline-primary btn-lg" style={ {margin:20}}>{cat.name}</button>  
            )
        })}
        </div>
        <div className='row'>
        {menu.map((m)=>{

            
            return (
            <div
              key={m.id}
              className='col-3'
              style={{
                position: 'relative',
                padding: 20,
                display: 'inline-block',
                cursor: 'pointer',
              }}>
             <img
                alt='menu'
                style={{
                  height: 250,
                  width: '100%',
                  display: 'block',
                  borderRadius: 10,
                }}
                src={image}
              />
              <div style={{ marginTop: 20 }}>
                <h5 className='card-title'>{m.productName}</h5>
                <p>
                  {m.description} <br />
                  Rs. {m.price}
                </p>
              </div>
              <div className="col-sm-5"> 
              <label  className="form-label" for="form3Example97" 
                    >Qty</label>
                    <input type="text" id="form3Example97" className="form-control form-control-lg" 
                     onChange={(e)=>{
                      setQuantity(e.target.value)
                    }} />
                </div  >
                <div className="col-sm-12">
                <button onClick={addToCart(m.id)} type="submit" className="btn btn-success btn-block">Add To Cart</button>
                </div>
            </div>    
         ) })}
        </div>
        </div>
    )
}

export default CustomerHome