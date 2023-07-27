import '../../styles/Header.css'
import profile from '../../images/profile.png'
import moon from '../../assets/moon.svg'
import search from '../../assets/search.svg'
import star from '../../assets/star.svg'

const Header = () => {
    return (
        <div className='header'>
            <div className='title'>AMYC SYSTEM ALL <img className='svg-star' src={star} /> </div>
            <div className='profile-sect'>
                <img src={moon} />
                <img src={search} />
                <img id='profile-pic' src={profile}/>
            </div>
        </div>
    )
}

export default Header;