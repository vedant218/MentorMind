import React from "react";

interface SingleCardProps {
  image: string;
  Button: string;
  CardDescription: string;
  CardTitle: string;
  titleHref?: string;
  btnHref?: string;
}

const SingleCard: React.FC<SingleCardProps> = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
      <div className="shadow-1 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 mb-10 overflow-hidden rounded-lg bg-white duration-300">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref || "#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          
          <p className="dark:text-dark-6 mb-7 text-base leading-relaxed text-body-color">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref || "#"}
              className="border-gray-3 dark:border-dark-3 dark:text-dark-6 inline-block rounded-full border px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};

const Card: React.FC = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image="https://i.ibb.co/r2zns1m/image-01.jpg"
              CardTitle="50+ Best creative website themes & templates"
              CardDescription="With a passion for unlocking the potential in young minds, Raghav Meattle is a seasoned IIT JEE mentor known for his personalized approach to coaching. Armed with years of teaching experience and a knack for simplifying complex concepts, he has guided numerous students to success in one of the toughest exams in the world."
              Button="View Details"
            />
            <SingleCard
              image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
              CardTitle="Creative Card Component designs graphic elements"
              CardDescription="With a passion for unlocking the potential in young minds, Raghav Meattle is a seasoned IIT JEE mentor known for his personalized approach to coaching. Armed with years of teaching experience and a knack for simplifying complex concepts, he has guided numerous students to success in one of the toughest exams in the world."
              Button="View Details"
            />
            <SingleCard
              image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
              CardTitle="The ultimate UX and UI guide to card design"
              CardDescription="With a passion for unlocking the potential in young minds, Raghav Meattle is a seasoned IIT JEE mentor known for his personalized approach to coaching. Armed with years of teaching experience and a knack for simplifying complex concepts, he has guided numerous students to success in one of the toughest exams in the world."
              Button="View Details"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

// interface Mentor {
//   id: string;
//   name: string;
//   expertise: string[];
//   region: string;
//   languages: string[];
// }

// const FormComponent: React.FC = () => {
//   const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
//   const [selectedTiming, setSelectedTiming] = useState<number[]>([]);
//   const [selectedDays, setSelectedDays] = useState<string[]>([]);
//   const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
//   const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
//   const [mentors, setMentors] = useState<Mentor[]>([]);

//   const handleSubmit = () => {
//     const formData = {
//       languages: selectedLanguages,
//       timing: selectedTiming,
//       days: selectedDays,
//       region: selectedRegion,
//       subjects: selectedSubjects,
//     };

//     axios.post('http://your-flask-server-url.com/submit', formData)
//       .then((response) => {
//         setMentors(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching mentors:', error);
//       });
//   };

//   const renderSelectOptions = (options: string[] | number[]) =>
//     options.map((option) => (
//       <option key={option} value={option}>
//         {option}
//       </option>
//     ));

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
//       <label>
//         Languages Preferred:
//         <select multiple value={selectedLanguages} onChange={(e) => setSelectedLanguages(Array.from(e.target.selectedOptions, (option) => option.value))} style={{ width: '200px', marginBottom: '10px' }}>
//           {renderSelectOptions(selectedLanguages)}
//         </select>
//       </label>

//       {/* Add labels and select inputs for other form fields */}

//       <button onClick={handleSubmit} style={{ marginTop: '10px' }}>Submit</button>
//     </div>
//     <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', position: 'relative', zIndex: 0 }}>
//       {mentors.map((mentor) => (
//         <div key={mentor.id} style={{ width: '300px', margin: '10px', padding: '15px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', zIndex: 0 }}>
//           <h3>{mentor.name}</h3>
//           <p>Expertise: {mentor.expertise.join(', ')}</p>
//           <p>Region: {mentor.region}</p>
//           <p>Languages: {mentor.languages.join(', ')}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FormComponent;
