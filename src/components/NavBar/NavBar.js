import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import navbarItems from "../../constants/navbarItems";

const NavBarWrapper = styled.div`
  display: flex;
  color: #fff;
`;

const NavBarContent = styled.div`
  display: flex;
  padding: 20px;
  padding-right: 200px;
  width: 100%;
  justify-content: flex-end;
`;

const NavBarItem = styled.div`
  margin-right: 20px;
  opacity: ${({ active }) => (active ? 1 : 0.3)};
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const NavBar = () => {
  const loc = useLocation();
  const navigate = useNavigate();

  return (
    <NavBarWrapper>
      <NavBarContent>
        {navbarItems.map(({ text, path }) => {
          return (
            <NavBarItem
              key={path}
              active={path === loc.pathname}
              onClick={() => navigate(path)}
            >
              {text}
            </NavBarItem>
          );
        })}
      </NavBarContent>
    </NavBarWrapper>
  );
};

export default NavBar;
