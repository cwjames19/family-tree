import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/ErrorPage.css';

class ErrorPage extends React.Component {

  render() {
    return(
      <div className="ErrorPage d-flex flex-column justify-content-center align-items-center">
        <h3>Error 404</h3>
        <Link to={`/`}>
          <button className="btn btn-default">Return Home</button>
        </Link>
      </div>
    )
  }
}

export default ErrorPage;