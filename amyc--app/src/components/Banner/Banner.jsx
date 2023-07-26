import banner from '../../images/quran1.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <img className='banner-img' src={banner} alt='banner'/>
            <h1>Welcome to Ansaar Muslim Youth Center Project</h1>
            <button className='signup-btn'>Sign up</button>
        </div>
    )
}

export default Banner;