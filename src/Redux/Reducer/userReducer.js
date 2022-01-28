import { ADD_USER, DELETE_USER, EDIT_USER, UPDATE_USER } from "../Types/type";
const initialState = {
  disabled: "update",
  userList: [
    {
      type: "User",
      list: [
        {
          id: Date.now(),
          name: "ben",
          accountName: "ben123tel",
          password: "0113",
          phoneNumber: "033116",
          email: "helo@gmail.com",
        },
        {
          id: Date.now() + 1,
          name: "ben1",
          accountName: "ben123tel1",
          password: "01131",
          phoneNumber: "0331161",
          email: "helo@gmail.com1",
        },
      ],
    },
    {
      type: "Administrator",
      list: [
        {
          id: Date.now() + 3,
          name: "ben",
          accountName: "ben123tel",
          password: "0113",
          phoneNumber: "033116",
          email: "helo@gmail.com",
        },
        {
          id: Date.now() + 4,
          name: "ben1",
          accountName: "ben123tel1",
          password: "01131",
          phoneNumber: "0331161",
          email: "helo@gmail.com1",
        },
      ],
    },
  ],
  userEdit: {
    type: "",
    id: "",
    name: "",
    accountName: "",
    password: "",
    phoneNumber: "",
    email: "",
  },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      let userListUpdate = [...state.userList];
      let index = userListUpdate.findIndex(
        (user) => user.type === action.account
      );
      if (index !== -1) {
        let user = { ...action.user, id: Date.now() };
        userListUpdate[index].list.push(user);
      }
      state.userList = [...userListUpdate];
      return { ...state };
    }
    case DELETE_USER: {
      let listUpdate = [...state.userList];
      let index = listUpdate.findIndex((user) => user.type === action.account);
      if (index !== -1) {
        for (let i = 0; i < listUpdate[index].list.length; i++) {
          if (listUpdate[index].list[i].id === action.user.id) {
            listUpdate[index].list.splice(i, 1);
          }
        }
      }
      state.userList = [...listUpdate];
      return { ...state };
    }
    case EDIT_USER: {
      let type = action.account;
      let { id, accountName, name, password, phoneNumber, email } = action.user;
      state.userEdit = {
        ...state.userEdit,
        type,
        id,
        accountName,
        name,
        password,
        phoneNumber,
        email,
      };
      state.disabled = "add";
      return { ...state };
    }
    case UPDATE_USER: {
      let { type, id, accountName, name, password, phoneNumber, email } =
        action.user;
      let userListUpdate = [...state.userList];
      let index = userListUpdate.findIndex((user) => user.type === type);
      let flag = false;
      if (index !== -1) {
        for (let i = 0; i < userListUpdate[index].list.length; i++) {
          if (userListUpdate[index].list[i].id === id) {
            userListUpdate[index].list[i] = {
              ...userListUpdate[index].list[i],
              id,
              accountName,
              name,
              password,
              phoneNumber,
              email,
            };
            flag = true;
            break;
          }
        }
        if (!flag) {
          let userUpdate = {
            id: Date.now(),
            name: name,
            accountName: accountName,
            password: password,
            phoneNumber: phoneNumber,
            email: email,
          };
          userListUpdate[index].list.push(userUpdate);
        }
      }
      if (!flag) {
        for (let j = 0; j < userListUpdate.length; j++) {
          if (userListUpdate[j].type !== type) {
            for (let y = 0; y < userListUpdate[j].list.length; y++) {
              if (userListUpdate[j].list[y].id === id) {
                userListUpdate[j].list.splice(y, 1);
              }
            }
          }
        }
      }
      state.userEdit = {
        ...state.userEdit,
        type: "",
        id: "",
        name: "",
        accountName: "",
        password: "",
        phoneNumber: "",
        email: "",
      };
      state.userList = [...userListUpdate];
      state.disabled = "update";
      return { ...state };
    }
    default:
      return { ...state };
  }
};
