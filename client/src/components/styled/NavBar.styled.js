import styled from "styled-components";
export const NavBar = styled.nav`
  width: 100%;
  height: 50px;
  /* background: #ffae44; */
  background: #fdc660;

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
  }
`;
