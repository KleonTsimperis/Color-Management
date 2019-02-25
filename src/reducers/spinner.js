import * as ACTION from '../actions/constants';

const initialSpinnerState = {
  isLoading: false
}

const spinnerReducer = (state = initialSpinnerState, action) => {
  switch (action.type) {
    case ACTION.ISLOADING:
      return {
        isLoading: action.value
      }
    default:
      return state;
  }
};

export default spinnerReducer;