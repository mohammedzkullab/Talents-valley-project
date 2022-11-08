import styled from "styled-components/macro";
export const StyledTooltip = styled.div`
  /* Custom properties */

  /* Wrapping */

  display: inline-block;
  position: relative;

  /* Absolute positioning */
  .Tooltip-Tip {
    position: absolute;
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    padding: 9px 16px;
    color: #8c8c8c;
    background: white;
    font-size: 11px;
    font-family: sans-serif;
    line-height: 1;
    z-index: 100;
    white-space: nowrap;
  }

  /* CSS border triangles */
  .Tooltip-Tip::before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
  }

  /* Absolute positioning */
  .Tooltip-Tip.top {
    top: calc(30px * -1);
  }
  /* CSS border triangles */
  .Tooltip-Tip.top::before {
    top: 100%;
    border-top-color: white;
  }

  /* Absolute positioning */
  .Tooltip-Tip.right {
    left: calc(100% + 30px);
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }
  /* CSS border triangles */
  .Tooltip-Tip.right::before {
    left: calc(6px * -1);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-right-color: white;
  }

  /* Absolute positioning */
  .Tooltip-Tip.bottom {
    bottom: calc(30px * -1);
  }
  /* CSS border triangles */
  .Tooltip-Tip.bottom::before {
    bottom: 100%;
    border-bottom-color: white;
  }

  /* Absolute positioning */
  .Tooltip-Tip.left {
    left: auto;
    right: calc(100% + 30px);
    top: 50%;
    transform: translateX(0) translateY(-50%);
  }
  /* CSS border triangles */
  .Tooltip-Tip.left::before {
    left: auto;
    right: calc(6px * -2);
    top: 50%;
    transform: translateX(0) translateY(-50%);
    border-left-color: var(--tooltip-background-color);
  }
`;
