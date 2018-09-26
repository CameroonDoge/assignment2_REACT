import React from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class BuilingList extends React.Component {

	constructor(props){
		super(props)
		this.selectUpdate = this.selectUpdate.bind(this);
	}

	selectUpdate(id){
		this.props.onChange(id);
	}

	render() {
		//console.log('This is my directory file', this.props.data);
		var data = this.props.data.filter(function(element){
			return element.name.toLowerCase().search(this.props.filterText.toLowerCase()) !== -1;
		  }.bind(this));

		const buildingList = data.map(directory => {
			return (
				<tr onClick={() => {this.selectUpdate(directory.id)}}
					key={directory.id}>
					<Button variant="outlined" color="primary">{directory.code} - {directory.name}</Button>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
