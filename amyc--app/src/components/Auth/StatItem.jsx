import '../../styles/StatItem.css'

const StatItem = ({img, color, num, text}) => {
    return (
        <div className="item">
            {img}
            <div className="texts">
                <h3>{num}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default StatItem