import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 845CgFQOJycaz3aiP-DSHAZ7CMkxz9qBYDmM09VCWB0",
  },
});
