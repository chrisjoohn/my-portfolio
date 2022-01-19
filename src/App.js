import styled from "styled-components";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

import Home from "./pages/Home";

const AppWrapper = styled.div`
  background-color: #181a1d;
  height: 100vh;
  padding: 0 50px 0 50px;
`;

const App = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <Home />
        </FullpageSection>
        <FullpageSection
          style={{
            height: "100vh",
            background: "#181a1d",
          }}
        >
          Experiences
        </FullpageSection>
        <FullpageSection
          style={{
            height: "100vh",
          }}
        >
          Tech Stacks
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default App;
