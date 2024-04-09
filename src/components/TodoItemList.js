import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
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
export default TodoItemList;