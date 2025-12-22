import { media } from "@/utils/media";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";

interface TabProps {
  labels: string[];
  children: React.ReactNode[];
}

const slideDown = keyframes`
  0% {
    transform: translateY(-100%); /* Start above the view */
    opacity: 0; /* Start invisible */
  }
  100% {
    transform: translateY(0); /* End at original position */
    opacity: 1; /* End visible */
  }
`;

const TabsContainer = styled.div`
  display: flex;
  width: 90vw;
  flex-direction: column;

  ${media("<=tablet")} {
    width: 90vw;
  }
`;

const TabList = styled.div`
  display: flex;
  cursor: grab; /* Change cursor to grab */
  background-color: aliceblue;
  overflow: hidden; /* Hide overflow to allow drag functionality */
`;

const Tab = styled.div<{ active: boolean }>`
  padding: 10px 10px;
  border-radius: 5px;
  background-color: ${({ active }) => (active ? "#751318" : "#0a3161")};
  color: #fff;
  border: 1px solid #ccc;
  font-weight: bold;
  font-size: 2rem;

  width: 255px;
  border-bottom: ${({ active }) => (active ? "none" : "1px solid #ccc")};
  &:hover {
    background-color: ${({ active }) => (active ? "#751318" : "#751318")};
  }
`;

const TabPanel = styled.div`
  height: 350px;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-top: 1rem;
  max-width: 70vw;
  position: relative; /* Enable positioning for the pseudo-element */
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow effect */
  animation: ${slideDown} 0.5s ease forwards; /* Add the slide down animation */

  /* Pseudo-element for the fade effect */
  &::after {
    content: "";
    position: absolute;
    bottom: 0; /* Align to the bottom */
    left: 0;
    right: 0;
    height: 50px; /* Height of the fade effect */
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    ); /* Fade from transparent to white */
    pointer-events: none; /* Allow clicks to pass through */
  }
  ${media("<=tablet")} {
    max-width: 100vw;
  }
`;

const ReadMoreButton = styled.button`
  position: absolute; /* Position it relative to TabPanel */
  bottom: 20px; /* Space from the bottom */
  right: 20px; /* Space from the right */
  padding: 10px 15px; /* Padding for the button */
  background-color: #751318; /* Background color */
  color: #fff; /* Text color */
  border: none; /* Remove border */
  border-radius: 5px; /* Rounded corners */
  font-weight: bold; /* Bold text */
  cursor: pointer; /* Change cursor to pointer */
  transition: background-color 0.3s; /* Smooth transition on hover */

  &:hover {
    background-color: #a03b40; /* Darker shade on hover */
  }
`;

const Tabs: React.FC<TabProps> = ({ labels, children, services }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null); // Create a ref for the TabList
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const router = useRouter();

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (tabListRef.current?.offsetLeft || 0));
    setScrollLeft(tabListRef.current?.scrollLeft || 0);
    tabListRef.current!.style.cursor = "grabbing"; // Change cursor to grabbing
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    tabListRef.current!.style.cursor = "grab"; // Change cursor back to grab
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    tabListRef.current!.style.cursor = "grab"; // Change cursor back to grab
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (tabListRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // The multiplier can be adjusted to change the drag sensitivity
    tabListRef.current!.scrollLeft = scrollLeft - walk;
  };

  // Mobile touch event handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const touch = e.touches[0];
    setStartX(touch.pageX - (tabListRef.current?.offsetLeft || 0));
    setScrollLeft(tabListRef.current?.scrollLeft || 0);
    tabListRef.current!.style.cursor = "grabbing"; // Change cursor to grabbing
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    tabListRef.current!.style.cursor = "grab"; // Change cursor back to grab
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    const x = touch.pageX - (tabListRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5; // The multiplier can be adjusted to change the drag sensitivity
    tabListRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleReadMoreClick = () => {
    // Handle the read more click event, e.g., navigate to a detailed page
    router.push(`services/${services[activeTab].slug.current}`);
    // console.log(services[activeTab].slug);
  };

  return (
    <TabsContainer>
      <TabList
        ref={tabListRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart} // Mobile touch start event
        onTouchEnd={handleTouchEnd} // Mobile touch end event
        onTouchMove={handleTouchMove} // Mobile touch move event
      >
        {labels.map((label, index) => (
          <Tab
            key={index}
            active={index === activeTab}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </Tab>
        ))}
      </TabList>
      <TabPanel>
        {children[activeTab]}
        <ReadMoreButton onClick={handleReadMoreClick}>Read More</ReadMoreButton>
      </TabPanel>
    </TabsContainer>
  );
};

export default Tabs;
