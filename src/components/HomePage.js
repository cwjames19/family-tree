import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/HomePage.css';

class HomePage extends React.Component {

  render() {
    return(
      <div className="HomePage d-flex flex-column justify-content-center align-items-center">
        <h3>Family Tree Index</h3>
        <Link to={`/families`}>
          <button className="btn btn-default">Enter</button>
        </Link>
      </div>
    )
  }
}

export default HomePage;