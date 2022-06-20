import styled from "styled-components";
export const NavBar = styled.nav`
  width: 100%;
  height: 50px;
  /* background: #ffae44; */
  background: var(--main-yellow);

  & ul {
    display: flex;
    height: 100%;
    gap: 20px;
    list-style: none;
  }

  & ul li {
    height: 100%;
  }

  & ul a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 800;
    color: #000;
    text-decoration: none;
    height: 100%;
    padding: 0 20px;
    transition: 1s;
  }

  & ul a:hover {
    background: var(--main-yellow-trans);
  }

  & ul a.active {
    background: var(--main-yellow-trans);
  }
`;
