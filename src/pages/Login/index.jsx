import { InputEmail } from "../../components/InputEmail";
import { Navbar } from "../../components/Navbar";
import { LoginUi, CatImg } from "./style";
import catRight from "../../assets/catOnRight.png";

export const LoginPage = () => {
  return (
    <>
      <Navbar />
      <LoginUi>
        <InputEmail />
      </LoginUi>
      <CatImg src={catRight} alt="Cat on Right" />
    </>
  );
};
