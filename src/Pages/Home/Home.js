import { Link } from 'react-router-dom'
import '../Home/Home.css'

function Home() {
  return (
    <div className="Home">
      <div className='menu-bar'>
        <Link to='/'>Products</Link>
        <Link to='/'>Vouchers</Link>
      </div>
    </div>
  )
}

export default Home