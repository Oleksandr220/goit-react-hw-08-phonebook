import axios from "axios";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const profile = localStorage.getItem("persist:root");
// console.log(JSON.parse(profile).token);

async function postContact({ name, number }) {
  const { data } = await axios
    .post(
      "/contacts",
      {
        name,
        number,
      },
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(profile)?.token.replace(
            /['"]/g,
            ""
          )}`,
        },
      }
    )
    .then((res) => res)
    .catch((err) => err);

  return data;
}

async function deleteContact(id) {
  const { data } = await axios
    .delete(`/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(profile)?.token.replace(
          /['"]/g,
          ""
        )}`,
      },
    })
    .then((res) => res)
    .catch((err) => err);
  return data;
}

async function fetchContacts() {
  const { data } = await axios.get("/contacts", {
    headers: {
      Authorization: `Bearer ${JSON.parse(profile)?.token.replace(
        /['"]/g,
        ""
      )}`,
    },
  });

  return data;
}

const api = {
  postContact,
  fetchContacts,
  deleteContact,
};

export default api;
