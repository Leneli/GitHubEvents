import { actionEventsTypes } from '../constants';
import reducer from '../helpers/createReducer';

const { REQUEST_EVENTS, REQUEST_EVENTS_SUCCESS, REQUEST_EVENTS_FAIL } = actionEventsTypes;

const initState = {
  data: [],
  loading: false,
};

export default reducer(initState, {
  [REQUEST_EVENTS]: state => {
    return {
      ...state,
      loading: true,
    };
  },

  [REQUEST_EVENTS_SUCCESS]: (state, action) => {
    const data = action.payload;

    return {
      ...state,
      data,
      loading: false,
    };
  },

  [REQUEST_EVENTS_FAIL]: state => {
    return {
      ...state,
      data: [],
      loading: false,
    };
  },
});
