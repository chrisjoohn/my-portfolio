import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";

const AppWrapper = styled.div`
  background-color: #181a1d;
  height: 100vh;
  padding: 0 50px 0 50px;
`;

const App = () => (
  <AppWrapper>
    <NavBar />
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  </AppWrapper>
);

export default App;
