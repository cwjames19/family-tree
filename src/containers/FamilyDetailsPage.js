import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


import '../styles/css/FamilyDetailsPage.css';

class FamilyDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: this.props.family.members,
      lastName: this.props.family.lastName,
      focusedMemberIndex: 0,
      appearCardContent: true
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleClick = function(e) {
    e.preventDefault();
    const membersLength = this.state.members.length;
    if (Array.from(e.currentTarget.classList).includes("fa-angle-right")) {
      this.setState({
        focusedMemberIndex: (this.state.focusedMemberIndex + 1) % membersLength,
        appearCardContent: !this.state.appearCardContent
      })
    } else {
      const newFocusedMember = this.state.focusedMemberIndex === 0 ? this.state.members.length - 1 : this.state.focusedMemberIndex - 1 ;
      this.setState({
        focusedMemberIndex: newFocusedMember,
        appearCardContent: !this.state.appearCardContent
      })
    }
  }

  toggleAppear = () => {
    this.setState({ appearCardContent: !this.state.appearCardContent });
  }

  handleExit = () => {
    this.toggleAppear();
  }
  
  render() {
    const {
      lastName,
      members,
      focusedMemberIndex,
      appearCardContent
    } = this.state;
    const focusedMember = members[focusedMemberIndex];
    const membersList = members.map( (member) => 
      <li key={member.firstName}>{`${member.firstName}, ${member.age}`}</li>
    );

    return(
      <div className="FamilyDetailsPage">
        <div className="FamilyDetailsPage--header d-block">
          <div className="d-flex flex-row justify-content-between">
            <h4 className="m-0">Family Details Page</h4>
            <Link to="/families" className="link--return">Return to Families</Link>
          </div>
          <hr className="my-3"/>
          <h6>Learn something about the {this.props.family.lastName} family.</h6>
        </div>
        <div className="FamilyDetailsPage--content">
          <div className="FamilyDetailsPage--content--members">
            <p>Members</p>
            <div href="#" className="membersGraphic d-flex flex-row-nowrap justify-content-center align-items-center">
              <span
                onClick={this.handleClick}
                className="membersGraphic--span fas fa-angle-left"></span>
              <div className="card" style={{height: "160px", width: "200px"}}>
                  <TransitionGroup className="card-transition">
                    <CSSTransition
                      key={focusedMember.firstName}
                      in={appearCardContent}
                      appear={true}
                      timeout={{enter: 600, exit: 300}}
                      classNames="fade"
                    >
                      <div className="card-body">
                        <h4 className="card-title">{focusedMember.firstName}</h4>
                        <p>{`Family member: ${focusedMember.firstName} ${lastName}, Age: ${focusedMember.age}`}</p>
                      </div>
                    </CSSTransition>
                  </TransitionGroup>
              </div>
              <span
                onClick={this.handleClick}
                className="membersGraphic--span fas fa-angle-right">
              </span>
            </div>
            <ul>
              {membersList}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

FamilyDetailsPage.propTypes = {
  family: PropTypes.object,
  members: PropTypes.array,
  lastName: PropTypes.string,
  focusedMemberIndex: PropTypes.number,
  appearCardContent: PropTypes.bool
}

const mapStateToProps = (state, ownProps) => {
  return {
    family: state.families.find( el => {
      return el._id === Number(ownProps.match.params.id)
    })
  }
};

export default connect(mapStateToProps)(FamilyDetailsPage);