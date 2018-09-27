import React from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'

class BuilingList extends React.Component {

	constructor(props){
		super(props)
		this.selectUpdate = this.selectUpdate.bind(this);
		this.deleteEntry = this.deleteEntry.bind(this);
	}

	selectUpdate(id){
		this.props.onChange(id);
	}

	deleteEntry(index){
		this.props.data.splice(index, 1);
		this.forceUpdate();
	}

	render() {
		//console.log('This is my directory file', this.props.data);
		var data = this.props.data.filter(function(element){
			return element.name.toLowerCase().search(this.props.filterText.toLowerCase()) !== -1;
		  }.bind(this));

		const buildingList = data.map((directory, index) => {
			return (
				<tr
					key={directory.id}>
					<Divider/>
					<Button variant="outlined" color="secondary" onClick={() =>{this.deleteEntry(index)}}>Delete</Button>
					<Divider/>
					<Button variant="outlined" color="primary" onClick={() => {this.selectUpdate(directory.id)}}>{directory.code} - {directory.name}</Button>
					<Divider/>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
