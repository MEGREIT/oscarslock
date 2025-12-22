import { useRouter } from "next/router";
import NextLink from "next/link";
import { PropsWithChildren, useEffect } from "react";
import styled, { css } from "styled-components";
import { NavItems, SingleNavItem } from "types";
import * as Dialog from "@radix-ui/react-dialog";
import CloseIcon from "./CloseIcon";

type NavigationDrawerProps = PropsWithChildren<{ items: NavItems }>;

export default function NavigationDrawer({ children, items }: NavigationDrawerProps) {
  console.log('NavigationDrawer rendering');
  return (
    <Dialog.Root>
      <Wrapper>
        <Dialog.Portal>
          <Dialog.Overlay className="drawer-overlay" />
          <Dialog.Content className="my-drawer">
            <div className="my-drawer-container">
              <Dialog.Close asChild>
                <CloseIcon className="close-icon" />
              </Dialog.Close>
              <NavItemsList items={items} />
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Wrapper>
      {children}
    </Dialog.Root>
  );
}

function NavItemsList({ items }: NavigationDrawerProps) {
  console.log('NavItemsList rendering');
  const router = useRouter();
  const currentPage = router.pathname;

  useEffect(() => {
    console.log('NavItemsList useEffect');
    function handleRouteChangeComplete() {
      // Dialog closes automatically via Dialog.Close
    }
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    return () =>
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
  }, [router]);

  return (
    <ul>
      {items.map((SingleNavItem, idx) =>
        SingleNavItem.href === currentPage ? (
          <HoverUnderlineAnimation outlined={true} key={idx}>
            <NavItem>
              <NextLink href={SingleNavItem.href}>{SingleNavItem.title}</NextLink>
            </NavItem>
          </HoverUnderlineAnimation>
        ) : (
          <HoverUnderlineAnimation outlined={false} key={idx}>
            <NavItem>
              <NextLink href={SingleNavItem.href}>{SingleNavItem.title}</NextLink>
            </NavItem>
          </HoverUnderlineAnimation>
        )
      )}
    </ul>
  );
}

const Wrapper = styled.div`
  .my-drawer {
    width: 100%;
    height: 100%;
    z-index: var(--z-drawer);
    background: rgb(251, 251, 253);
    transition: margin-left 0.3s cubic-bezier(0.82, 0.085, 0.395, 0.895);
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }

  .my-drawer-container {
    position: relative;
    height: 100%;
    margin: auto;
    max-width: 70rem;
    padding: 0 1.2rem;
  }

  .close-icon {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }

  .drawer-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    & > *:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
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

const NavItem = styled.li`
  a {
    font-size: 3rem;
    text-transform: uppercase;
    display: block;
    color: currentColor;
    text-decoration: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    text-align: center;
  }
`;
