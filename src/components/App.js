import React from 'react';
import TodoList from './TodoList';
import Input from './Input';
import serialize from 'form-serialize';


class App extends React.Component {
    state = {
        todos: [
            {
                "id": 1,
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },

            {
                "id": 2,
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },

            {
                "id": 3,
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            },

            {
                "id": 4,
                "text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            }
        ],
    };


    deleteTodo = (todo) => {
        const newTodoList = this.state.todos.filter(
            t => t.id !== todo.id
        );

        this.setState(state => ({
            todos: newTodoList
        }))
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const formElements = serialize(event.target, {hash: true});
        this.state.todos.push({"id": this.state.todos.length + 1, "text": formElements.text})
        this.setState({todos: this.state.todos })
    }

    render() {
        return (
            <div className="container py-2">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div id="app">
                            <h1 className="text-center mb-3">My Todo List React</h1>
                            <Input handleFormSubmitProp={this.handleFormSubmit}/>
                            <TodoList
                                todos={this.state.todos}
                                deleteTodoProp={this.deleteTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;