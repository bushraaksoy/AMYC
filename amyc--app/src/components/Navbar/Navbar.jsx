import './Navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../images/amyc-logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/' className='nav-logo'>
                <img src={logo} />
                <h1>AMYC</h1>
            </Link>
            <nav>
                <ul>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/about'>About</Link></li>
                    <li> <Link to='/contact'>Contact</Link></li>
                    <li> <Link to="/login" className='login-link'>Login</Link> </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar