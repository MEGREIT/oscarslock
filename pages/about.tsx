import React from "react";
import { PaymentBox, PaymentContainer, WhiteBackgroundContainer } from ".";
import TextBubble from "@/components/TextBubble";

const About = () => {
  return (
    <WhiteBackgroundContainer>
      {/* <div className=""></div> */}
      <div className="flex flex-col text-[#0A3161] lg:mt-[10rem] mt-[8rem] mb-[8rem] xl:max-w-[1550px] xl:mx-0 mx-10">
        <div className="flex flex-col xl:flex-row justify-center items-center mx-auto 2xl:mx-[20rem]">
          <div>
            <h1 className="text-[5rem] font-bold mb-6 text-center">About Us</h1>
            <span className="text-[18px]">
              Welcome to Oscars Lock & Key Services LLC, your trusted partner in
              locksmith services! With years of experience in the industry, we
              pride ourselves on providing reliable, professional, and
              affordable locksmith solutions for both residential and commercial
              needs.
            </span>
          </div>

          <br />
          <br />
        </div>

        <span className="text-[18px] mx-auto 2xl:mx-[20rem]">
          <div className="flex space-x-2 mt-10">
            <img
              className=" w-full xl:block hidden my-auto 2xl:w-[300px]"
              src="/lock.png"
              alt="Lock"
            />
            <span>
              Our team of skilled technicians is dedicated to ensuring your
              security and peace of mind. We understand that lockouts and
              security issues can be stressful, which is why we offer prompt and
              efficient service. Whether you need emergency lockout
              assistance, lock repairs, key cutting, or security system
              installations, we’ve got you covered.
              <br />
              <br />
              <p className=" ">
                Oscars Lock & Key Services has unique security demands based on
                its location,industry, size and operations. Partnering with
                Oscars Lock & Key Services ensures you receive personalized
                security solutions tailored to your specific needs.With the
                support of qualified locksmiths, you can make right decisions
                and maximize the effectiveness of your security investments.
              </p>
              <br />
              At Oscars Lock & Key Services, customer satisfaction is our top
              priority. We use the latest tools and techniques to deliver
              high-quality results, and we’re committed to transparency and
              integrity in everything we do. Our mission is to keep you safe and
              secure, no matter the situation.
            </span>
          </div>
          <br />
          <br />
          <p className=" ">
            Protecting your property or business from threats is a top priority
            for everybody. Hiring our experienced locksmiths is a critical step
            in achieving that goal. Our team can provide a comprehensive range
            of services, from lock installations and rekeying to master key
            system implementation and emergency lockout assistance.
          </p>
          {/* <br /> */}
          <br />
          Thank you for choosing Oscars Lock & Key Services. We look forward to
          serving you!
        </span>
      </div>
    </WhiteBackgroundContainer>
  );
};

export default About;
