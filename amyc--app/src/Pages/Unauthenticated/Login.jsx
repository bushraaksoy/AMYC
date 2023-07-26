import LoginForm from '../../components/LoginForm/LoginForm'
import Navbar from '../../components/Navbar/Navbar'
import LargeLogo from '../../components/LargeLogo/LargeLogo'
import Footer from '../../components/Footer/Footer'


const Login = () => {
    return (
        <>
            <Navbar/>
            <div className='main'>
                <LargeLogo/>
                <LoginForm/>
            </div>
            <Footer/>
        </>
    )
}

export default Login;