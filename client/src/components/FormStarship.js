import React,  { Component } from 'react';

import { Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button } from 'reactstrap';

class FormStarship extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:this.props.name,
      model: this.props.model,
      speed: this.props.speed
    }
  }

  sendInfo() {
    console.log(this.state);
  }


  render() {
    return(
      <Form>
      <Row>
      <Col lg ={6}>
      <FormGroup>
        <Label >Name</Label>
        <Input type="text" id ="name" name="name" defaultValue = {this.props.name}  onChange = { event => this.setState({ name: event.target.value })} required/>
        </FormGroup>
        </Col>
      </Row>
      <Row><Col lg ={6}>
      <FormGroup>
        <Label >Model</Label>
        <Input type="text" id="model" name="model" defaultValue ={this.props.model}  onChange = { event => this.setState({ model: event.target.value })} required/>
      </FormGroup>
      </Col></Row>
      <Row><Col lg ={6}>
      <FormGroup>
        <Label >Speed</Label>
        <Input type="text" name="speed" defaultValue={this.props.speed} onChange = { event => this.setState({ speed: event.target.value })}  required/>
      </FormGroup>
      </Col></Row>
      <Row><Col lg ={6}>
      <Button outline color="warning" onClick ={()=> this.sendInfo()}>Add Favorites</Button>
      </Col></Row>
      </Form>
    )
  }
}

export default FormStarship;
