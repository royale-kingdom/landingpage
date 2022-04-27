import styled from "styled-components";
import GoldenHeader from "../../components/GoldenHeader";

const UniqueNFTAssets = () => {
  return (
    <Container>
      <GoldenHeader>Unique NFT Assets</GoldenHeader>
    </Container>
  );
};

export default UniqueNFTAssets;

const Container = styled.div`
  width: 100vw;
  height: 55vw;
  background: green;
`;
