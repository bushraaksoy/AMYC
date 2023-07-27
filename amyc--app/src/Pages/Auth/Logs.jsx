import SideBar from "../../components/Auth/SideBar";
import Header from '../../components/Auth/Header'
import '../../styles/MainContent.css'
import Title from '../../components/Auth/Title'
import Content from '../../components/Auth/Content'

const Logs = () => {
    return (
        <div className="main-content">
            <div className="left"><SideBar/></div>
            <div className="right">
                <Header/>
                {/* <FileTracker/> */}
                <Title title="System Logs"/>
                <Content/>  
            </div>
        </div>    
    )
}

export default Logs;