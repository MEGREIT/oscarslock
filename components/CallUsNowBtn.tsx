import styled from "styled-components";
import NextLink from "next/link";
import { getCityPhone } from "@/utils/getCityPhone";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function formatToPhone(number: string) {
  const cleaned = number.toString().replace(/\D/g, "");

  if (cleaned.length !== 10) {
    throw new Error("Phone number must be exactly 10 digits.");
  }

  const areaCode = cleaned.slice(0, 3);
  const prefix = cleaned.slice(3, 6);
  const lineNumber = cleaned.slice(6);

  return `(${areaCode}) ${prefix}-${lineNumber}`;
}

function removeHyphens(numberString: string) {
  return numberString.replace(/-/g, "");
}

export default function CallUsNowBtn() {
  const router = useRouter();
  const { city } = router.query;
  const [phone, setPhone] = useState<string>("5087367178");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Initial check
    checkIfMobile();
    
    // Add event listener for resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (typeof city === "string") {
      const phoneNumber = getCityPhone(city);
      setPhone(phoneNumber || "5087367178");
    } else {
      setPhone("5087367178");
    }
  }, [city]);

  if (!isMobile) return null;

  return (
    <FixedBottomContainer>
      <NextLink href={`tel:${removeHyphens(phone)}`} passHref>
        <CallNowButton>
          <CallNowText>
            <CallNowLabel>Call Now</CallNowLabel>
            <PhoneNumber>{formatToPhone(phone)}</PhoneNumber>
          </CallNowText>
        </CallNowButton>
      </NextLink>
    </FixedBottomContainer>
  );
}

const FixedBottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 15px 0;
  background-color: #751318;
  text-align: center;
  display: block !important;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
`;

const CallNowButton = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

const CallNowText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CallNowLabel = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PhoneNumber = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  font-family: 'Arial', sans-serif;
`;