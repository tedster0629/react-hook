import React, { useState } from 'react';
import Item from './Item';
import TodoForm from "./TodoForm";
import Nav from "./Nav";

const Todo = () => {


	const initialState = [
		{
			text: 'Learn Hooks',
			isCompleted: false
		},

		{
			text: 'Get the JS Book',
			isCompleted: false
		},

		{
			text: 'Learn JavaScript',
			isCompleted: false
		},
	];

	/**
	 * todos: is initial State, whose value will be equal to initialState that we pass in useState() as a parameter
	 * setTodos is like setState
	 */
	const [ todos, setTodos ] = useState( initialState );

	const addToDo = ( text ) => {
		const newToDos = [ ...todos, { text } ];
		setTodos( newToDos );
	};

	const handleItemClick = ( index ) => {
		// Get all todos array from state.
		const newTodos = [ ...todos ];

		// Set isCompleted property to reverse of what its current value is ( boolean )
		newTodos[ index ].isCompleted = ! newTodos[ index ].isCompleted;

		// Set State with the new array of todos with the updated value
		setTodos( newTodos );
	};

	const handleRemoveClick = ( index ) => {
		// Get all todos array from state.
		const newTodos = [ ...todos ];

		// Remove the clicked item from the todos array
		newTodos.splice( index, 1 );

		// Set State with the new array of todos with the updated value
		setTodos( newTodos );
	};


	return (
		<React.Fragment>
			<Nav/>
			<div className="todo-container">
				<h2 className="main-heading">Todo App</h2>
				<TodoForm addToDo={addToDo}/>
				<div className="todo-list">
					{ todos.length ? (
						todos.map( ( item, index ) => (
							<Item
								key={`${ item.text }-${ index }`}
								todo={ item }
								index={ index }
								handleItemClick={ handleItemClick }
								handleRemoveClick={handleRemoveClick}
							/>
						) )
					) : '' }
				</div>
			</div>
		</React.Fragment>
	);
};

export default Todo;
