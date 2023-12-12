import styled, { css } from "styled-components";

export default styled.button`
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;

  background-color: ${() => {
    const hue = Math.round(Math.random() * 360);
    return `hsl(${hue}deg, 100%,50%)`;
  }};

  &:hover {
    background-color: var(--secondary-color);
  }

  &:active {
    scale: 0.96;
  }

  ${({ $variant }) =>
    $variant === "text" &&
    css`
      background-color: transparent;
      color: var(--primary-color);
    `}

  ${({ $variant }) =>
    $variant === "outlined" &&
    css`
      background-color: transparent;
      color: var(--primary-color);
      border: solid 2px var(--primary-color);
    `} 

  ${({ $variant }) =>
    $variant === "contained" &&
    css`
      background-color: var(--primary-color);
      color: white;
    `}
`;

// button + a special css Class

/* ${({ $variant }) => {
    if ($variant === "text") {
      return `
      background-color: transparent;
      color: var(--primary-color);
      `;
    } else if ($variant === "outlined") {
      return `
    background-color: transparent;
    color: var(--primary-color);
    border: solid 2px var(--primary-color);
  `;
    } else if ($variant === "contained") {
      return `
    background-color: var(--primary-color);
    color: white;
  `;
    }
  }} */
