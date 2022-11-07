import './ExpenseItem.css'

export const ExpenseItem= ()=>{
    return (
        <div className='expense-item'>
            <div className='expense-item__description'>
                <h2>Title</h2>
                <div>Date</div>
            </div>
            <div className='expense-item__price'>20$</div>
        </div>
    )
}