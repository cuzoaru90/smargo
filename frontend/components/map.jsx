var React = require('react');
var ReactDOM = require('react-dom');

class Map extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      coords: [],
    }
  }

  componentDidMount(){

    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 40.761218, lng: -73.911967},
      zoom: 12
    };
    const google = window.google
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  componentWillReceiveProps(){
    if (this.props.journeyCoords){
      console.log('props', this.props.journeyCoords)
      this.path = new google.maps.Polyline({
        path: this.props.journeyCoords,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      this.path.setMap(this.map)
    }

  }

  render() {
    return(
      <div className='map' ref='map'>
      </div>
    )
  }
};
export default Map
