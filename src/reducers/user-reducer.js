const userReducer = (state = "", action) => {
  switch (action.type) {
    case "updateUser":
      return action.payload.user;
  }
  return state;
};

export default userReducer;
