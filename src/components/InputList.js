import React from 'react';

const InputList = ({
	listItemText,
	onListItemTextChange,
	onListItemClick,
	lists,
	selectedItemIndex,
	error
}) => (
	<div className="col col-lg-4 mt-5">
		{error && <p className="text-danger error">Invalid Entry</p>}
		<div className="input-group">
			<input
				type="text"
				value={listItemText}
				onChange={onListItemTextChange}
				className="form-control"
				placeholder="Please enter <key>=<value>"
			/>
		</div>
		<ul className="list-group">
			{lists.map((listItem, key) => (
				<li
					onClick={() => onListItemClick(key)}
					key={key}
					className={`list-group-item ${
						selectedItemIndex === key ? 'active' : ''
					} cursor-pointer`}
				>
					{`${listItem.name.trim()}=${listItem.value.trim()}`}
				</li>
			))}
		</ul>
	</div>
);
export default InputList;
