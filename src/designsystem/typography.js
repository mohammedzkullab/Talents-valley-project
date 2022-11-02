import styled from "styled-components/macro";

export const SuperHeading = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};
  margin: ${({ margin32 }) => (margin32 ? "0 0 32px 0" : "0")};
`;
export const Heading = styled(SuperHeading)`
  font-size: var(--heading);
`;
export const SubHeading = styled(SuperHeading)`
  font-size: 20px;
`;
export const Paragraph = styled.p`
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
