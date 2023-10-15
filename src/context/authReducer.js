export const authReducer = (state = false, action) => {
  switch (action.type) {
    case "close":
      return null;

    case "openModal":
      return { title: action.title, content: action.payload };
    default:
      return state;
  }
};
