import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { upcomingPlaces } from "./data";

const UpcomingPlaces = () => {
  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">Upcoming Places</h2>
      <Row>
        {upcomingPlaces.map((place) => (
          <Col md={6} lg={4} key={place.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={place.image} style={{ height: "220px", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title>{place.title}</Card.Title>
                <Card.Text style={{ whiteSpace: 'pre-line' }}>{place.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UpcomingPlaces; 