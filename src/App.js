import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions'
import DialogContentText from '@material-ui/core/DialogContentText';
import Divider from '@material-ui/core/Divider'
import { Grid } from '../node_modules/@material-ui/core';

const pageStyle = {
  margin: "0.5em",
  display: 'inline-block',

};

const cardStyle = {
  background: "#ccdef9",
  padding: "1.2em"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      open: false,
      newEntry:{
        id: null,
        code: '',
        name: '',
        coordinates:{
          latitude: null,
          longitude: null
        },
        address: ''
      }
    };
    // somehow this has become very important...
    this.filterUpdate = this.filterUpdate.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.codeUpdate = this.codeUpdate.bind(this);
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({filterText: value});
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({selectedBuilding: id});
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = value => {
    // this.setState({newBuilding: value, open: false});
    this.setState({id: this.props.data.length+1})
    this.setState({open: false});
    this.props.data.push(this.state.newEntry);
  }

  handleCancel = value => {
    this.setState({open: false});
  }

  codeUpdate = function(entity){
    //this.setState({code: entity.target.value})
    //this.setState({newEntry:{code: entity.target.value}})
    var updatedEntry = this.state.newEntry;
    updatedEntry.code = entity.target.value;
    this.setState({newEntry:updatedEntry})
  }

  nameUpdate = function(entity){
    var updatedEntry = this.state.newEntry;
    updatedEntry.name = entity.target.value;
    this.setState({newEntry:updatedEntry})
  }.bind(this);

  addressUpdate = function(entity){
    var updatedEntry = this.state.newEntry;
    updatedEntry.address = entity.target.value;
    this.setState({newEntry:updatedEntry})
  }.bind(this);

  latitudeUpdate = function(entity){
    var updatedEntry = this.state.newEntry;
    updatedEntry.coordinates.latitude = entity.target.value;
    this.setState({newEntry:updatedEntry})
  }.bind(this);

  longitudeUpdate = function(entity){
    var updatedEntry = this.state.newEntry;
    updatedEntry.coordinates.longitude = entity.target.value;
    this.setState({newEntry:updatedEntry})
  }.bind(this);

  render() {
    
    return (
      <Grid container>
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <Paper style={pageStyle}>
        <Search onChange={this.filterUpdate.bind(this)}/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    onChange={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
            <Button variant="outlined" color="primary" onClick={this.handleOpen}>Add New Building</Button>
            <Dialog open={this.state.open} aria-labelledby="form-dialog-title" onClose={this.handleClose}>
            <DialogTitle id="form-dialog-title">Add New Building</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Enter the building code, name, address, and if possible, coordinates.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Code"
                  type="filled"
                  fullWidth
                  value={this.state.code}
                  onChange={this.codeUpdate}
                />
                {/* <input type="text"
                placeholder="Code"
                value={this.state.code}
                onChange={this.codeUpdate}/> */}
                <TextField
                  margin="dense"
                  label="Name"
                  type="filled"
                  fullWidth
                  value={this.state.name}
                  onChange={this.nameUpdate}
                />
                <TextField
                  margin="dense"
                  label="Address"
                  type="filled"
                  fullWidth
                  value={this.state.address}
                  onChange={this.addressUpdate}
                />
                <DialogContentText>
                  <Divider/>
                  Optional:
                  <Divider/>
                </DialogContentText>
                <TextField
                  margin="dense"
                  label="latitude"
                  type="filled"
                  fullWidth
                  value={this.state.latitude}
                  onChange={this.latitudeUpdate}
                />
                <TextField
                  margin="dense"
                  label="longitude"
                  type="filled"
                  fullWidth
                  value={this.state.longitude}
                  onChange={this.longitudeUpdate}
                />
                
              </DialogContent>
              <DialogActions>
                <Button color="primary" onClick={this.handleCancel}>Cancel</Button>
                <Button color="primary" onClick={this.handleClose}>Submit</Button>
              </DialogActions>
            </Dialog>

            <Card style={cardStyle}>
              <ViewBuilding
              data={this.props.data}
              currBuilding={this.state.selectedBuilding}
              />
              </Card>
            </div>
          </div>
          <Credit />
        </main>
        </Paper>
      </div>
      </Grid>
    );
  }
}

export default App;

// class newBuildingDialog extends React.Component{
//   handleClose = () => {
//     this.props.onClose(this.props.selectedValue)
//   };

//   handleEnterValue = value => {
//     this.props.onClose(value);
//   };

//   constructor(props){
//     super(props);
//     this.state={
//       //currMax: this.props.data.size(),
//       open: false,
//       newBuilding:{
//         id: null,
//         code: "",
//         name: "",
//         coordinates:{
//           latitude: null,
//           longitude: null
//         },
//         address: ""
//       }
//     }
//     this.codeUpdate = this.codeUpdate.bind(this);
//   }

//   codeUpdate = function(entity){
//     this.setState({code: entity.state.value})
//   };

//   nameUpdate = function(entity){
//     this.setState({name: entity.state.value})
//   };

//   addressUpdate = function(entity){
//     this.setState({address: entity.state.value})
//   };

//   latitudeUpdate = function(entity){
//     this.setState({latitude: entity.state.value})
//   };

//   longitudeUpdate = function(entity){
//     this.setState({longitude: entity.state.value})
//   };

//   render(){
//     const {classes, onClose, selectedValue} = this.props;

//     return(
//       <Dialog onClose={this.handleClose} aria-labeledby="simple-dialog-title">
//         <DialogTitle id="simple-dialog-title">Add New Building</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Enter the building code, name, address, and if possible, coordinates
//             </DialogContentText>
//             <TextField
//               autoFocus
//               margin="dense"
//               // id={currMax + 1}
//               label="Code"
//               type="text"
//               fullWidth
//             />
//             </DialogContent>
//           <DialogActions>
//             <Button color="primary" onClick={this.handleClose}>Cancel</Button>
//             <Button color="primary" onClick={this.handleClose}>Submit</Button>
//           </DialogActions>
//       </Dialog>
//     );
//   }
// }