import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MentorMind",
  description: "MentorMind: Your Journey, Our Guidance",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Schedule Your daily Studying!"
        description="Unlocking the full potential of personalized learning, our customized schedules offer tailored study plans designed to optimize your preparation for the JEE exam. Explore the features below to see how our flexible and adaptive approach can help you achieve your academic goals:"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
