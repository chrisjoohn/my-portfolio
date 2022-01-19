import styled, { keyframes } from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  color: #fff;
  margin-top: 60px;
  justify-content: space-around;
  user-select: none;
  min-height: 100vh;
  position: relative;
  background-color: #181a1d;
`;

const GreetingsWrapper = styled.div`
  padding-left: 100px;
  height: 50vh;
  width: 100%;
  margin-top: 20em;
`;

const typewriter = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`

const Greetings = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 68px;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typewriter} 1.5s steps(30, end);
`;

const Name = styled(Greetings)`
  font-size: 80px;
  animation-name: ${typewriter};
  animation-delay: 1.1s;
  animation-fill-mode: both;
  margin-bottom: 20px;
`;

const Role = styled(Greetings)`
  animation-name: ${typewriter};
  animation-delay: 2.2s;
  animation-fill-mode: both;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ImageContainer = styled.div`
  position: absolute;
  height: 700px;
  width: 700px;
  bottom: 5;
  background-size: cover;
  background-image: url("/images/memoji.PNG");
  background-repeat: no-repeat;
  animation: ${fadeIn} 5s;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <GreetingsWrapper>
        <Greetings>Hello World! 👋🏼</Greetings>
        <Name>I'm Chris John,</Name>
        <Role>Full Stack Developer.</Role>
      </GreetingsWrapper>
      {/*
      <ImageWrapper>
        <ImageContainer />
      </ImageWrapper>
      */}
    </HomeWrapper>
  );
};

export default Home;
