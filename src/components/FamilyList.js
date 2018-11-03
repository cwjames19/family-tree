import React from 'react';
import Family from '../containers/Family';

import '../styles/css/FamilyList.css';

class FamilyList extends React.Component {

  render() {
    const familyList = this.props.families.map( family => <Family family={family} key={`${family._id}`}/>);

    return(
      <div className="FamilyList">
        <h4 className="mb-3">Our Families</h4>
        {familyList}
      </div>
    )
  }
}

export default FamilyList;