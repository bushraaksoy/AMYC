import SideBar from "../../components/Auth/SideBar";
import Header from '../../components/Auth/Header'
import FileTracker from '../../components/Auth/FileTracker'
import Title from '../../components/Auth/Title'
import Content from '../../components/Auth/Content'

import '../../styles/MainContent.css'

const MasjidManagement = () => {
    return (
        <div className="main-content">
            <div className="left"><SideBar/></div>
            <div className="right">
                <Header/>
                {/* <FileTracker/> */}
                <Title 
                title="Masjid Management" btnContext='Add Masjid'/>
                <Content/>  
            </div>
        </div>    
    )
}

export default MasjidManagement;