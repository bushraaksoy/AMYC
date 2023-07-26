import ForgotPassword from '../../components/ForgotPassword/ForgotPassord'
import Navbar from '../../components/Navbar/Navbar'
import LargeLogo from '../../components/LargeLogo/LargeLogo'
import Footer from '../../components/Footer/Footer'


const ResetPass = () => {
    return (
        <>
            <Navbar/>
            <div className='main'>
                <LargeLogo/>
                <ForgotPassword/>
            </div>
            <Footer/>
        </>
    )
}

export default ResetPass;