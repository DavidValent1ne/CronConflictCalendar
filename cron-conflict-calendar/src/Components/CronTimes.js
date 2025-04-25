import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CronTimes = () => {
  const [times, setTimeSlot] = useState([]);

  useEffect(() => {

    axios.get("/data/CronTime.json").then((res) => {

        setTimeSlot(res.data.times);
    });
  }, []);

  return (
    <div>
      <h2 className="text-center">List of time slots</h2>
      <br />
      <Row xs={1} md={2} className="g-4">
        {times &&
          times.map((times, id) => (
            <Col key={id}>

              <Card key={id}>
                
                <Card.Body>
                  <Card.Title>{times.directory}</Card.Title>
                  <Card.Text>{times.minute}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default CronTimes;