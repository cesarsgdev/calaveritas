import { NavBar } from "./styled/NavBar.styled";
import { Container } from "./styled/Container.styled";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <NavBar>
      <Container flex align="center" pd="0px 20px" height="50px">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Calaveritas
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/my-images">My Images</NavLink>
          </li> */}
          <li>
            <NavLink
              to="/backgrounds"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Backgrounds
            </NavLink>
          </li>
        </ul>
      </Container>
    </NavBar>
  );
};

export default Menu;
