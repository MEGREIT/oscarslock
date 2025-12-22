import NextImage from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Navigation } from "swiper/modules";
// Use standard imports so the slider works, but we will guard it with isClient
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "components/Container";
import Separator from "components/Separator";
import { media } from "utils/media";
import RichText from "components/RichText";
import { Employee } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";

export default function OurTeam({ testimonials }: any) {
  // --- START FIX: Client-side rendering state ---
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set isClient to true immediately after mount
    setIsClient(true);

    function handleResize() {
      setIsMobile(window.innerWidth >= 768);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define a placeholder for Server-Side Rendering (prevents hook errors)
  const placeholder = (
     <div style={{ minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eee', borderRadius: '8px', padding: '20px', textAlign: 'center' }}>
       Loading testimonials...
     </div>
  );
  // --- END FIX ---

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
        {/* --- START FIX: Conditional Rendering --- */}
        {/* Only render Swiper if isClient is true */}
        {isClient ? (
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
        ) : (
          // Show placeholder on server to avoid crashes
          placeholder
        )}
        {/* --- END FIX --- */}
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
