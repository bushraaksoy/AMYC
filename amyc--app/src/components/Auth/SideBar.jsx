import '../../styles/SideBar.css'
import Logo from '../Logo';
import ListItem from './ListItem';
import home from '../../assets/home.svg'
import file from '../../assets/file.svg'
import dollar from '../../assets/dollar.svg'
import twoUsers from '../../assets/two-users.svg'
import userPlus from '../../assets/user-plus.svg'
import key from '../../assets/key.svg'

const SideBar = () => {
    return (
        <div className='side-bar'>
            <Logo/>
            <div className='list-items'>
                <ListItem 
                icon={<img width='22px' src={home} placeholder='icon'/>} 
                text={'Dashboard'}
                page="/dashboard"/>
                <ListItem 
                icon={<img width='22px' src={userPlus} placeholder='icon'/>} 
                text={'School Registration'}
                page="/school-registration"/>
                <ListItem 
                icon={<img width='22px' src={twoUsers} 
                placeholder='icon'/>} 
                text={'User Management'}
                page="/user-management"/>
                <ListItem 
                icon={<img width='22px' src={dollar} placeholder='icon'/>} 
                text={'Masjid Management'}
                page="/masjid-management"/>
                <ListItem 
                icon={<img width='22px' src={file} 
                placeholder='icon'/>} 
                text={'Reports'}
                />
                <ListItem 
                icon={<img width='22px' src={key} 
                placeholder='icon'/>} 
                text={'Logs'}
                page="/logs"/>
            </div>
        </div>
    )
}

export default SideBar;