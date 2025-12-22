import NextLink from "next/link";
import styled from "styled-components";
// import Button from "components/Button"; // Unused
import ButtonGroup from "components/ButtonGroup";
// import Container from "components/Container"; // Unused
import SectionTitle from "components/SectionTitle"; // Unused by WaveCta, but used by Title
// import { useNewsletterModalContext } from "contexts/newsletter-modal.context"; // Unused
import { media } from "utils/media";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Unused
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Unused
// import { height } from "./OpenGraphImage"; // Unused
// import { WhatsappIcon } from "./WhatsappIcon"; // Unused
// import { useRouter } from "next/router"; // Unused

const Link = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
  background: transparent;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 4px;
  border: 3px solid rgb(255, 255, 255);
  transition: all 0.35s;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    scale: 1.03;
  }
`;

// 1. Fixed the function to correctly receive props by destructuring { city }
//    and added a basic type for it.
export default function WaveCta({ city }: { city?: string }) {
  // const { setIsModalOpened } = useNewsletterModalContext(); // This was not being used
  // const router = useRouter(); // This was not being used

  // 2. Created safe href logic to prevent the '//contact' bug.
  //    This checks if 'city' exists AND isn't just a slash.
  const cityPath = city && city !== "/" ? `/${city}` : "";
  const contactHref = `${cityPath}/contact`;

  return (
    <>
      <CtaWrapper>
        <div className="flex flex-col space-y-4">
          <ButtonGroup>
            {/* 3. Used the new, safe 'contactHref' variable */}
            <NextLink href={contactHref} passHref>
              <Link>Contact Us</Link>
            </NextLink>
          </ButtonGroup>
          {/* <p className="text-center text-2xl">oscar@oscarslock.com</p> */}
        </div>
      </CtaWrapper>
    </>
  );
}

const CtaWrapper = styled.div`
  background: rgb(21, 35, 62);
  /* margin-top: -1rem; */
  /* padding-bottom: 6rem; */

  ${media("<=tablet")} {
    margin-top: 5rem;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 2.7rem;
  color: #fff;
  p {
    color: #fff;
    font-size: 1.5rem;
    text-align: left;
    margin: 0.2rem 0;
    ${media("<=tablet")} {
      text-align: center;
    }
  }
`;
const Title = styled(SectionTitle)`
  font-size: 2.3rem;
  color: rgb(255, 255, 255);
  padding-top: 2rem;
  margin-bottom: 4rem;
`;
// subscribe button

const SubscribeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
  background: transparent;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 4px;
  border: 3px solid rgb(255, 255, 255);
  transition: all 0.35s;
  cursor: pointer;
  border-radius: 1rem;

  &:hover {
    scale: 1.03;
  }
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid transparent;
  position: absolute;
  transform: rotate(45deg);
  right: 0;
  top: 0;
  z-index: -1;
  transition: all 0.35s;
`;

// end subscribe button
const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
`;
