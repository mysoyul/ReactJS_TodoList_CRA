import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
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
        const { text, checked, id, onToggle, onRemove } = this.props;
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id)
                }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}
export default TodoItem