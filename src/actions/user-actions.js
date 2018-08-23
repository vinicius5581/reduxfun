export const UPDATE_USER = "users:updateUser";

export const updateUser = newUser => ({
  type: UPDATE_USER,
  payload: {
    user: newUser
  }
});
