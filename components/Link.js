import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  background-color: var(--secondary-color);
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledLink;
