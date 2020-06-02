import { createContext } from "react";

const initialUser = {
  name: "",
  email: "",
  description: "",
  profilePath: "",
  sellCont: 0,
  buyCnt: 0,
  season: "",
};

const UserContext = createContext(initialUser);

export default UserContext;
