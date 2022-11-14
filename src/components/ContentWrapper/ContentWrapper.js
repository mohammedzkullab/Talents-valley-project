import { StyledContentWrapper } from "./style";
function ContentWrapper({ children, head, backBtn, signUp }) {
  return (
    <StyledContentWrapper signUp={signUp}>
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
