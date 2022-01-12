import { ReactNode } from "react";
import styled from "styled-components";

import { Img } from "../Img";
import { Text } from "../Typo/Text";
import { Box } from "../Box";
import memberSquircle from "../../assets/images/landingpage/member_squircle.svg";

interface MemberProps {
  avatar?: ReactNode;
  fullName?: string;
  title?: string;
}
const Member = ({ avatar, fullName, title }: MemberProps) => {
  return (
    <Container>
      <Box width="164px" height="164px" sm={{ width: "96px", height: "96px" }}>
        <Img src={memberSquircle} width="100%" height="100%" />
      </Box>
      <MemberBadge>
        <Text
          fontSize="18px"
          lineHeight="28px"
          justify="center"
          fontWeight="500"
          sm={{ fontSize: "14px", lineHeight: "20px" }}
        >
          {fullName}
        </Text>
        <Text
          font="Lato"
          fontSize="13px"
          lineHeight="20px"
          justify="center"
          color="rgba(238, 226, 204, 0.52)"
          sm={{ fontSize: "10px", lineHeight: "16px" }}
        >
          {title}
        </Text>
      </MemberBadge>
    </Container>
  );
};

export default Member;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 22px;
`;

const MemberBadge = styled.div`
  width: 188px;
  padding: 4px 0;
  border: 1px solid #f6c65c;
  border-radius: 4px;
  background: rgba(238, 226, 204, 0.24);
  backdrop-filter: blur(16px);
  transform: translate(0, -60%);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 120px;
    transform: translate(0, -60%);
  }
`;
