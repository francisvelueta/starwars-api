import React,  { Component } from 'react';

import { Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button } from 'reactstrap';

class FormStarship extends Component {
  render() {
    return(
      <Form>
      <Row>
      <Col lg ={6}>
      <FormGroup>
        <Label >Name</Label>
        <Input type="text" name="name" defaultValue = {this.props.name}/>
        </FormGroup>
        </Col>
      </Row>
      <Row><Col lg ={6}>
      <FormGroup>
        <Label >Model</Label>
        <Input type="text" name="model" defaultValue ={this.props.model} isRequired/>
      </FormGroup>
      </Col></Row>
      <Row><Col lg ={6}>
      <FormGroup>
        <Label >Speed</Label>
        <Input type="text" name="speed" defaultValue={this.props.speed} isRequired/>
      </FormGroup>
      </Col></Row>
      <Row><Col lg ={6}>
      <Button outline color="warning">Add Favorites</Button>
      </Col></Row>
      </Form>
    )
  }
}

export default FormStarship;
