import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		var buildingView;

		if(this.props.currBuilding == 0){
			buildingView = <i>Click on a name to view more information</i>
		}else{
			var building = this.props.data.find(function(element){
				return element.id === this.props.currBuilding;
			}.bind(this));

			var hasCoordinates = (building.coordinates != null);
			var hasAddress = (building.address != null);

			buildingView = 
			<div>
				<h2>{building.code} - {building.name}</h2>
				{hasAddress ? (
				<p>Address: {building.address}</p>) :
				 (<p>No Address Given</p>)}
				{hasCoordinates ? (
				<div>
					<p>Coordinates: </p>
					<p>latitude: {building.coordinates.latitude}</p>
					<p>longitude: {building.coordinates.longitude}</p>
				</div>) : (<p>No Coordinates Given</p>)}
			</div>
		}

		return(
			<div>
			<p>
				{' '}
				{buildingView}
			</p>
		</div>
		);

		// return (
		// 	<div>
		// 		<p>
		// 			{' '}
		// 			<i>Click on a name to view more information</i>
		// 		</p>
		// 	</div>
		// );
	}
}
export default ViewBuilding;
