import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/css/Family.css';

class Family extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsActive: false
    }
  }

  handleToggleDetails = (e) => {
    this.setState({
      detailsActive: !this.state.detailsActive
    });
  }

  render() {
    return(
      <div className="Family">
        <Link to={`families/${this.props.family._id}`}>
          <p>{this.props.family.lastName}</p>
        </Link>
      </div>
    );
  }
}

Family.propTypes = {
  family: PropTypes.object
}

export default Family;