import axios from "axios";

const submitForm = async () => {

  const payload = {
    name: "John",
    email: "john@gmail.com"
  };

  await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    payload
  );
};