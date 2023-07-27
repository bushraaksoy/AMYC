import logo from '../images/amyc-logo.png';
import '../styles/Logo.css';
import {Link} from 'react-router-dom'
 
const Logo = () => {
    return (
        <Link to='/' className='logo'>
            <img src={logo} />
            <h1>AMYC</h1>
        </Link>
    )
}

export default Logo;