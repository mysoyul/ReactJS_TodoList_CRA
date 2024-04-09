import React, { Component } from 'react';
import { connect } from 'react-redux'

import TodoItem from './TodoItem';
import { fetchAllTodos } from '../actions'

class TodoItemList extends Component {
    /*
        shouldComponentUpdate() 메서드가 false이면 render()가 호출되지 않는다.
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    /*
        props로 전달받은 action fetchAllTodos함수(ajax통신) 호출
    */
    componentDidMount() {
        this.props.fetchAllTodos();
    }

    //이벤트 핸들러
    handleToggle = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo)
        });
    };

    handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    };

    render() {
        const { todos, myToggle, myRemove } = this.props;
        const todoList = todos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={myToggle}
                    onRemove={myRemove}
                    key={id}
                />
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}
export default connect(
    (state) => ({ todos: state.todos }),
    { fetchAllTodos } //{ fetchAllTodos: fetchAllTodos }
)(TodoItemList);