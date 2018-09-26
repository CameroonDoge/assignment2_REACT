import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card'
import { Grid } from '../node_modules/@material-ui/core';

// const listStyle = {
//   //height: 100,
//   //width: 100,
//   margin: "1em",
//   // textAlign: 'center',
//   display: 'inline-block'
// };

const pageStyle = {
  margin: "0.5em",
  display: 'inline-block',

};

const cardStyle = {
  background: "#ccdef9",
  padding: "1.2em"
};

// const gridStyle ={
//   width: "100%"
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    };
    // somehow this has become very important...
    this.filterUpdate = this.filterUpdate.bind(this);
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({filterText: value});
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({selectedBuilding: id});
  }

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
                  {/* <Paper style={listStyle}> */}
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    onChange={this.selectedUpdate.bind(this)}
                  />
                  {/* </Paper> */}
                </table>
              </div>
            </div>
            <div className="column2">
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
