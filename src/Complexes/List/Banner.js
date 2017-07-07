import React from "react";
import { Row, Col } from "react-flexbox-grid";

export default () => {
  return (
      <Row center="xs">
        <Col xs={8}>
          <h2 className="contact-title">Discover Our New Developments</h2>
          <p className="contact-text">Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious
            ground-up condominiums, browse our portfolio of current offerings.</p>
          <button className="contact-button">Contact The Team</button>
        </Col>
      </Row>
  );
};
