import '../../styles/Statistics.css'
import StatItem from './StatItem';
import twoUsers from '../../assets/two-users.svg'
import dollar from '../../assets/dollar.svg'

const Statistics = () => {
    return (
        <div className='stats'>
            <StatItem
            img={<img src={twoUsers} />} 
            num='2k'
            text='Total Members'
            />
            <StatItem
             img={<img src={dollar} />} 
             num='8,000,000'
             text='Contribution'
             />
            <StatItem
            img={<img src={dollar} />} 
            num='86%'
            text='Expenditure Rate'
            />
            <StatItem
            img={<img src={dollar} />} 
            num='200,000'
            text='Revenue'
            />
        </div>
    )
}

export default Statistics;