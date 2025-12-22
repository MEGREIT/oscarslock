import { useEffect, useState } from "react";
import NextImage from "next/image";
import styled from "styled-components";
import { FacebookIcon, LinkedinIcon } from "react-share";
import NextLink from "next/link";
import { media } from "../utils/media";
import Link from "next/link";

export default function StickySocialMediaBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add event listener to check screen width on mount and resize
    function handleResize() {
      setIsMobile(window.innerWidth != 768); // Adjust the breakpoint as needed
    }

    handleResize(); // Call the function initially

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Wrapper>
      <ShareBar>
        <SocialmediaLink>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/core-maestro-management/"
            passHref
          >
            <LinkedinIcon size={isMobile ? 50 : 40} round={true} />
          </Link>
        </SocialmediaLink>{" "}
        <SocialmediaLink>
          <Link
            target="_blank"
            href="https://www.instagram.com/core.maestro.management/"
            passHref
          >
            {/* <TwitterIcon size={50} round={true} /> */}
            <NextImage
              src="/instagram_logo.webp"
              alt="Instagram Link"
              width={isMobile ? 65 : 50}
              height={isMobile ? 65 : 50}
            />
          </Link>
        </SocialmediaLink>{" "}
        <SocialmediaLink>
          <Link
            target="_blank"
            href="https://www.facebook.com/coremaestromanagement/"
            passHref
          >
            <FacebookIcon size={isMobile ? 50 : 40} round={true} />
          </Link>
        </SocialmediaLink>{" "}
        <SocialmediaLink>
          <Link
            target="_blank"
            href="https://wa.me/message/ODRQQDIW57LEN1"
            passHref
          >
            {/* <TwitterIcon size={50} round={true} /> */}
            <NextImage
              src="/whatsapp_logo.webp"
              alt="Whatsapp Link"
              width={isMobile ? 60 : 45}
              height={isMobile ? 60 : 45}
            />
          </Link>
        </SocialmediaLink>{" "}
      </ShareBar>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 0.4rem;
  z-index: 1000;
  ${media("<tablet")} {
    display: none;
  }
`;
const ShareBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SocialmediaLink = styled.div`
  cursor: pointer;
  padding: 0, 0.5rem;
  &:hover {
    scale: 1.2;
  }
`;
