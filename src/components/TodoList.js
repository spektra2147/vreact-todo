import React from 'react';

const TodoList = (props) => {
    return (
        <div>
            <ul className="list-group">
                {props.todos.map((todo) => (
                <li className="list-group-item d-flex align-items-center justify-content-between" key={todo.id}>
                    <span>{todo.text}</span>
                    <span className="badge ml-auto">
						  <button onClick={(event) => props.deleteTodoProp(todo)} className="btn btn-danger  btn-sm">&times;</button>
                    </span>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;