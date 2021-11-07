import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  color: #fff;
  margin-top: 60px;
  justify-content: space-around;
`;

const GreetingsWrapper = styled.div`
  padding: 20px;
`;

const Greetings = styled.h1`
  font-size: 68px;
  animation: move-text 0.75s forwards;
`;

const Name = styled(Greetings)`
  font-size: 80px;
  animation: move-text 0.75s forwards;
`;

const ImageWrapper = styled.div``;

const ImageContainer = styled.div`
  height: 650px;
  width: 500px;
  background-size: cover;
  background-image: url("/images/me.JPG");
`;

const Home = () => {
  return (
    <HomeWrapper>
      <GreetingsWrapper>
        <Greetings>Hello World! 👋🏼</Greetings>
        <Name>I'm Chris John,</Name>
        <Greetings>Full Stack Developer.</Greetings>
      </GreetingsWrapper>
      <ImageWrapper>
        <ImageContainer />
        {/*<img src="/images/me.JPG" />*/}
      </ImageWrapper>
    </HomeWrapper>
  );
};

export default Home;
