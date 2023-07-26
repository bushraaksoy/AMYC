import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className='main'>
                <Banner/>
            </div>
            <Footer/>
        </>
    )
}


export default Home;