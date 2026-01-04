import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useNewsletterModalContext } from "contexts/newsletter-modal.context";
import {
  ScrollPositionEffectProps,
  useScrollPosition,
} from "hooks/useScrollPosition";
import { NavItems, SingleNavItem } from "types";
import { media } from "utils/media";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";
import GoogleScript from "./Script";

type NavbarProps = { items: NavItems; phone?: string; currentCity?: any; navbarTitle?: string };
type ScrollingDirections = "up" | "down" | "none";
type NavbarContainerProps = { hidden: boolean; transparent: boolean };

// --- UTILS ---
const omitList = [
  "price", "contact", "about", "coupons", "emergency",
  "automotive", "safe", "residential", "mailbox", "commercial",
];

export const extractCityFromPath = (path: any) => {
  if (!path) return "";
  const cleanPath = path.split("?")[0];
  const parts = cleanPath.split("/");
  if (!parts[1]) return "";
  
  if (omitList.includes(parts[1])) return "";
  return parts[1];
};

export const getLink = (city: any) => {
  if (!city || city === "") return "/";
  const reserved = ["privacy-policy", "terms-conditions", "price", "gallery", "services", "safe", "commercial", "mailbox", "emergency", "residential", "coupons", "lock-repair", "automotive", "contact", "about"];
  
  if (reserved.includes(city)) return "/";
  return `/${city}`;
};

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
`;

// --- COMPONENT ---
export default function Navbar({ items, currentCity, phone, navbarTitle }: NavbarProps) {
  const router = useRouter();
  const currentPath = router.asPath;
  const city = currentCity ? currentCity.subdomain : extractCityFromPath(currentPath);

  const phoneDisplay = phone || "(800) 687-0480";
  const phoneLink = `tel:${phoneDisplay.replace(/\D/g, "")}`;
  
  const cityNameDisplay = navbarTitle || "Need a Local Locksmith?";

  const [scrollingDirection, setScrollingDirection] =
    useState<ScrollingDirections>("none");

  let lastScrollY = useRef(0);
  const lastRoute = useRef("");
  const stepSize = useRef(50);

  useScrollPosition(
    scrollPositionCallback,
    [router.asPath],
    undefined,
    undefined,
    50
  );

  function scrollPositionCallback({ currPos }: ScrollPositionEffectProps) {
    const routerPath = router.asPath;
    const hasRouteChanged = routerPath !== lastRoute.current;

    if (hasRouteChanged) {
      lastRoute.current = routerPath;
      setScrollingDirection("none");
      return;
    }

    const currentScrollY = currPos.y;
    const isScrollingUp = currentScrollY > lastScrollY.current;
    const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
    const hasScrolledWholeStep = scrollDifference >= stepSize.current;
    const isInNonCollapsibleArea = lastScrollY.current > -50;

    if (isInNonCollapsibleArea) {
      setScrollingDirection("none");
      lastScrollY.current = currentScrollY;
      return;
    }

    if (!hasScrolledWholeStep) {
      lastScrollY.current = currentScrollY;
      return;
    }

    setScrollingDirection(isScrollingUp ? "up" : "down");
    lastScrollY.current = currentScrollY;
  }

  const isNavbarHidden = scrollingDirection === "down";
  const isTransparent = scrollingDirection === "none";

  return (
    <StickyWrapper>
      <div className="w-screen bg-white">
        <GoogleScript />
        <NavbarContainer hidden={isNavbarHidden} transparent={isTransparent}>
          <Content>
            <NextLink className="max-h-52" href={getLink(city)} passHref>
              <LogoWrapper>
                <Logo />
              </LogoWrapper>
            </NextLink>
            
            {/* FIX: ADDED font-bold TO MATCH IMAGE */}
            <p className="var hidden md:block text-[33px] font-bold">
               {cityNameDisplay}
            </p>
            
            <div className="flex flex-col space-y-2 ">
              <p className="block md:hidden text-[14px] font-bold">
                 {cityNameDisplay}
              </p>
              <div>
                <svg
                  fill="#751318"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <span>
                  <span className="phone mx-0 px-0">{`Call Now: `}</span>
                  <a href={phoneLink}>
                      <p className=" cursor-pointer text-[#751318]">
                        {phoneDisplay}
                      </p>
                  </a>
                </span>
              </div>
            </div>
          </Content>
        </NavbarContainer>
      </div>
    </StickyWrapper>
  );
}

function NavItem({ href, title, outlined }: SingleNavItem) {
  const { setIsModalOpened } = useNewsletterModalContext();
  return (
    <NavItemWrapper outlined={outlined}>
      <NextLink href={href} passHref>
        <div>{title}</div>
      </NextLink>
    </NavItemWrapper>
  );
}

// ... Styles (Same as before) ...
const CustomButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  line-height: 1.8;
`;

const NavItemList = styled.div`
  display: flex;
  list-style: none;
  width: 100%;
  font-size: 2rem;
  div { display: flex; }
  svg { color: #751318; width: 20px; }
  span { display: flex; margin-left: 1rem; }
  .var { margin-right: 1rem; color: #000; }
  .num { color: #000; }
  .phone { color: #751318; }
  p { font-weight: 800; }
  @media (max-width: 424px) { .var { display: none; } }
`;

const NavContainer = styled.div`
  display: flex;
  list-style: none;
  font-size: 2rem;
  width: 100%;
  div { display: flex; }
  svg { width: 20px; }
  span {
    display: flex;
    margin-left: 1rem;
    align-items: center;
    ${media("<tablet")} { font-size: 1rem; }
  }
  p {
    font-weight: 800;
    ${media("<=smallPhone")} { font-size: 1rem; }
  }
  ${media("<=smallPhone")} { font-size: 1rem; }
`;

const HamburgerMenuWrapper = styled.div`
  ${media(">=desktop")} { display: none; }
`;

const LogoWrapper = styled.div`
  display: flex;
  margin-right: auto;
  text-decoration: none;
  color: rgb(36, 58, 90);
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  background-color: transparent;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 1.5;
  &:hover { transition: background-color 0.2s; }
  div {
    display: flex;
    color: rgb(10, 18, 30, 0.75);
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }
  &:not(:last-child) { margin-right: 2rem; }
`;

const NavbarContainer = styled.div<NavbarContainerProps>`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  padding: 1.5rem 90px;
  width: 100%;
  max-width: 1550px;
  max-height: 7.7rem;
  margin: 0 auto;
  background-color: #fff;
  ${media("<=tablet")} { padding: 2rem 1rem; }
  @media (min-width: 1440px) { max-width: 1430px; }
  @media (min-width: 1535px) and (max-width: 2652px) { max-width: 1380px; }
  @media (max-width: 550px) { padding: 0.5rem 10px; }
`;

const Content = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 2rem;
  div { display: flex; }
  svg {
    color: #751318;
    width: 30px;
    margin-right: 4px;
    @media (max-width: 1040px) { width: 20px; }
    @media (max-width: 425px) { width: 15px; }
  }
  span {
    display: flex;
    align-items: center;
    font-size: 3rem;
    @media (max-width: 1040px) { font-size: 2rem; }
    @media (max-width: 869px) { font-size: 1.4rem; }
    @media (max-width: 425px) { font-size: 1rem; }
  }
  .var { margin-right: 1rem; color: #000; }
  .num { color: #751318; font-size: 4rem; }
  .phone {
    color: #751318;
    font-size: 3rem;
    @media (max-width: 1040px) { font-size: 2rem; }
    @media (max-width: 869px) { font-size: 1rem; }
    @media (max-width: 305px) { font-size: 1rem; }
  }
  p { font-weight: 800; }
`;
