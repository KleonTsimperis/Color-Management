import axios from 'axios';
import * as ACTION from '../actions/constants';

export const amendData = ({ dispatch }) => next => action => {
    if (action.type === ACTION.REPLACECOLOR) {
        let isValidAmendedHex = /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(action.value);
        if (!isValidAmendedHex){
            dispatch({ type: ACTION.HASERROR });
            return next(action);
        } else {
            dispatch({ type: ACTION.CLEARERROR });
        }
        dispatch({ type: ACTION.ISLOADING, value: true });
        axios.get(action.url)
             .then(response => dispatch({ type: ACTION.AMENDDATA, data: response.data, id: action.id}))
             .catch(error => console.log(error))
        dispatch({ type: ACTION.ISLOADING, value: false}); 
    }
    next(action);
  };