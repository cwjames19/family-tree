import React from 'react';
import Header from '../components/Header';
import SiteContent from '../containers/SiteContent';
import Footer from '../components/Footer';

import '../styles/css/App.css';

class App extends React.Component {
  render() {
    return(
      <div className="app">
        <Header />
        <SiteContent />
        <Footer />
      </div>
    );
  }
}

export default App;

