import { useState } from "react";
import "./Details.css";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";
const Details = () => {
  const [values, setValues] = useState({
    name: "",
    pan: "",
    gender: "",
    aadhar: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Write name",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "pan",
      type: "text",
      placeholder: "pan",
      errorMessage: "It should be a 14 digit alphanumeric",
      pattern: "^[A-Za-z0-9]{14}$",
      label: "pan",
      required: true,
    },

    {
      id: 3,
      name: "aadhar",
      type: "aadhar",
      placeholder: "aadhar",
      errorMessage: "16 digit numeric",
      label: "aadhar",
      pattern: "^[0-9]{16}$",
      required: true,
    },
  ];
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Final", { state: { id: values } });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Details;
