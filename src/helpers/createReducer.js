export default function createReducer(initState, handlers) {
  return (state = initState, action = {}) => {
    if (handlers[action.type]) {
      return handlers[action.type](state, action);
    }

    return state;
  };
}
