import { ADD_USER, DELETE_USER, EDIT_USER, UPDATE_USER } from "../Types/type";

export const add_user = (user, account) => ({
  type: ADD_USER,
  user,
  account,
});
export const delete_user = (user, account) => ({
  type: DELETE_USER,
  user,
  account,
});
export const edit_user = (user, account) => ({
  type: EDIT_USER,
  user,
  account,
});
export const update_user = (user) => ({
  type: UPDATE_USER,
  user,
});
