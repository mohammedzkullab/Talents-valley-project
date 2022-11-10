import styled from "styled-components/macro";

export const SuperHeading = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};
  margin: ${({ margin32 }) => (margin32 ? "0 0 32px 0" : "0")};
`;
export const Heading = styled.p`
  font-size: var(--heading);
  font-weight: 600;
  text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};
  margin: ${({ margin32 }) => (margin32 ? "0 0 32px 0" : "0")};
`;
export const SubHeading = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};
  margin-top: ${({ margin50 }) => (margin50 ? "50px" : 0)};
  margin: ${({ margin32 }) => (margin32 ? "0 0 32px 0" : "0")};
`;
export const Paragraph = styled.p`
  margin-top: ${({ mt }) => (mt ? "37px" : 0)};
  font-size: var(--font-size);
`;
export const SubParagraph = styled(Paragraph)`
  font-size: var(--sub-font-size);
`;
export const Hint = styled(Paragraph)`
  font-size: var(--hint);
`;

export const Title = styled(Paragraph)`
  font-size: var(--label);
  text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};
`;
