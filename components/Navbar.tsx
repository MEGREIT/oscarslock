"use client";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import hcms_cities from "@/utils/cities_data.json";
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
import NextImage from "next/image";
import { findSubdomain } from "@/utils/cities";
import { getCityFromPath } from "@/utils/formatString";
import GoogleScript from "./Script";
import Script from "next/script";

type NavbarProps = { items: NavItems };
type ScrollingDirections = "up" | "down" | "none";
type NavbarContainerProps = { hidden: boolean; transparent: boolean };

const omitList = [
  "price",
  "contact",
  "about",
  "coupons",
  "emergency",
  "automotive",
  "safe",
  "residential",
  "mailbox",
  "commercial",
];

export const extractCityFromPath = (path: any) => {
  const cleanPath = path.split("?")[0];
  const parts = cleanPath.split("/");
  let isOmitted = false;

  omitList.forEach((element: any) => {
    if (element === parts[1]) {
      isOmitted = true;
    }
  });

  if (isOmitted) {
    return "";
  }
  return parts[1];
};

export const getLink = (city: any) => {
  if (city !== "" || city == null) {
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
      return "/";
    }
    return `/${city}`;
  }
  return "/";
};

const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
`;

export default function Navbar({ items, currentCity }: any) {
  const router = useRouter();
  const currentPath = router.asPath;

  function formatToPhone(number) {
    const cleaned = number.toString().replace(/\D/g, "");

    if (cleaned.length !== 10) {
      throw new Error("Phone number must be exactly 10 digits.");
    }

    const areaCode = cleaned.slice(0, 3);
    const prefix = cleaned.slice(3, 6);
    const lineNumber = cleaned.slice(6);

    return `(${areaCode}) ${prefix}-${lineNumber}`;
  }

  function removeHyphens(numberString) {
    return numberString.replace(/-/g, "");
  }

  const city = currentCity
    ? currentCity.subdomain
    : getCityFromPath(extractCityFromPath(currentPath));
  const cityObject = findSubdomain(city);

  const [scrollingDirection, setScrollingDirection] =
    useState<ScrollingDirections>("none");

  let lastScrollY = useRef(0);
  const lastRoute = useRef("");
  const stepSize = useRef(50);
  const currentPage = router.pathname;

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
            <p className="var hidden md:block text-[33px]">
              {city !== ""
                ? `${
                    cityObject?.city
                      ? cityObject?.city
                      : `Need a Local Locksmith?`
                  }`
                : `Need a Local Locksmith?`}
            </p>
            <div className="flex flex-col space-y-2 ">
              <p className="block md:hidden text-[14px]">
                {city !== ""
                  ? `${
                      cityObject?.city
                        ? cityObject?.city
                        : `Need a Local Locksmith?`
                    }`
                  : `Need a Local Locksmith?`}
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

                  {city !== "" ? (
                    <>
                      {cityObject?.phone ? (
                        <a href={"tel:" + removeHyphens(cityObject?.phone)}>
                          <p className=" cursor-pointer text-[#751318]">
                            {formatToPhone(cityObject?.phone)}
                          </p>
                        </a>
                      ) : (
                        <a href="tel:5087367178">
                          <p className=" cursor-pointer text-[#751318]">
                            (508) 736-7178
                          </p>
                        </a>
                      )}
                    </>
                  ) : (
                    <a href="tel:5087367178">
                      <p className="cursor-pointer text-[#751318]">
                        (508) 736-7178
                      </p>
                    </a>
                  )}
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

  function showNewsletterModal() {
    setIsModalOpened(true);
  }

  return (
    <NavItemWrapper outlined={outlined}>
      <NextLink href={href} passHref>
        <div>{title}</div>
      </NextLink>
    </NavItemWrapper>
  );
}

const CustomButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  line-height: 1.8;
`;

const NavItemList = styled.div`
  display: flex;
  list-style: none;
  width: 100%;
  font-size: 2rem;
  div {
    display: flex;
  }
  svg {
    color: #751318;
    width: 20px;
  }
  span {
    display: flex;
    margin-left: 1rem;
  }
  .var {
    margin-right: 1rem;
    color: #000;
  }
  .num {
    color: #000;
  }
  .phone {
    color: #751318;
  }
  p {
    font-weight: 800;
  }
  @media (max-width: 424px) {
    .var {
      display: none;
    }
  }
  ${media("<desktop")} {
  }
`;

const NavContainer = styled.div`
  display: flex;
  list-style: none;
  font-size: 2rem;
  width: 100%;
  div {
    display: flex;
  }
  svg {
    width: 20px;
  }
  span {
    display: flex;
    margin-left: 1rem;
    align-items: center;
    ${media("<tablet")} {
      font-size: 1rem;
    }
  }
  p {
    font-weight: 800;
    ${media("<=smallPhone")} {
      font-size: 1rem;
    }
  }
  ${media("<=smallPhone")} {
    font-size: 1rem;
  }
`;

const HamburgerMenuWrapper = styled.div`
  ${media(">=desktop")} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  margin-right: auto;
  text-decoration: none;
  color: rgb(36, 58, 90);
`;

const HoverUnderlineAnimation = styled.div<Partial<SingleNavItem>>`
  display: inline-block;
  position: relative;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  ${(props) =>
    props.outlined
      ? css`
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            bottom: 0;
            left: 0;
            background-color: rgb(255, 175, 1);
          }
        `
      : css`
          &::after {
            content: "";
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 3px;
            bottom: 0;
            left: 0;
            background-color: rgb(255, 175, 1);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
          }

          &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }
        `}
`;

const NavItemWrapper = styled.li<Partial<SingleNavItem>>`
  background-color: transparent;
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 1.5;

  &:hover {
    transition: background-color 0.2s;
  }

  div {
    display: flex;
    color: rgb(10, 18, 30, 0.75);
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
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

  ${media("<=tablet")} {
    padding: 2rem 1rem;
  }
  @media (min-width: 1440px) {
    max-width: 1430px;
  }
  @media (min-width: 1535px) and (max-width: 2652px) {
    max-width: 1380px;
  }
`;

const Content = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 2rem;
  div {
    display: flex;
  }
  svg {
    color: #751318;
    width: 30px;
    margin-right: 4px;
    @media (max-width: 1040px) {
      width: 20px;
    }
    @media (max-width: 425px) {
      width: 15px;
    }
  }
  span {
    display: flex;
    align-items: center;
    font-size: 3rem;
    @media (max-width: 1040px) {
      font-size: 2rem;
    }
    @media (max-width: 869px) {
      font-size: 1.4rem;
    }
    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }
  .var {
    margin-right: 1rem;
    color: #000;
  }
  .num {
    color: #751318;
    font-size: 4rem;
  }
  .phone {
    color: #751318;
    font-size: 3rem;
    @media (max-width: 1040px) {
      font-size: 2rem;
    }
    @media (max-width: 869px) {
      font-size: 1rem;
    }
    @media (max-width: 305px) {
      font-size: 1rem;
    }
  }
  p {
    font-weight: 800;
  }
`;
