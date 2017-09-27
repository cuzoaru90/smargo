import React from 'react';

var LocationsUtil = require('../util/location_util')
var JourneysUtil  = require('../util/journey_util')
import Map from './map'
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MyJourneys extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: true,
      height: '300px',
      journeys: '',
      journeyCoords: ''
    };
  }

  componentWillMount() {
    JourneysUtil.getJourneys(function(journeys){
      this.setState({"journeys": journeys})
    }.bind(this))
  }

  _onRowSelection(key) {

      if (key.length){
        this.setState({"journey": this.state.journeys[key[0]]})
        var journeyId = this.state.journey.id
        var that = this
        var journeyCoords = []
        LocationsUtil.getLocations(function(locations){
          locations.forEach(function(location){
            if (location.journey_id == journeyId){
              journeyCoords.push({'lat':location.latitude, 'lng': location.longitude})
            }
          })
          that.setState({'journeyCoords': journeyCoords})
        })
      }
  }

  render(){
    const styles = {
      propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
      },
      propToggleHeader: {
        margin: '20px auto 10px',
      },
    };

    if (this.state.journeys){
      return (
        <div className="myJourneys">
        <MuiThemeProvider>
          <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          onRowSelection={this._onRowSelection.bind(this)}
          >
          <TableHeader
          displaySelectAll={this.state.showCheckboxes}
          adjustForCheckbox={this.state.showCheckboxes}
          enableSelectAll={this.state.enableSelectAll}
          >
          <TableRow>
          <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
          My Journeys
          </TableHeaderColumn>
          </TableRow>
          <TableRow>
          <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
          <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
          <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
          </TableRow>
          </TableHeader>
          <TableBody
          displayRowCheckbox={this.state.showCheckboxes}
          deselectOnClickaway={this.state.deselectOnClickaway}
          showRowHover={this.state.showRowHover}
          stripedRows={this.state.stripedRows}
          >
          {this.state.journeys.map( (row, index) => (
            <TableRow key={[index, this]} value={row}>
            <TableRowColumn >{index}</TableRowColumn>
            <TableRowColumn>{row.user_id}</TableRowColumn>
            <TableRowColumn>test</TableRowColumn>
            </TableRow>
          ))}
          </TableBody>

          </Table>
        </MuiThemeProvider>

        <div className='myJourneysMap'>
          <Map journeyCoords={this.state.journeyCoords}/>
        </div>

        </div>
      )
    } else {
      return( <h1>Loading...</h1>)
    }

  }
}

export default MyJourneys;
