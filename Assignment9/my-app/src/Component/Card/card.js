import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style/card.css";

export default function InfoCard({
  key,
  title,
  subtitle,
  description,
  imageUrl,
  buttonLabel,
}) {
  return (
    <Card className="cardContainer" id={key}>
      {imageUrl && (
        <Card.Img className="imageCard" variant="top" src={imageUrl} />
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {subtitle && (
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        )}
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">{buttonLabel}</Button>
      </Card.Body>
    </Card>
  );
}
