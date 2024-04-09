import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    /*
        shouldComponentUpdate() 메서드가 false이면 render()가 호출되지 않는다.
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    
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