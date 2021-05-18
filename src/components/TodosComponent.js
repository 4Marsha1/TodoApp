import React from 'react'

const TodosComponent = (props) => {
    return (
        <div className='todo'>
            <h3>{props.todo}</h3>
        </div>
    )
}

export default TodosComponent
