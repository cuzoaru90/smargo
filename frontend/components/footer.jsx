var React = require('react');
var ReactRouter = require('react-router');
var router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;

class Footer extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="footer">
        <div className="copyright">
          © 2017 Smargo Inc. - All Rights Reserved
        </div>
      </div>
    )
  }
}

export default Footer
