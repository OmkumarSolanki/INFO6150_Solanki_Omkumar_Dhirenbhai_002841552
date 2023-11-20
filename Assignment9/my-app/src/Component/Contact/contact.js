import React from "react";
import { Container, Card, Row, Col, Button, Navbar } from "react-bootstrap";
import Headerbar from "../Headerbar/headerbar";

import InfoCard from "../Card/card";
import contact1 from "../../images/contact2.jpeg";

const data = [
  {
    key: 1,
    title: "Reach out to us!",
    subtitle: "24 * 7",
    description:
      "Call us on:(999)999-9999 or email us at nuFakeJobs@northeastern.edu or click below for help.",
    buttonLabel: "HELP",
    imageUrl: contact1,
  },
];

export default function Contact() {
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
