import axios from "axios";

const submitForm = async () => {

  const payload = {
    name: "himani",
    email: "himani@gmail.com"
  };

  await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    payload
  );
};