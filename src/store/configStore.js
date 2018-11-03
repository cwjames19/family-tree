import { createStore, combineReducers } from 'redux';
import families from '../reducers/familiesReducer';
import newFamily from '../reducers/newFamilyReducer';

// WILL ADD MIDDLEWARE HERE LATER
// const middleware = something...

const configureStore = (initialState, middleware = "FUNCTION") => {
  const appReducer = combineReducers({
    families,
    newFamily
  });

  const rootReducer = (state, action) => {
    let appState = state;

    return appReducer(appState, action);
  };

  const store = createStore(
    rootReducer,
    initialState,
    // enhancers/middleware go here
  )

  return store;
}

export default configureStore;