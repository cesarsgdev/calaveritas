import { Header } from "./styled/Header.styled";
import { Container } from "./styled/Container.styled";
import { Overlay } from "./styled/Overlay.styled";
import Menu from "../components/Menu";
import logo from "../logo.svg";
import { Link, NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Container flex align="center">
          <Link to="/">
            <img src={logo} alt="Logo LasCalaveritas.com" />
          </Link>
          <NavLink to="/backgrounds">Backgrounds</NavLink>
        </Container>
      </Header>
      <Menu />

      {children}
    </>
  );
};

export default Layout;
