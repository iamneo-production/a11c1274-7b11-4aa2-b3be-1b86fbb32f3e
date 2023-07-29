import { privateAxios } from "./helper";

export const getUsers = () => {
    return privateAxios.get(`/auth/users`).then((resp) => resp.data).catch((err) => console.log(err));
  };
  