import { Purr } from "../Logo";
import { NavbarUi, LinkNavbar, LinkNavbarContainer } from "./style";


export const Navbar = () => {
  return (
    <>
      <NavbarUi>
        <Purr />
        <LinkNavbarContainer>
        <LinkNavbar to="/LoginPage">Login</LinkNavbar>
          <LinkNavbar>Registration</LinkNavbar>
        </LinkNavbarContainer>
      </NavbarUi>
    </>
  );
}
