import { Link, Outlet } from 'react-router-dom';
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import "@fontsource/montserrat";
import logo from './logo.png'
import './Pages/Navbar/Navbar.css';

function App() {
  function handleNav() {
    const navbar2 = document.querySelector('.navbar2');
    navbar2.classList.toggle('active');
  }
  return (
    <>
      <div className="App">
        <nav className='navbar1'>
          <div className='container'>
            <div className='navbar-item'>
              <Link to='/' className='imglink'><img src={logo} className='logo' /></Link>
              <Link to='Login'>Login</Link>
              <Link to='Register'>Register</Link>
            </div>
          </div>
        </nav>
        <nav className='navbar2'>
          <form>
            <input
              className='item-search'
              placeholder='Search...' />
            <button className='btn-search'> <FaSearch /></button>
          </form>
          <Link to='../' className='btn-cart'> <FaShoppingCart /></Link>
        </nav>
        <div className='icon-res'>
          <div className='icon-search' onClick={handleNav}> <FaSearch /></div>
          <Link to='../' className='btn-cart'> <FaShoppingCart /></Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App;
