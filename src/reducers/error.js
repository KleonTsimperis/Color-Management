import * as ACTION from '../actions/constants';

const initialError = {
    hasError: false
};

const errorReducer = (state = initialError, action) => {
  switch (action.type) {
    case ACTION.CLEARERROR: 
      return { hasError: false }

    case ACTION.HASERROR:
      return { hasError: true }
    
    default:
      return state;
  }
};

export default errorReducer;