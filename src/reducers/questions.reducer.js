const questionReducer = (state, action) => {
  switch (action.type) {
    case 'ANSWER':
      window.localStorage.setItem(`${action.name}`, `${action.value}`);
      // eslint-disable-next-line no-param-reassign
      state[action.name] = action.value;
      return { ...state };
    default:
      return { ...state };
  }
};

export default questionReducer;
