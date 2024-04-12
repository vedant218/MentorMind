import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Form from "@/components/Form";
import Testimonials from "@/components/Testimonials";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MentorMind",
  description: "MentorMind: Your Journey, Our Guidance",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Find Mentor"
        description=" Our advanced AI algorithms analyze your strengths, weaknesses, and goals to connect you with the perfect mentor tailored to your individual learning needs, ensuring personalized guidance and support throughout your JEE preparation journey."
      />

      <Form />
    </>
  );
};

export default ContactPage;
