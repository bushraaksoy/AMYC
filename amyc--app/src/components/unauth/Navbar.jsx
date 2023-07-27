import '../../styles/Navbar.css'
import {Link} from 'react-router-dom'
import Logo from '../Logo'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo/>
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