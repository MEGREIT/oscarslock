import { media } from "@/utils/media";
import styled from "styled-components";

const Container = styled.div`
  max-width: 130em;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  /* ${media("<=desktop")} {
    max-width: 80em;
    display: none;
  } */
`;

export default Container;
