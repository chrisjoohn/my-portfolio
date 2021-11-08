import styled, { keyframes } from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  color: #fff;
  margin-top: 60px;
  justify-content: space-around;
  user-select: none;
  margin-top: 5%;
`;

const GreetingsWrapper = styled.div`
  padding-left: 100px;
  height: 50vh;
  width: 100%;
  margin-top: 10em;
`;

const typewriter = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

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
  width: 100%;
  margin-top: 5em;
`;

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const ImageContainer = styled.div`
  height: 600px;
  background-size: cover;
  background-image: url("/images/memoji.PNG");
  transform: translateY(-100px);
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <GreetingsWrapper>
        <Greetings>Hello World! 👋🏼</Greetings>
        <Name>I'm Chris John,</Name>
        <Role>Full Stack Developer.</Role>
      </GreetingsWrapper>
      <ImageWrapper>
        <ImageContainer />
      </ImageWrapper>
    </HomeWrapper>
  );
};

export default Home;
