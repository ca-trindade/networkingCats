import {
  InputUi,
  InputFullContainer,
  InputContainer,
  Submit,
  InputLabel,
  Form,
} from "./style";

const handleSubmit = async (e) => {
    e.preventDefault();
};



export const InputEmail = () => {
  return (
    <>
      <InputFullContainer>
        <Form id="loginForm" name="loginForm" onSubmit={handleSubmit}>
          <InputContainer>
            <InputLabel for="email">Enter your email:</InputLabel>

            <InputUi
              type="email"
              id="email"
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              placeholder="example@example.com"
              required
            />
          </InputContainer>
          <InputContainer>
            <InputLabel for="pass">Enter you password:</InputLabel>
            <InputUi
              type="password"
              id="pass"
              name="password"
              minlength="8"
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
