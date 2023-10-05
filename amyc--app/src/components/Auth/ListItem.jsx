import '../../styles/ListItem.css'
import {Link} from 'react-router-dom'
import {useState} from 'react';

const ListItem = ({icon, text, page}) => {
    const [path, setPath] = useState(window.location.pathname);

    let active = path == page? 'active': '';

    const handleClick = () => {
        setPath(window.location.pathname)
    }

    return (
        <Link onClick={handleClick} to={page} className={`list-item ${active}`}>
            {icon} 
            <span>{text}</span>
        </Link>
    )
}

export default ListItem;