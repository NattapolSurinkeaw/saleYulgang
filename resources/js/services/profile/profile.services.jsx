import axios from "axios";

export const editProfile = (param) => {
  return axios.post('/editprofile', param).then((res) => res).catch((err) => err)
}