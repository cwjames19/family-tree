import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NewFamily from './NewFamily';
import FamilyList from '../components/FamilyList';


import '../styles/css/FamilyPage.css';

class FamilyPage extends React.Component {
  render() {

    return(
      <div className={`FamilyPage`}>
        <FamilyList families={this.props.families} />
        <NewFamily />
      </div>
    );
  }
}

FamilyPage.propTypes = {
  families: PropTypes.array
}

const mapStateToProps = state => {
  return {
    families: state.families,
  }
}

export default connect(mapStateToProps)(FamilyPage);