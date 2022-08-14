const questionReducer = (state, action) => {
  switch (action.type) {
    case 'ANSWER':
      window.localStorage.setItem(`${action.name}`, `${action.value}`);
      // eslint-disable-next-line no-param-reassign
      state[action.name] = action.value;
      return { ...state };
    case 'RESTART':
      window.localStorage.clear();
      // eslint-disable-next-line no-param-reassign
      return { ...action.questions };
    default:
      return { ...state };
  }
};

export default questionReducer;
