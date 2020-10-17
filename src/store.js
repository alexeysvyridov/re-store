import { createStore, applyMiddleware } from 'redux';
import  ThunkMiddleware  from 'redux-thunk';
import reducer from './reducers';

const logMiddleWare = ({getState}) => (next) => (action) => {
  return next(action);
};

const stringMiddleWare = () => (next) =>  (action) => {
  if(typeof action ===  'string') {
    return next({
      type:action
    });
  }
  return next(action)
};

const store = createStore(reducer, applyMiddleware(
  ThunkMiddleware, stringMiddleWare, logMiddleWare )
);

const myAction = (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAY_ACTION'
  },4000));
};

const myActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type:'DELAYED_ACTION'
    });
  }, timeout)
}

store.dispatch(myActionCreator(3000));

export default store;