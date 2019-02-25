import axios from 'axios';
import * as ACTION from '../actions/constants';

export const fetchData = ({ dispatch, getState }) => next => action => {
    let isError = getState().errorReducer.hasError;
    if (isError) {
        return next(action);
    } 
    if (action.type === ACTION.FETCHCOLOR) {
        dispatch({ type: ACTION.ISLOADING, value: true });
        axios.get(action.url)
             .then(response => dispatch({ type: ACTION.FETCHDATA, data: response.data }))
             .catch(error => console.log(error))
        dispatch({ type: ACTION.ISLOADING, value: false}); 
    }
    next(action);
  };
  