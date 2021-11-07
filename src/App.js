import styled from "styled-components";

import NavBar from "./components/NavBar";

const AppWrapper = styled.div`
  background-color: #181a1d;
  height: 100vh;
  padding: 0 50px 0 50px;
`;

const App = () => (
  <AppWrapper>
    <NavBar />
  </AppWrapper>
);

export default App;
