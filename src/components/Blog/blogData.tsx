import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Dr. Rohan Patel",
    paragraph:
      "Ph.D. in Chemistry, University of Delhi. Experience: 10+ years of experience in teaching and mentoring",
    image: "/images/blog/man.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["Chemistry"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Dr. Priya Singh",
    paragraph:
      "Ph.D. in Computer Science, University of Delhi. Experience: 12+ years of experience in teaching and mentoring",
    image: "/images/blog/girl.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Computer science"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Dr. Amit Sharma",
    paragraph:
      "Ph.D. in Mathematics, University of Delhi. 8+ years of experience in teaching and mentoring",
    image: "/images/blog/ev.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["Maths"],
    publishDate: "2025",
  },
];
export default blogData;
