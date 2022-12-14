import { StyledContentWrapper } from "./style";
function ContentWrapper({
  children,
  head,
  backBtn,
  signUp,
  width,
  paddingTop,
  paddingRight,
  paddingLeft,
  paddingBottom,
}) {
  return (
    <StyledContentWrapper
      style={{ width, paddingTop, paddingRight, paddingLeft, paddingBottom }}
      signUp={signUp}
    >
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
