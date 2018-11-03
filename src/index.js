import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/configStore';
import Root from './containers/Root';
import * as serviceWorker from './serviceWorker';

import './styles/css/Root.css';

const initialState = {
  families: [
    {
      _id: 0,
      lastName: "James",
      members: [
        {
          firstName: "Cameron",
          age: "27"
        },
        {
          firstName: "Keaton",
          age: "25"
        },
        {
          firstName: "Craig",
          age: "56"
        },
        {
          firstName: "Katie",
          age: "29"
        },
        {
          firstName: "Kim",
          age: "55"
        }
      ],
      nationality: "American"
    }
  ]
};
const store = configStore(initialState);

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
