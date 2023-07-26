import './ForgotPassword.css'
import { Link } from 'react-router-dom'
import {useState} from 'react';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    let [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div className='login'>
            <div className='form-title'>
                <h1>Forgot Password</h1>
                <div>Enter your registered email to reset your password</div>
            </div>
            <form className='form' method='post'>
                <label htmlFor="email">Email:</label>
                <input 
                    onChange={handleChange} 
                    value={inputValue} 
                    autoComplete='off' 
                    type="text" 
                    id="email" 
                    name="email" 
                    placeholder="Email" 
                    required
                />
                <ToastContainer/>

                <button     
                onClick={() => {
                    if (isValidEmail(inputValue) == false && inputValue !== '') {
                        toast.error('Invalid Email Address', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            });
                    }
                }} 
                type="button">Request</button>
            </form>
            <div className='last'>Have an account?<Link to='/login' className='forgot-password'> Login here</Link></div>
        </div>
    )
}

export default ForgotPassword;