import styled from "styled-components";
import Link from "./Link";

const Card = ({ title, href }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque
        doloremque voluptatem sequi impedit quos soluta ad! Excepturi ea
        recusandae vero accusantium vitae impedit sit ut ipsum laudantium? Eum,
        magnam!
      </p>
      <Link href={href}>to {title}</Link>
    </CardWrapper>
  );
};

const CardWrapper = styled.article`
  padding: 2rem;
  border-radius: 1rem;
  background-color: #ccc;
`;

const CardTitle = styled.h2`
  text-transform: uppercase;
`;

export default Card;
