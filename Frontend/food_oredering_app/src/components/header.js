import { Link } from 'react-router-dom'
const Header=()=>{
    return(
        <div>
        <Link  style={{textDecoration:'none'}} to='/'>
        <span style={{color:'#5C41A8',fontSize:50,marginLeft:20}}><b>Foodie</b></span>
        </Link>
    </div>
    );
}
export default Header;