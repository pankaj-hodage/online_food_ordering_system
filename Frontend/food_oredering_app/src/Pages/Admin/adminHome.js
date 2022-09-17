import NavbarAdmin from "../../components/navbarAdmin"
import companylogo from "../../images/s2.jpg"
const AdminHome=()=>{
    return(
        <div className="contaimer-fluid">
             <NavbarAdmin/>
             <header style={{textAlign:"center",fontSize:30}}><b>Welcome Admin</b></header>
             <div className="container" style={{alignContent:"center",
             alignItems:"center",
             marginLeft:120,
             marginTop:30}}>
                <img src={companylogo} alt="logo" style={{width:1000}}></img>
             </div>
        </div>
       
       )
}

export default AdminHome