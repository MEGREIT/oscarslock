import { media } from "@/utils/media";
import SectionTitle from "components/SectionTitle";
import styled from "styled-components";

export default function InformationSection() {
  return (
    <Wrapper>
      <h5>
        We would love to hear from you and discuss how we can support your
        business needs. Whether you have questions, inquiries, or want to
        explore our services further.
        <br />
        Please reach out to us.
      </h5>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 50rem;
  margin-left: 50rem;
  margin-bottom: 5rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${media("<largeDesktop")} {
    margin-right: 5rem;
    margin-left: 5rem;
  }
  ${media(">=largeDesktop")} {
    margin-right: 30rem;
    margin-left: 30rem;
  }

  h5 {
    font-size: 2rem;
    font-weight: 800;
    color: #0a3161;
    margin-top: 2rem;
    ${media("<tablet")} {
      font-size: 1.5rem;
    }
  }
`;
const Title = styled(SectionTitle)`
  ${media("<tablet")} {
    font-size: 3rem;
  }
`;
