import React from 'react';
import { CSSTransition } from 'react-transition-group';

const WithAppearTransition = ({ component: Component, ...rest }) => {
  return(
    <CSSTransition
      appear={true}
      in={true}
      classNames="fade"
      timeout={1000}
    >
      <Component {...rest} />
    </CSSTransition>
  );
}

export default WithAppearTransition;