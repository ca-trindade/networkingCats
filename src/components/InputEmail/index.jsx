import { useState } from "react";
import validator from "validator";
import {
  InputUi,
  InputFullContainer,
  InputContainer,
  Submit,
  InputLabel,
  Form,
} from "./style";



export const InputEmail = () => {

  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState("");
  
  function handleEmail(event) {
    let new_Email = event.target.value;
    setEmail(new_Email);
    if (!validator.isEmail(new_Email)) {
      setMessage("Please, enter a valid email!");
    } else {
      setMessage("");
    }
  }

const handleSubmit = async (e) => {
  e.preventDefault();
};


  return (
    <>
      <InputFullContainer>
        <Form id="loginForm" name="loginForm" onSubmit={handleSubmit}>
          <InputContainer>
            <InputLabel htmlFor="email">Enter your email:</InputLabel>
            <div style={{ color: "red" }}> {message} </div>
            <InputUi
              type="email"
              id="email"
              value={email}
              pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i"
              placeholder="example@example.com"
              onChange={handleEmail}
              required
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="pass">Enter you password:</InputLabel>
            <InputUi
              type="password"
              id="pass"
              name="password"
              minLength="8"
              placeholder="********"
              required
            />
          </InputContainer>
          <Submit type="submit" value="Sign in" />
        </Form>
      </InputFullContainer>
    </>
  );
};
