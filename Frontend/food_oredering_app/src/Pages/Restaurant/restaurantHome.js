
import RestoNav from './../../components/RestoNav';
import resto from './../../images/resto1.jpg'
const RestaurantHome=()=>{
    return(
        <div className="container-fluid">
        <RestoNav/>
        <img
        style={{
            height:'100%',
            width: '100%',
            display: 'block',
            borderRadius: 10,
          }}
            src={resto}
        />
        </div>
    )
}

export default RestaurantHome