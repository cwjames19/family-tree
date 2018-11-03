import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import HomePage from '../components/HomePage';
import FamilyPage from './FamilyPage';
import FamilyDetailsPage from './FamilyDetailsPage';

import '../styles/css/SiteContent.css';

const routeTransitionMs = 500;

class SiteContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeWrapperHeight: 0,
      routes: []
    }
  }

  handleEntering = function(node, isAppearing) {
    if(!node || isAppearing) return;

    console.log(`handleEntering()`);
    console.log(arguments);

    setTimeout( () => {
      node.style.position = 'relative';
    }, (routeTransitionMs / 2));
  }

  handleExiting = function(node, isAppearing) {
    if(!node || isAppearing) return;

    console.log(`handleExiting()`);
    console.log(arguments);

    setTimeout( () => {
      node.style.display = 'none';
      node.style.position = 'absolute';
    }, (routeTransitionMs / 2));
  }

  render() {
    const { location } = this.props;
    const { routeWrapperHeight } = this.state;
    const { handleEntering, handleExiting, handleHeightChange } = this;

    return(
        <TransitionGroup
          className="route-transition-wrapper"
          style={{minHeight: routeWrapperHeight}}
        >
          <CSSTransition
            key={location.key}
            classNames="route-transition"
            appear={true}
            timeout={routeTransitionMs}
            onEntering={handleEntering}
            onExiting={handleExiting}
          >
            <section
              className="route-transition"
              ref={this.extraSection}
            >
              <Switch location={location}>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/families'render={ (props) => <FamilyPage onHeightChange={handleHeightChange} {...props} /> } />
                <Route path='/families/:id' render={ (props) => <FamilyDetailsPage onHeightChange={handleHeightChange} {...props} /> } />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
    );
  }
}

SiteContent.propTypes = {
  location: PropTypes.object
}

export default withRouter(SiteContent);