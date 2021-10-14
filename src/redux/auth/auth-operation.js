import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const profile = localStorage.getItem("persist:root");
// console.log(JSON.parse(profile).token);

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

const register = createAsyncThunk("auth/register", async (credential) => {
  try {
    console.log(credential);
    const { data } = await axios.post("/users/signup", credential);
    token.set(data.token);
    return data;
  } catch (error) {
    return new Error(error);
  }
});

const login = createAsyncThunk("auth/login", async (credential) => {
  try {
    console.log(credential);
    const { data } = await axios.post("/users/login", credential);
    token.set(data?.token);
    return data;
  } catch (error) {
    return new Error(error);
  }
});

const logout = createAsyncThunk("auth/logout", async (credential) => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {}
});

const currentUser = createAsyncThunk("auth/current", async (credential) => {
  try {
    const { data } = await axios.get("/users/current", {
      headers: {
        Authorization: `Bearer ${JSON.parse(profile)?.token.replace(
          /['"]/g,
          ""
        )}`,
      },
    });
    token.set(data.token);
    return data;
  } catch (error) {}
});

const auth = {
  register,
  logout,
  login,
  currentUser,
};

export default auth;
