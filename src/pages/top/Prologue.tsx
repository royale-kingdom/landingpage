import styled from "styled-components";
import GoldenHeader from "../../components/GoldenHeader";

const Prologue = () => {
  return (
    <Container>
      <GoldenHeader>Prologue</GoldenHeader>
    </Container>
  );
};

export default Prologue;

const Container = styled.div`
  width: 100vw;
  height: 55.5vw;
  position: relative;
`;
