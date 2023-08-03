import '../../styles/LoginForm.css'
import { Link, useNavigate } from 'react-router-dom'
import {useContext, useEffect, useRef, useState} from 'react';
import axios from 'axios';
import { LoginContext } from '../../Context/LoginContext';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setIsAuth} = useContext(LoginContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:3001/users')
        .then((response) => {
            const users = response.data;
            const authUser = users.find((user) => user.email === username && user.password === password);
            if (authUser) {
                setIsAuth(true)
                toast.success('Successfully logged in', {
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,})
                navigate('/dashboard')
            }
            else {
                alert("Invalid Credentials")
            }
        })
        .catch((err) => {
            console.log(err)
            alert("There was an error logging in")
        })
    }

    const submitBtn = useRef()

    const handleKeydown = (e) => {
        if (e.keyCode == 13) {
            submitBtn.current.click();
        }
    }

    return (
        <div className='login'>
            <div className='form-title'>
                <h1>Welcome to AMYC 👋</h1>
                <div>Don't have an account, <a className='sign-up-link'>Sign up</a></div>
            </div>

            <form className='form' action="/login" method="post">
                <label htmlFor="username">Email:</label>
                <input onChange={e => setUsername(e.target.value)} 
                type="text" id="username" 
                name="username" 
                value={username}
                placeholder="Enter your username" 
                required
                onKeyDown={handleKeydown}
                />

                <label htmlFor="password">Password:</label>
                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password" id="password" 
                name="password" placeholder="Enter your password" 
                required
                onKeyDown={handleKeydown}
                />

                <button ref={submitBtn} onKeyDown={handleKeydown} onClick={handleSubmit} type="button">Login</button>
            </form>

            <Link to='/forgot-password' className='last forgot-password'>Forgot Password?</Link>
        </div>
    )
}

export default LoginForm;