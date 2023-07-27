import SideBar from "../../components/Auth/SideBar";
import Header from '../../components/Auth/Header'
import '../../styles/MainContent.css'

const TotalExpenses = () => {
    return (
        <div className="main-content">
            <div className="left"><SideBar/></div>
            <div className="right"><Header/></div>
        </div>    )
}

export default TotalExpenses;