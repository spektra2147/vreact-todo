import React from 'react';
import TodoList from './TodoList';
import Input from './Input';
import serialize from 'form-serialize';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

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
            <Container fixed component="div">
                <Box component="div" display="flex" justifyContent="center" flexDirection="row">
                    <Box component="div" width={3/8}>
                        <div id="app">
                            <Typography variant="h3">My Todo List React</Typography>
                            <Input handleFormSubmitProp={this.handleFormSubmit}/>
                            <TodoList
                                todos={this.state.todos}
                                deleteTodoProp={this.deleteTodo}/>
                        </div>
                    </Box>
                </Box>
            </Container>
        );
    }
}

export default App;