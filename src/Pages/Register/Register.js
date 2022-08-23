import '../Register/Register.css';
import { Link } from 'react-router-dom'
import "@fontsource/montserrat";
import { FaHome } from 'react-icons/fa'
function Register() {
  return (
    <div className='form-register'>
      <div className='gotoHome'>
        <Link to='../'><FaHome /></Link>
      </div>
      <div className="form-item">
        <div className='form-input'>
          <h1>Create Account</h1>
          <input placeholder="Fullname" />
          <br />
          <input placeholder="Email" />
          <br />
          <input placeholder="Password" />
          <br />
          <input placeholder="Confirm Password" />
          <br />
          <button>Sign Up</button>
        </div>
      </div>
      <div className='gotoSignUp'>
          <div className='container'>
            <h1>- Sign in -</h1>
            <Link to='../Login'>Next</Link>
          </div>
        </div>
    </div>
  )
}

export default Register