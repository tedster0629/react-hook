import React from 'react';

const Item = ( { todo, index, handleItemClick, handleRemoveClick } ) => {

	return (
		<div className="todo" >
			<span
				className={ todo.isCompleted ? 'strike-through' : '' }
				onClick={() => handleItemClick( index )}
			>{ todo.text }</span>
			<span className="remove-item-cross" onClick={ () => handleRemoveClick( index ) }>X</span>
		</div>
	)
};

export default Item;
