import React from "react";
import { Container, Card, Row, Col, Button, Navbar } from "react-bootstrap";
import Headerbar from "../Headerbar/headerbar";
import InfoCard from "../Card/card";
import image1 from "../../images/Image1.png";
import image2 from "../../images/image2.jpeg";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.jpeg";

const data = [
  {
    key: 1,
    title: "Web Dev 1",
    subtitle: "React",
    description:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. ",
    buttonLabel: "Learn React",
    imageUrl: image1,
  },
  {
    key: 2,
    title: "Web Dev 2",
    subtitle: "Angular",
    description:
      "Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. ",
    buttonLabel: "Learn Angular",
    imageUrl: image2,
  },
  {
    key: 3,
    title: "Web Dev 3",
    subtitle: "SQL",
    description:
      "Structured Query Language is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",
    buttonLabel: "Learn SQL",
    imageUrl: image3,
  },
  {
    key: 4,
    title: "Web Dev 4",
    subtitle: "full Stack",
    description:
      "Full stack development refers to the end-to-end application software development, including the front end and back end. The front end consists of the user interface, and the back end takes care of the business logic and application workflows.",
    buttonLabel: "Learn Full Stack",
    imageUrl: image4,
  },
];

export default function Home() {
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
