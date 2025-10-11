import NextImage from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "components/Container";
import Separator from "components/Separator";
import { media } from "utils/media";
import RichText from "components/RichText";
import { Employee } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export default function OurTeam({ testimonials }: any) {
  const [isMobile, setIsMobile] = useState(false);
  // console.log(testimonials);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth >= 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function generateStarRating(rating: number, totalStars: number = 5): string {
    const filledStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(totalStars - rating);
    return filledStars + emptyStars;
  }

  function getRandomColor() {
    const colors = ["#FFB6C1", "#87CEFA", "#FFD700", "#FF69B4", "#98FB98"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div className=" justify-center  overflow-hidden my-auto align-middle items-center">
      <OurteamWrapper>
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          slidesPerView={1}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          centeredSlides
          navigation={false}
          loop
        >
          {testimonials.map((employee: any, idx: any) => (
            <SwiperSlide key={idx}>
              <OurteamCard>
                <AuthorContainer>
                  {/* <AuthorImageContainer
                    style={{
                      backgroundColor: employee.image
                        ? "transparent"
                        : getRandomColor(),
                    }}
                  >
                    {employee.image ? (
                      <NextImage
                        src={urlForImage(employee.image?.asset?._ref).url()}
                        alt={"Author's photo"}
                        width={150}
                        height={150}
                        objectFit="cover"
                      />
                    ) : (
                      <AuthorInitial>
                        {employee.fullName.charAt(0)}
                      </AuthorInitial>
                    )}
                  </AuthorImageContainer> */}
                  <AuthorContent>
                    <AuthorName>{employee.fullName}</AuthorName>
                    {/* Replace AuthorTitle with Star Rating */}
                    <StarRating>
                      {generateStarRating(employee.rating || 5)}
                    </StarRating>
                  </AuthorContent>
                </AuthorContainer>
                <div
                  style={{
                    fontFamily: "sans-serif",
                  }}
                  className="w-full text-center mt-1 text-xl font-semibold md:text-left"
                >
                  {employee.testimonial}
                </div>
              </OurteamCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </OurteamWrapper>
    </div>
  );
}

const OurteamWrapper = styled(Container)`
  /* position: relative; */
  margin: 0 0;
  margin-left: 0rem;
  margin-top: 0rem;
  align-self: flex-start;
  /* background-color: purple; */
  width: 60%;
  ${media("<=largeDesktop")} {
    /* width: 50vw; */
  }
  @media (max-width: 1439px) {
    width: 50vw;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    width: 30vw;
  }
  /* ${media("<=largeDesktop")} {
    width: 80%;
  } */

  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(255, 175, 1);
  }
`;

const AuthorImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 0 auto;
  overflow: hidden;
  height: 8rem;
  width: 8rem;
  background-color: #f0f0f0;
`;

const AuthorInitial = styled.span`
  font-size: 2rem;
  color: #ffffff;
  font-weight: bold;
`;

const OurteamCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;

  & > *:not(:first-child) {
    /* margin-top: 5rem; */
  }
  ${media("<=desktop")} {
    /* max-width: 20%; */
    /* margin: 4rem auto; */
    margin-right: 0rem;
  }
`;

// const Title = styled.h1`
//   font-size: 5.2rem;
//   font-weight: bold;
//   line-height: 1.1;
//   margin-bottom: 3rem;
//   letter-spacing: -0.03em;
// `;

// const TitleContent = styled.div`
//   margin-top: 1rem;
//   margin-bottom: 10rem;
//   text-align: center;
// `;

// const SliderSeperator = styled(Separator)`
//   margin-bottom: 3rem;
// `;

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.8rem;
`;

const StarRating = styled.div`
  font-size: 3rem;
  color: #f7b801;
  margin-top: 0.5rem;
  text-align: center;
`;

const AuthorName = styled.p`
  font-weight: normal;
  margin: 0 auto;
  text-align: center;
  font-size: 1.7rem;
`;

// const AuthorImageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 10rem;
//   margin: 0 auto;
//   overflow: hidden;
//   height: 15rem;
//   width: 15rem;
// `;

const TestimonialDescription = styled.p`
  /* margin-top: 1rem; */
  font-size: 1.2rem;
  font-style: italic;
  color: #666;
  text-align: center;
  /* max-width: 50%; */
  ${media("<tablet")} {
    font-size: 1.2rem;
    max-width: 100%;
  }
`;
