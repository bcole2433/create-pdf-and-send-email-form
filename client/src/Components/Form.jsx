import React, { Component } from "react";
import { Form, Button, Container, Col } from "react-bootstrap";
import Calendar from "react-calendar";

class StartForm extends Component {
  render() {
    return (
      <Container fluid="true">
        <Form>
          <Form.Group controlId="email">
            <Form.Label>
              <h4>Email address</h4>
            </Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              value={this.props.item.email}
              placeholder="Enter email"
              onChange={this.props.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="personCompleting">
            <Form.Label>
              <h4>Person completing this form</h4>
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="personCompleting"
              value={this.props.item.personCompleting}
              placeholder="Name"
              onChange={this.props.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="accountName">
            <Form.Label>
              <h4>Account Name</h4>
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="accountName"
              value={this.props.item.accountName}
              onChange={this.props.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="address">
            <Form.Label>
              <h4>Address</h4>
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="address"
              value={this.props.item.address}
              onChange={this.props.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="customerEmail">
            <Form.Label>
              <h4>Customer Email Address</h4>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="customerEmail"
              value={this.props.item.customerEmail}
              onChange={this.props.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="franchiseeEmail">
            <Form.Label>
              <h4>Franchisee Email</h4>
            </Form.Label>
            <Form.Control
              required
              type="email"
              name="franchiseeEmail"
              value={this.props.item.fanchiseeEmail}
              onChange={this.props.handleInputChange}
            />
          </Form.Group>

          <Form.Row>
            <Col>
              <Form.Group controlId="walkthroughDate">
                <Form.Label>
                  <h4>Walk Through Date</h4>
                </Form.Label>
                <Calendar
                  required
                  onChange={this.props.onWalkDateChange}
                  name="walkthroughDate"
                  value={this.props.item.walkthroughDate}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="startDate">
                <Form.Label>
                  <h4>Start Date</h4>
                </Form.Label>
                <Calendar
                  required
                  onChange={this.props.onStartDateChange}
                  name="startDate"
                  value={this.props.item.startDate}
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Group className="float-right">
            <Button
              variant="outline-primary"
              size="lg"
              type="submit"
              onClick={this.props.handleSubmit}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default StartForm;