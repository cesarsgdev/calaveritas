import { NavBar } from "./styled/NavBar.styled";
import { Container } from "./styled/Container.styled";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <NavBar>
      <Container>
        <ul>
          <li>
            <NavLink to="/">My Calaveritas</NavLink>
          </li>
          <li>
            <NavLink to="/my-images">My Images</NavLink>
          </li>
          <li>
            <NavLink to="/backgrounds">Backgrounds</NavLink>
          </li>
        </ul>
      </Container>
    </NavBar>
  );
};

export default Menu;
