import React from 'react'
import '../../styles/expenses.css'
import menu from '../../assets/menu.svg'
import ExpensesItem from './ExpensesItem'
import light from '../../assets/light.svg'
import drop from '../../assets/drop.svg'
import bag from '../../assets/bag.svg'
import card from '../../assets/card.svg'
import alert from '../../assets/alert.svg'


const Expenses = () => {
  return (
    <div className='expenses'>
        <div className='exp-title'>Expenses <img src={menu} /> </div>
        <div className='exp-items' >
            <ExpensesItem 
            img={<img src={light} />}
            text='Electricity Bills'
            num="100,000"
            />
            <ExpensesItem 
            img={<img src={drop}/>}
            text='Water Bills'
            num="20,000"
            /><ExpensesItem 
            img={<img src={bag}/>}
            text='Furniture and Fittings'
            num="50,000"
            /><ExpensesItem 
            img={<img src={card}/>}
            text='Maintenance and Repair'
            num="80,000"
            /><ExpensesItem 
            img={<img src={alert}/>}
            text='Security System'
            num="87,000"
            />
        </div>
    </div>
  )
}

export default Expenses