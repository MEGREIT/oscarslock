import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

export const ServiceButton = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  text-transform: uppercase;
  color: white;
  background-color: #0a3161;
  height: 50px;
  width: 100%;
  padding: 10px 10px;
  margin: 0 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.3rem;
  font-weight: bolder;
  transition: all ease-in-out 0.5s;
  text-align: left;
  &:hover {
    scale: 1.03;
    background-color: #751318;
  }
  div {
    color: white;
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 1rem;
  }

  @media (max-width: 640px) {
    width: 170px;
  }
  @media (min-width: 1440px) {
    width: 100%;
  }
  @media (min-width: 1704px) {
    font-size: 1.9rem;
  }
  @media (min-width: 760px) and (max-width: 1022px) {
    font-size: 1.9rem;
  }
  @media (min-width: 1022px) and (max-width: 1256px) {
    font-size: 1rem;
  }
`;

const ServicesGrid = ({ services }: any) => {
  const router = useRouter();

  // We don't need the loop or list logic here anymore since we map directly by index.
  
  return (
    <div className="grid max-smallPhone:grid-cols-1 grid-cols-2 mt-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3 max-w-full xl:max-h-96 lg:my-0 mx-0">
      
      {/* 1. RESIDENTIAL (Index 0) */}
      <div className="p-0 h-auto flex justify-center mx-0">
        <ServiceButton
          onClick={() => {
            router.push(`/services/${services[0].slug.current}`);
          }}
        >
          <div className="h-14 w-14">
            <img className="w-full h-full object-contain" src="/service/residential.png" />
          </div>
          <span>{services[0].title}</span>
        </ServiceButton>
      </div>

      {/* 2. COMMERCIAL (Index 1) */}
      <div className="p-0 h-auto flex justify-center mx-0">
        <ServiceButton
          onClick={() => {
            router.push(`/services/${services[1].slug.current}`);
          }}
        >
          <div className="w-14 h-14">
            <img className="w-full h-full object-contain" src="/service/commercial.png" />
          </div>
          <span>{services[1].title}</span>
        </ServiceButton>
      </div>

      {/* 3. AUTOMOTIVE (Index 2) */}
      <div className="p-0 h-auto flex justify-center mx-0">
        <ServiceButton
          onClick={() => {
            router.push(`/services/${services[2].slug.current}`);
          }}
        >
          <div className="h-14 w-14">
            <img className="w-full h-full object-contain" src="/service/automotive.png" />
          </div>
          <span>{services[2].title}</span>
        </ServiceButton>
      </div>

      {/* 4. EMERGENCY (Index 3) */}
      <div className="p-0 h-auto flex justify-center mx-0">
        <ServiceButton
          onClick={() => {
            router.push(`/services/${services[3].slug.current}`);
          }}
        >
          <div className="w-14 h-14">
            <img className="w-full h-full object-contain" src="/service/emergency.png" />
          </div>
          <span>{services[3].title}</span>
        </ServiceButton>
      </div>

      {/* Second row */}

      {/* 5. MAILBOX (Index 4) */}
      <div className="p-0 h-auto flex justify-center mx-0">
        <ServiceButton
          onClick={() => {
            router.push(`/services/${services[4].slug.current}`);
          }}
        >
          <div className="h-14 w-14">
            <img className="w-full h-full object-contain" src="/service/mailbox.png" />
          </div>
          <span>{services[4].title}</span>
        </ServiceButton>
      </div>

      {/* 6. SAFE (Index 5) */}
      <div className="p-0 h-auto flex justify-center mx-0">
        <ServiceButton
          onClick={() => {
            router.push(`/services/${services[5].slug.current}`);
          }}
        >
          <div className="w-14 h-14">
            <img className="w-full h-full object-contain" src="/service/safe.png" />
          </div>
          <span>{services[5].title}</span>
        </ServiceButton>
      </div>

      {/* 7. GALLERY (Hardcoded) */}
      <div className="p-0 h-auto flex justify-center mx-0">
        <ServiceButton
          className="item7"
          onClick={() => {
            router.push(`/gallery`);
          }}
        >
          <div className="h-14 w-14">
            <img className="w-full h-full object-contain" src="/service/images-regular.svg" />
          </div>
          <span>Gallery</span>
        </ServiceButton>
      </div>

      {/* 8. COUPONS (Hardcoded) */}
      <div className="p-0 h-auto flex justify-center mx-0">
        <ServiceButton
          className="item8"
          onClick={() => {
            router.push(`/coupons`);
          }}
        >
          <div className="h-16 w-16">
            <img className="w-full h-full object-contain" src="/service/coupons.png" />
          </div>
          <span>Coupons</span>
        </ServiceButton>
      </div>
    </div>
  );
};

export default ServicesGrid;