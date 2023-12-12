import Button from "@/components/Button";
import Link from "@/components/Link";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <h1>Hello from Next.js</h1>
      <FlexWrapper $direction="column">
        <Button
          type="submit"
          onClick={() => {
            console.log("wowowow");
          }}
          $color="primary"
        >
          wow <span>D:</span>
        </Button>
        <Button $color="danger">wow again D:</Button>
      </FlexWrapper>
      <Link href="/about">About</Link>
      <FlexWrapper $direction="row">
        <Button
          $variant="text"
          onClick={() => {
            console.log("text");
          }}
        >
          text
        </Button>
        <Button $variant="outlined">outlined</Button>
        <Button $variant="contained">contained</Button>
      </FlexWrapper>
    </>
  );
}

const FlexWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: ${({ $direction }) =>
    $direction === "row" ? "row" : "column"};
`;
