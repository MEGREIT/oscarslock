import Date from "components/PostDate";
import type { PrivacyPolicy } from "@/sanity/lib/queries";
import styled from "styled-components";
import { media } from "@/utils/media";

export default function PrivacyPolicyHeader(
  props: Pick<PrivacyPolicy, "title" | "date" | "content">
) {
  const { title, date } = props;
  return (
    <Wrapper>
      <h1 className="mb-12 text-center text-5xl font-bold leading-tight tracking-tighter md:text-6xl md:leading-none lg:text-7xl">
        {title}
      </h1>
      <div className="text-center mb-10 text-xl md:text-1xl lg:text-2xl">
        {"Last modified on: "}
        <Date dateString={date!} />
      </div>
      {/* <div className="hidden md:mb-12 md:block">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="hidden md:mb-12 md:block text-lg">
        <Date dateString={date} />
      </div> */}

      {/* <div className=" max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 block md:hidden">
          <Date dateString={date} />
        </div>
       
      </div> */}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 0 18rem;
  ${media("<=largeDesktop")} {
    margin: 0 5rem;
  }
  ${media("<tablet")} {
    margin: 0 0;
  }
`;
