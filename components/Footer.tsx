import React from "react";
import NextLink from "next/link";
import styled from "styled-components";
import Container from "components/Container";
import { media } from "utils/media";
import WaveCta from "./WaveCta";
import { useRouter } from "next/router";

// --- HELPER FUNCTION ---
const getLink = (city: any) => {
  if (!city || city === "") return "/";
  const reserved = [
    "privacy-policy", "terms-conditions", "price", "gallery", 
    "services", "safe", "commercial", "mailbox", "emergency", 
    "residential", "coupons", "lock-repair", "automotive", "about", "contact"
  ];
  if (reserved.includes(city)) return "/";
  return `/${city}`;
};

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

export default function Footer({ currentCity }: any) {
  const router = useRouter();
  const currentPath = router.asPath;
  
  let city = "";
  if (currentCity && currentCity.subdomain) {
    city = currentCity.subdomain;
  } else {
    const parts = currentPath.split("/");
    if (parts.length > 1 && parts[1]) {
       const reserved = ["privacy-policy", "terms-conditions", "services", "about", "contact"];
       if (!reserved.includes(parts[1])) {
         city = parts[1].split("?")[0];
       }
    }
  }

  const footerItems: FooterItems = [
    {
      title: "Footer Links",
      items: [
        { title: "Home", href: getLink(city) },
        { title: "About Us", href: city ? `/${city}/about` : "/about" },
        // These point to the new TSX pages
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms & Conditions", href: "/terms-conditions" },
      ],
    },
  ];

  return (
    <FooterWrapper>
      <FooterContainer>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
          <WaveCta city={city} />
        </ListContainer>
        <BottomBar>
          <div>
            <Copyright>
              &copy; 2024 Copyright Oscars Lock and Key Services LLC
            </Copyright>
          </div>
          <div>
            <Copyright>
              <span className="text-center text-3xl w-[250px]">
                oscar@oscarslock.com
              </span>
            </Copyright>
          </div>
        </BottomBar>
      </FooterContainer>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      {/* FIX: Added <a> tag inside. 
         Without this, NextLink doesn't know where to attach the 'href', 
         and it might be falling back to default browser behavior or cached HTML.
      */}
      <NextLink href={href} passHref legacyBehavior>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

// --- STYLES ---

const FooterWrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: rgb(21, 35, 62);
  color: rgb(255, 255, 255);
  ${media("<=tablet")} {
    padding-bottom: 12rem; 
  }
`;

const FooterContainer = styled(Container)`
  ${media("<=largeDesktop")} {
    max-width: 90%;
  }
  ${media("<=phone")} {
    max-width: 100%;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  ${media("<=tablet")} {
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  & > *:not(:first-child) {
    margin-left: 2rem;
  }
  ${media("<=tablet")} {
    & > *:not(:first-child) {
      margin: 0 1.5rem;
    }
    flex-direction: column;
    max-width: 30%;
  }
  ${media("<=phone")} {
    flex: 0 100%;
    margin-right: 0rem;
    align-items: center;
    justify-content: center;
  }
`;

// --- FIXED CSS IS HERE ---
const ListItemWrapper = styled.p`
  font-size: 1.6rem;
  
  a {
    text-decoration: none;
    margin: 0 auto;
    align-self: center;
<<<<<<< HEAD
    color: white !important; 
    transition: all ease-in-out 0.4s;
    cursor: pointer;
    
=======
    
    /* FORCE WHITE COLOR ALWAYS */
    color: white !important; 
    
    transition: all ease-in-out 0.4s;
    
    /* Ensure it stays white even if visited */
>>>>>>> 50433bcede580211275adc752b42118c5a09b8b1
    &:visited {
      color: white !important;
    }

    &:hover {
      color: white;
<<<<<<< HEAD
      opacity: 0.8; 
=======
      opacity: 0.8; /* Optional: Slight dim on hover so they know it's clickable */
>>>>>>> 50433bcede580211275adc752b42118c5a09b8b1
    }
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media("<=tablet")} {
    flex-direction: column;
    align-items: center;
  }
`;
