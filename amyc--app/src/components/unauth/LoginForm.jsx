import '../../styles/LoginForm.css'
import { Link } from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = () => {
        window.location.pathname = '/dashboard';
        console.log(`username: ${username} - Form submitted!`)
        axios.post('http://localhost:3200/login', {
            username: username,
            password: password
        })
        .then((response) => {
            console.log(response.data)
            alert('Successfully logged in')
        })
        .catch((err) => {
            console.log(err)
            console.log(err.response)
            alert(err.response.data.error.message)
        })
    }

    return (
        <div className='login'>
            <div className='form-title'>
                <h1>Welcome to AMYC 👋</h1>
                <div>Don't have an account, <a className='sign-up-link'>Sign up</a></div>
            </div>

            <form className='form' action="/login" method="post">
                <label htmlFor="username">Email:</label>
                <input onChange={handleUsername} 
                type="text" id="username" 
                name="username" 
                placeholder="Enter your username" 
                required
                />

                <label htmlFor="password">Password:</label>
                <input
                onChange={handlePassword}
                type="password" id="password" 
                name="password" placeholder="Enter your password" 
                required
                />

                <button onClick={handleSubmit} type="button">Login</button>
            </form>

            <Link to='/forgot-password' className='last forgot-password'>Forgot Password?</Link>
        </div>
    )
}

export default LoginForm;