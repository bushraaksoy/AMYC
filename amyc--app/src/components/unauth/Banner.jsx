import banner from '../../images/quran1.jpg'
import '../../styles/Banner.css'


const Banner = () => {
    const goToDashboard = () => {
        window.location.pathname = '/dashboard'
    }

    return (
        <div className='banner'>
            <img className='banner-img' src={banner} alt='banner'/>
            <h1>Welcome to Ansaar Muslim Youth Center Project</h1>
            <button onClick={goToDashboard} className='signup-btn'>Sign up</button>
        </div>
    )
}

export default Banner;