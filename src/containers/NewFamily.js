import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFamily } from '../actions/familyActions';
import { resetFamilyMembers } from '../actions/newFamilyActions';
import MemberInputGroup from './MemberInputGroup';

import '../styles/css/NewFamily.css';

class NewFamily extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastNameInput: '',
      nationalityInput: ''
    }
  }

  // NEEDS TO VALIDATE DATA
  handleSubmitClick = (e) => {
    e.preventDefault();
    const newFamily = {
      lastName: this.state.lastName,
      nationality: this.state.nationality,
      members: this.props.newFamily.members
    }
    if (
      newFamily &&
      newFamily.lastName &&
      newFamily.nationality &&
      newFamily.members.every( member => member.age && member.firstName)
    ) {
      this.props.addFamily(newFamily);
      this.props.resetFamilyMembers();
      this.lastNameInput.value = '';
      this.nationalityInput.value = '';
    } else {
      console.log('error: improperly formatted input');
    }
  }

  handleInputChange = (e) => {
    const { target: {name, value} } = e;
    this.setState({
      [name]: value
    });
  }

  render() {
    const memberInputGroups = this.props.newFamily.members.map( member =>
      <MemberInputGroup
        member={member}
        key={member.id}
      />
    )

    return(
      <div className="AddFamily">
        <h4>Add a Family</h4>
        <form className="pl-3">
          <div className="form-group">
            <label>Last Name </label>
            <input
              type="text"
              name="lastName"
              id="add-family__input-last-name"
              ref={ node => {
                this.lastNameInput = node;
              }}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Nationality </label>
            <input
              type="text"
              name="nationality"
              id="add-family__input-nationality"
              ref={ node => {
                this.nationalityInput = node;
              }}
              onChange={this.handleInputChange}
            />
          </div>
          <label className="label--family-members">Family Members</label>
          {memberInputGroups}
          <button
            onClick={this.handleSubmitClick}
            className="button--submit mt-3"
          >
            Add Family
          </button>
        </form>
      </div>
    );
  }
}

NewFamily.propTypes = {
  addFamily: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  newFamily: state.newFamily
});

const mapDispatchToProps = dispatch => ({
  addFamily: (data) => {
    dispatch(addFamily(data));
  },
  resetFamilyMembers: () => {
    dispatch(resetFamilyMembers());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewFamily);