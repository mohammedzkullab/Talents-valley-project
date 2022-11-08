import { StyledContentWrapper } from "./style";
function ContentWrapper({ children, head, backBtn }) {
  return (
    <StyledContentWrapper>
      {backBtn && (
        <div className="head">
          {backBtn}
          {head}
        </div>
      )}
      {!backBtn && head}
      {children}
    </StyledContentWrapper>
  );
}

export default ContentWrapper;
