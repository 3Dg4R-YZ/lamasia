export const authReducer = (state = false, action) => {
  switch (action.type) {
    case "close":
      return null;

    case "openForm":
      return action.payload;

    default:
      return state;
  }
};
