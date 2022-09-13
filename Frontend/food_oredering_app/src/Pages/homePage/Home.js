
const Home = () => {
    return(
        <div>
            <div className='mb-3'>
            <label>Email</label>
           <input className='form-control' type='email'/>
            </div>
            <div className='mb-3'>
            <label>password</label>
           <input className='form-control' type='password'/>
            </div>
        </div>
    );
}

export default Home;