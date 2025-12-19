import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='login-page'>

      <div className='login-box p-4 rounded' >

        <h1 className='text-center mt-2 '><b>Login</b></h1>
        <h4 className='text-center p-2 mt-4' style={{marginBottom:'40px'}}>Login to your Account</h4>

      <form>

  <div  style={{marginBottom:'20px'}}>
    <label htmlFor="exampleInputEmail1" className="form-label" style={{fontSize:'20px'}}>E-mail Address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" style={{fontSize:'20px'}}>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>

  <div className='d-flex justify-content-between mb-4' style={{marginTop:'50px'}}>
    <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" style={{fontSize:'19px'}} htmlFor="exampleCheck1">Remember me</label>
  </div>
  <div style={{fontSize:'19px'}}> Reset Password?</div>
  </div>

  <Link to='/dashboard'>
<div class="d-grid gap-2 d-md-flex justify-content-md-end" style={{marginTop:'50px', height:'50px'}}>
  <button class="btn btn-primary" style={{fontSize:'20px'}} type="button">Sign In</button>
</div>
  </Link>

</form>


      </div>
      
    </div>
  )
}

export default Login
