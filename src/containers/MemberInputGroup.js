import React from 'react';
import { connect } from 'react-redux';
import {
  addMember,
  subtractMember,
  updateMemberInput
} from '../actions/newFamilyActions';
import PropTypes from 'prop-types';

import '../styles/css/MemberInputGroup.css';

class MemberInputGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      age: ''
    }
  }

  handleInputChange = (e) => {
    const {target: { name, value } } = e;
    const i = this.props.members.findIndex( el => el.id === this.props.member.id );
    const updatedMembers = [...this.props.members];
    updatedMembers[i] = Object.assign({}, updatedMembers[i], {[name]: value});

    this.props.updateMemberInput(updatedMembers);
  }

  handleAddMember = (e) => {
    e.preventDefault();
    this.props.addMember();
  }

  handleSubtractMember = (e) => {
    e.preventDefault();
    const index = this.props.members.findIndex( (el) => {
      return el.id === this.props.member.id
    });
    this.props.subtractMember(index);
  }

  render() {
    const hideMinus = this.props.members.length > 1 ? '' : 'hideMinus'

    return(
      <div className="form-inline mb-2">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={this.handleInputChange}
        />
        <label className="ml-3">Age</label>
        <input
          type="text"
          name="age"
          onChange={this.handleInputChange}
        />
        <button
          className="btn btn-default pr-1"
          onClick={this.handleAddMember}
        >
          <i className="fas fa-plus"></i>
        </button>
        <button
          className={`btn btn-default ${hideMinus}`} 
          onClick={this.handleSubtractMember}
        >
          <i className="fas fa-minus"></i>
        </button>
      </div>
    );
  }
}

MemberInputGroup.propTypes = {
  member: PropTypes.object,
  members: PropTypes.array,
  addMember: PropTypes.func,
  subtractMember: PropTypes.func,
  inputChange: PropTypes.func
}

const mapStateToProps = state => ({
  members: state.newFamily.members
});

const mapDispatchToProps = dispatch => ({
  addMember: () => {
    dispatch(addMember());
  },
  subtractMember: (data) => {
    dispatch(subtractMember(data));
  },
  updateMemberInput: (name, value, id) => {
    let action = updateMemberInput(name, value, id);
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MemberInputGroup);