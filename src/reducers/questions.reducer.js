const questionReducer = (state, action) => {
  const newState = state;
  const clearState = new Map();
  switch (action.type) {
    case 'ANSWER':
      newState.set(action.name, action.value);
      window.localStorage.setItem(`${action.name}`, `${action.value}`);
      return newState;

    case 'RESTART':
      window.localStorage.clear();
      return clearState;

    default:
      return state;
  }
};

export default questionReducer;
