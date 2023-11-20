import React from "react";
import { Container, Card, Row, Col, Button, Navbar } from "react-bootstrap";
import Headerbar from "../Headerbar/headerbar";

import InfoCard from "../Card/card";
import home1 from "../../images/home1.png";
import home2 from "../../images/home2.jpeg";

const data = [
  {
    key: 1,
    title: "Vishal Chawla",
    subtitle: "Professor",
    description:
      "An accomplished and highly qualified Group Leader/Director at MIT, with over 23 years of professional experience in the field. He holds a Master’s in Information Technology from Northeastern University, where he gained expertise in several topics such as Web Design, Web Development, User Experience, Application Development, Quality Assurance, Web Services, Database, and Open Source Development. Chawla’s currently teaches Web Design and User Experience Engineering, and User Experience Design and Testing at Northeastern University. As an industry expert in several subject matters, Chawla is highly respected for his extensive knowledge and experience in the field of technology. He has worked in various leadership roles and contributed significantly to the development of innovative solutions and products in his field. Chawla’s passion for teaching is reflected in his teaching style. He enjoys interacting with his students and helping them develop their skills, and his classes are highly regarded by his students. He works as a catalyst to help his students develop their potential and succeed in their careers. He is passionate about technology and is a lifelong learner who believes that change is the only constant thing, and one should continue to work towards improving themselves.",
    buttonLabel: "Connect",
    imageUrl: home1,
  },
  {
    key: 2,
    title: "Web Design and User Experience Engineering",
    subtitle: "Coursework",
    description:
      "Exposes students to both conceptual and technical aspects of Web design. User experience design is the discipline of creating a useful and usable website or application that is easily navigated and meets the needs of both the site owner and its users. Covers Web standards and best practices. Studies the fundamental concepts, techniques, practices, work flows, and tools associated with the practice of user-experience design in Web interfaces. Offers students an opportunity to learn the core principles of information architecture, usability, marketing hierarchy, and user experience for contextual, value-driven websites. Additional areas of focus include typography, color theory and composition, responsive design, CSS3 concepts, basic scripting, and JavaScript libraries to create functional, effective, and visually appealing websites.",
    buttonLabel: "Enroll now",
    imageUrl: home2,
  },
];

export default function About() {
  return (
    <>
      <Headerbar />
      <div style={{ display: "flex" }}>
        {data.map((i) => (
          <InfoCard key={i.key} {...i} />
        ))}
      </div>
    </>
  );
}
