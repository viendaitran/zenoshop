import '../Login/Login.css';
import { Link } from 'react-router-dom'
import "@fontsource/montserrat";
import { FaHome } from 'react-icons/fa'

function Login() {
  return (
    <div className='form-login'>
      <div className='gotoHome'>
        <Link to='../'><FaHome /></Link>
      </div>
      <div className="form-item">
        <div className='form-input'>
          <h1>Login to Your Account </h1>
          <input placeholder="Email" />
          <br />
          <input placeholder="Password" />
          <br />
          <button>GO</button>
        </div>  
      </div>
      <div className='gotoSignUp'>
          <div className='container'>
            <h1>- Sign up -</h1>
            <Link to='../Register'>Next</Link>
          </div>
        </div>
    </div>
  )
}

export default Login