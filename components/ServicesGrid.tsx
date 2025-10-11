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
    /* margin-left: 1rem; */
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
  let list: any = [];
  services.forEach((service: any) => {
    list.push(service.slug.current);
  });
  // console.log("yooo", services);
  return (
    <div className="grid max-smallPhone:grid-cols-1 grid-cols-2 mt-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-3 max-w-full xl:max-h-96 lg:my-0 mx-0">
      <div className="p-0 h-auto flex justify-center mx-0">
        <ServiceButton
          onClick={() => {
            // safe
            router.push(`/services/${services[5].slug.current}`);
          }}
        >
          <div className="h-14 w-14">
            <img className="w-full h-full object-contain" src="/service/residential.png" />
            {/* <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg> */}
          </div>

          <span>{services[5].title}</span>
        </ServiceButton>
      </div>
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
      <div className="p-0 h-auto flex justify-center mx-0">
        <ServiceButton
          onClick={() => {
            router.push(`/services/${services[0].slug.current}`);
          }}
        >
          <div className="h-14 w-14">
            <img className="w-full h-full object-contain" src="/service/automotive.png" />
          </div>

          <span>{services[0].title}</span>
        </ServiceButton>
      </div>
      <div className="p-0 h-auto flex justify-center mx-0">
        <ServiceButton
          onClick={() => {
            router.push(`/services/${services[2].slug.current}`);
          }}
        >
          <div className="w-14 h-14">
            <img className="w-full h-full object-contain" src="/service/emergency.png" />
          </div>

          <span>{services[2].title}</span>
        </ServiceButton>
      </div>
      {/* Second row */}
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
      <div className="p-0 h-auto flex justify-center mx-0">
        <ServiceButton
          onClick={() => {
            // safe
            router.push(`/services/${services[6].slug.current}`);
          }}
        >
          <div className="w-14 h-14">
            <img className="w-full h-full object-contain" src="/service/safe.png" />
          </div>

          <span>{services[6].title}</span>
        </ServiceButton>
      </div>
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
          <span>{`Gallery`}</span>
        </ServiceButton>
      </div>
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
          <span>{`Coupons`}</span>
        </ServiceButton>
      </div>
    </div>
  );
};

export default ServicesGrid;
