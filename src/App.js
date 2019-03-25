import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import fileDownload from 'js-file-download';

import Buttons from './components/Bottons.js';
import InputList from './components/InputList.js';
import './App.css';

class App extends Component {
	state = {
		lists: [],
		listItemText: '',
		selectedItemIndex: null,
		error: false
	};

	onListItemTextChange = event => {
		const { value: listItemText } = event.target;
		this.setState({ listItemText });
	};

	onAddBtnClick = e => {
		e.preventDefault();
		const { listItemText } = this.state;

		const pattern = /^[A-Za-z0-9]+\s*=\s*[A-Za-z0-9]+$/;

		if (!(pattern.test(listItemText) && listItemText.split('=').length === 2)) {
			this.setState({
				error: true
			});
		} else {
			const [name, value] = listItemText.split('=');

			this.setState(prevState => ({
				lists: [...prevState.lists, { name, value }],
				listItemText: '',
				error: false
			}));
		}
	};

	onListItemClick = selectedItemIndex => {
		this.setState(prevState => {
			const newSelectedItemIndex =
				prevState.selectedItemIndex === selectedItemIndex
					? null
					: selectedItemIndex;
			return {
				selectedItemIndex: newSelectedItemIndex
			};
		});
	};

	onRemoveSelectedBtnClick = () => {
		const { selectedItemIndex } = this.state;
		if (selectedItemIndex !== null) {
			this.setState(prevState => ({
				lists: prevState.lists.filter(
					(list, index) => index !== selectedItemIndex
				),
				selectedItemIndex: null
			}));
		}
	};

	onClearBtnClick = () => {
		this.setState({ lists: [], selectedItemIndex: null, listItemText: '' });
	};

	sortByName = () => {
		const { lists } = this.state;
		const updatedLists = lists.sort((a, b) => {
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
		this.setState({ lists: updatedLists });
	};

	onJsonExportBtnClick = () => {
		const { lists } = this.state;
		const obj = {};

		lists.forEach(({ name, value }) => {
			obj[name] = value;
		});
		fileDownload(JSON.stringify(obj), 'data-json');
	};

	sortByValue = () => {
		const { lists } = this.state;
		const updatedLists = lists.sort((a, b) => {
			if (a.value < b.value) {
				return -1;
			}
			if (a.value > b.value) {
				return 1;
			}
			return 0;
		});
		this.setState({
			lists: updatedLists
		});
	};

	render() {
		const { lists, listItemText, selectedItemIndex, error } = this.state;

		return (
			<div className="container">
				<div className="row">
					<Buttons
						onAddBtnClick={this.onAddBtnClick}
						onRemoveSelectedBtnClick={this.onRemoveSelectedBtnClick}
						onClearBtnClick={this.onClearBtnClick}
						onJsonExportBtnClick={this.onJsonExportBtnClick}
						sortByName={this.sortByName}
						sortByValue={this.sortByValue}
					/>
					<InputList
						listItemText={listItemText}
						onListItemTextChange={this.onListItemTextChange}
						onListItemClick={this.onListItemClick}
						className="form-control"
						placeholder="Please Enter Key=Value"
						lists={lists}
						error={error}
						selectedItemIndex={selectedItemIndex}
					/>
				</div>
			</div>
		);
	}
}

export default App;
