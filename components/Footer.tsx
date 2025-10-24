import NextLink from "next/link";
import styled from "styled-components";
import Container from "components/Container";
import { media } from "utils/media";
import WaveCta from "./WaveCta";
import { useRouter } from "next/router";
import cityData from "@/utils/cities_data.json";

import { extractCityFromPath, getLink } from "./Navbar";
import { getCityFromPath, getFirstRouteName } from "@/utils/formatString";

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: "Footer Links",
    items: [
      { title: "Home", href: "/" },
      // { title: "Contact", href: "/contact" },
      { title: "About Us", href: "/about" },
      // { title: "Price", href: "/price" },
      // { title: "Coupons", href: "/coupons" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms & Conditions", href: "/terms-conditions" },
    ],
  },
];

export default function Footer({ currentCity }: any) {
  const router = useRouter();
  const currentPath = router.asPath;
  // const city = getCityFromPath(extractCityFromPath(currentPath));
  const city = currentCity
    ? currentCity.subdomain
    : getFirstRouteName(currentPath);
  let cityPath

  if (
    city === "privacy-policy" ||
    city === "terms-conditions" ||
    city === "price" ||
    city === "gallery" ||
    city === "services" ||
    city === "safe" ||
    city === "commercial" ||
    city === "mailbox" ||
    city === "emergency" ||
    city === "residential" ||
    city === "coupons" ||
    city === "lock-repair" ||
    city === "automotive"
  ) {
    // console.log('yes')
  } else {
    cityPath = city;
    // console.log("no");
  }
  // console.log("city", currentPath);
  // console.log("footer getlink function: ", cityPath);
  
  const footerItemsCity: FooterItems = [
    {
      title: "Footer Links",
      items: [
        { title: "Home", href: `${getLink(city)}` },
        {
          title: "About Us",
          href: !cityPath ? `/about` : `/${city}/about`,
        },
        {
          title: "Privacy Policy",
          href: !cityPath ? `/privacy-policy` : `/${city}/privacy-policy`,
        },
        {
          title: "Terms & Conditions",
          href: !cityPath ? `/terms-conditions` : `/${city}/terms-conditions`,
        },
      ],
    },
  ];
  // console.log(city);
  return (
    <FooterWrapper>
      <FooterContainer>
        <ListContainer>
          {city === "" ? (
            <>
              {footerItems.map((singleItem) => (
                <FooterList key={singleItem.title} {...singleItem} />
              ))}
            </>
          ) : (
            <>
              {footerItemsCity.map((singleItem) => (
                <FooterList key={singleItem.title} {...singleItem} />
              ))}
            </>
          )}
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
    <span className="text-center text-3xl w-[250px]"> {/* <--- CORRECTED opening tag */}
      oscar@oscarslock.com
    </span> {/* <--- Correct closing tag */}
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
      <NextLink href={href} passHref>
        <>{title}</>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: rgb(21, 35, 62);
  color: rgb(255, 255, 255);
`;

const FooterContainer = styled(Container)`
  ${media("<=largeDesktop")} {
    max-width: 90%;
  }
  ${media("<=phone")} {
    max-width: 100%;
  }
`;

const LogoContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  border-radius: 100%;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* flex-wrap: wrap; */
  justify-content: space-between;

  ${media("<=tablet")} {
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;
const ListDescription = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* margin: 0 1.5rem; */

  & > *:not(:first-child) {
    margin-left: 2rem;
  }

  ${media("<=tablet")} {
    /* flex: 0 40%; */
    /* margin-right: 1.5rem; */
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

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    margin: 0 auto;
    align-self: center;
    color: rgba(255, 255, 255, 0.75);
    transition: all ease-in-out 0.4s;
    &:hover {
      color: white;
    }
  }
`;

const ShareBar = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${media("<tablet")} {
    display: flex;
  }
`;
const SocialmediaLink = styled.div`
  cursor: pointer;
  &:hover {
    scale: 1.2;
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
