import styled from "styled-components";
import NextLink from "next/link";
import { getCityPhone } from "@/utils/getCityPhone"; // Assuming this is still needed for city-specific numbers
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// --- Phone Formatting Helpers (moved outside component) ---
function formatToPhone(number: string | number | undefined | null): string {
  const defaultFormatted = '(800) 687-0480';
  if (number === null || number === undefined) return defaultFormatted;
  const cleaned = number.toString().replace(/\D/g, "");

  if (cleaned.length !== 10) {
    console.error("Invalid phone number length:", number);
    return defaultFormatted; // Return default if invalid length
  }

  const areaCode = cleaned.slice(0, 3);
  const prefix = cleaned.slice(3, 6);
  const lineNumber = cleaned.slice(6);

  return `(${areaCode}) ${prefix}-${lineNumber}`;
}

function removeHyphens(numberString: string | number | undefined | null): string {
  const defaultRaw = '8006870480';
  if (numberString === null || numberString === undefined) return defaultRaw;
  return numberString.toString().replace(/-/g, "");
}
// --- End Phone Formatting Helpers ---

export default function CallUsNowBtn() {
  const router = useRouter();
  const { city } = router.query; // Get city slug from query parameters

  // --- Set Correct Default Phone Number ---
  const defaultPhoneNumber = "8006870480";
  const [phone, setPhone] = useState<string>(defaultPhoneNumber);
  // --- End Default Phone Number ---

  const [isMobile, setIsMobile] = useState(false);

  // Effect to check screen size
  useEffect(() => {
    const checkIfMobile = () => {
      // Check if window exists (client-side) before accessing innerWidth
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 767);
      }
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Effect to update phone based on city, fallback to default
  useEffect(() => {
    let phoneNumberToSet = defaultPhoneNumber; // Start with default
    if (typeof city === "string") {
      const cityPhoneNumber = getCityPhone(city); // Check if city has specific number
      if (cityPhoneNumber) {
        phoneNumberToSet = cityPhoneNumber;
      }
    }
    setPhone(phoneNumberToSet);
  }, [city]); // Re-run only when city changes

  // Only render the button on mobile
  if (!isMobile) return null;

  return (
    <FixedBottomContainer>
      {/* Use NextLink for client-side navigation consistency if needed, otherwise <a> is fine for tel: */}
      <CallNowButton href={`tel:${removeHyphens(phone)}`}>
        <CallNowText>
          <CallNowLabel>Call Now</CallNowLabel>
          <PhoneNumber>{formatToPhone(phone)}</PhoneNumber>
        </CallNowText>
      </CallNowButton>
    </FixedBottomContainer>
  );
}

// --- Styled Components (remain the same) ---
const FixedBottomContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 15px 0;
  background-color: #751318;
  text-align: center;
  display: block !important; /* Ensure it displays, overriding potential external styles */
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
  font-family: 'Arial', sans-serif; // Consider using a project font if available
`;
