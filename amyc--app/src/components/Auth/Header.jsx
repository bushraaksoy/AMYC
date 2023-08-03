import '../../styles/Header.css'
import profile from '../../images/profile.png'
import moon from '../../assets/moon.svg'
import search from '../../assets/search.svg'
import star from '../../assets/star.svg'
import ProfileDropdown from './ProfileDropdown'
import { useRef } from 'react'

const Header = () => {
    const dropdown = useRef(null);
    return (
        <div className='header'>
            <div className='title'>AMYC SYSTEM ALL <img className='svg-star' src={star} /> </div>
            <div className='profile-sect'>
                <img src={moon} />
                <img src={search} />
                <img
                 onMouseOver={() => {
                    dropdown.current.show();
                 }}
                 onMouseLeave={() => {
                    dropdown.current.hide();
                 }}
                 id='profile-pic' src={profile}/>
                <ProfileDropdown ref={dropdown}/>
            </div>
        </div>
    )
}

export default Header;