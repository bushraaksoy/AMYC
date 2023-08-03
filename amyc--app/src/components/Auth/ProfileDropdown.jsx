import { forwardRef, useContext, useImperativeHandle, useState } from 'react';
import '../../styles/ProfileDropdown.css'
import { LoginContext } from '../../Context/LoginContext';
import { useNavigate } from 'react-router-dom';

const ProfileDropdown = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const [showing, setShowing] = useState(false);
    const {setIsAuth} = useContext(LoginContext)

    const styles = {
        'display': showing? 'block' : 'none'
    }

    useImperativeHandle(ref, () => ({
        show() {
            setShowing(true)
        },
        hide() {
            setShowing(false)
        }
    }));

    return (
        <ul
        onMouseOver={() => setShowing(true)}
        onMouseLeave={() => setShowing(false)}
        className="dropdown" style={styles}>
            <li>Profile</li>
            <li
            onClick={() => 
                {
                    setIsAuth(false)
                    navigate('/')
                }}
            >Sign Out</li>
        </ul>   
    )
})

export default ProfileDropdown;