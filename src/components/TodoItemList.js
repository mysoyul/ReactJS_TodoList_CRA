import React, { Component } from 'react';
import { connect } from 'react-redux'

import TodoItem from './TodoItem';
//import { fetchAllTodos } from '../actions'
import { fetchAllTodos } from '../reducers/todoSlice';

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

    render() {
        const { todos } = this.props;
        const todoList = todos.map(
            ({ id, text, checked }) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
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