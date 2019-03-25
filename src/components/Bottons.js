import React from 'react';

const Buttons = ({
	onAddBtnClick,
	onRemoveSelectedBtnClick,
	onClearBtnClick,
	onJsonExportBtnClick,
	sortByName,
	sortByValue
}) => (
	<div className="col col-lg-4 offset-2 mt-5 d-flex flex-column">
		<button
			onClick={onAddBtnClick}
			type="button"
			className=" btn btn-light shadow-sm border border-dark mb-5 p-2 text-capitalize"
		>
			add
		</button>
		<button
			type="button"
			className="btn btn-light shadow-sm  border border-dark mb-5 p-2   text-capitalize"
			onClick={onRemoveSelectedBtnClick}
		>
			remove selected
		</button>
		<button
			type="button"
			className="btn btn-light shadow-sm border border-dark  mb-5 p-2 text-capitalize"
			onClick={onClearBtnClick}
		>
			clear
		</button>
		<button
			type="button"
			className="btn btn-light shadow-sm  border border-dark mb-5 p-2"
			onClick={onJsonExportBtnClick}
		>
			Export to JSON
		</button>
		<button
			type="button"
			className="btn btn-light shadow-sm  border border-dark mb-5 p-2"
			onClick={sortByName}
		>
			Sort by Name
		</button>
		<button
			type="button"
			className="btn btn-light shadow-sm  border border-dark mb-5 p-2"
			onClick={sortByValue}
		>
			Sort by Value
		</button>
	</div>
);

export default Buttons;
