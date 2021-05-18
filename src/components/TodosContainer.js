import React, { useState, useEffect } from 'react';
import Todo from './TodosComponent'

const TodosContainer = () => {
    const [todos,setTodos] = useState([
        'Take a Shower',
        'Take the dog for a walk',
        'Buy Grocerycd todo'
    ])
    const [input,setInput] = useState('')

    
    const inputTodo = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }
    
    const addTodo = (e) => {
        e.preventDefault();
        // if(input !== ''){setTodos([...todos,input])}    1. one way to prevent empty entry
        setTodos([...todos,input])
        setInput('')
    }
    
    const T = todos.map((todo)=>{
        return <Todo todo={todo} />
    })

    return(
        <div  className="App">
            <h1>Todo App</h1>
            <form className='myForm' onSubmit={addTodo}>
                <input type='text' value={input} onChange={inputTodo}/>
                {/* 1. disabled is cooler than conditional adding*/}
                <button disabled={!input}>Add Todo</button>  
            </form>
            <div className='todos'>
                {T}
            </div>
        </div>
    )
}

export default TodosContainer
