import styled from "styled-components";
import {Link} from "react-router-dom"

export const NavbarUi = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #876445;
`;

export const LinkNavbarContainer = styled.div`

`;

export const LinkNavbar = styled(Link)`
  font-size: 1.2vw;
  font-family: "Quattrocento", serif;
  font-weight: 400;
  text-decoration: none;
  color: #f4dfba;
  margin: 0 20px;

  &:hover {
    color: #ca965c;
    border-bottom: solid 1px;
  }
  &:active {
    color: #ca965c;
  }
`;