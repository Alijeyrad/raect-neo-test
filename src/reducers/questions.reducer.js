const questionReducer = (state, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'ANSWER':
      window.localStorage.setItem(`${action.name}`, `${action.value}`);
      newState[action.name] = action.value;
      return { ...newState };

    case 'RESTART':
      window.localStorage.clear();
      return { ...action.questions };

    default:
      return { ...state };
  }
};

export default questionReducer;
