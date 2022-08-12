const questionReducer = (state, action) => {
  switch (action.type) {
    case 'ANSWER':
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default questionReducer;
