"use client";
import React, { useState } from "react";
import NewsLatterBox from "./NewsLatterBox";
import Card from "./card";
import Testimonials from "@/components/Testimonials";
const FormComponent = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedTimings, setSelectedTimings] = useState<string[]>([]);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setFormSubmitted(true);
  };

  const languages = [
    "Hindi",
    "Tamil",
    "Telugu",
    "Kannada",
    "Malayalam",
    "Bengali",
    "Gujarati",
    "Marathi",
    "Punjabi",
    "Odia",
  ];
  const timings = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const regions = [
    "North",
    "South",
    "East",
    "West",
    "Central",
    "Northeast",
    "Northwest",
    "Southeast",
    "Southwest",
  ];
  const subjects = ["Physics", "Chemistry", "Mathematics"];

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = event.target;
    if (selectedLanguages.includes(value)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== value));
    } else {
      setSelectedLanguages([...selectedLanguages, value]);
    }
  };

  const handleTimingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (selectedTimings.includes(value)) {
      setSelectedTimings(selectedTimings.filter((time) => time !== value));
    } else {
      setSelectedTimings([...selectedTimings, value]);
    }
  };

  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (selectedDays.includes(value)) {
      setSelectedDays(selectedDays.filter((d) => d !== value));
    } else {
      setSelectedDays([...selectedDays, value]);
    }
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (selectedRegions.includes(value)) {
      setSelectedRegions(selectedRegions.filter((reg) => reg !== value));
    } else {
      setSelectedRegions([...selectedRegions, value]);
    }
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (selectedSubjects.includes(value)) {
      setSelectedSubjects(selectedSubjects.filter((sub) => sub !== value));
    } else {
      setSelectedSubjects([...selectedSubjects, value]);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Welcome to our Mentor Matching system. Please fill all the
                details in order to get a list of your personalized mentors!
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit = {handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Preferred languages
                      </label>
                      <select
                        value={selectedLanguages}
                        onChange={handleLanguageChange}
                        multiple
                      >
                        {languages.map((language) => (
                          <option key={language} value={language}>
                            {language}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Preferred Days
                      </label>
                      <select
                        value={selectedDays}
                        onChange={handleDayChange}
                        multiple
                      >
                        {days.map((day) => (
                          <option key={day} value={day}>
                            {day}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Preferred languages
                      </label>
                      <select
                        value={selectedLanguages}
                        onChange={handleLanguageChange}
                        multiple
                      >
                        {languages.map((language) => (
                          <option key={language} value={language}>
                            {language}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Subjects
                      </label>
                      <select
                        value={selectedSubjects}
                        onChange={handleSubjectChange}
                        multiple
                      >
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Mode
                      </label>
                      <select
                        value={selectedSubjects}
                        onChange={handleSubjectChange}
                        multiple
                      >
                        {subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        What kind of mentoring do you need? (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      onSubmit={handleSubmit}
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
        {formSubmitted && <Card />}
      </div>
    </section>
  );
};

export default FormComponent;
