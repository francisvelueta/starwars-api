import React,  { Component } from 'react';

import { Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button } from 'reactstrap';

  import { connect } from 'react-redux';
import { addStarship } from './../actions/favoritesActions';

class FormStarship extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name:this.props.name,
      model: this.props.model,
      speed: this.props.speed,
      inputvalidatename : '',
      inputvalidatespeed : '',
      inputvalidatemodel : '',
    }
  }

sendInfo() {

if(this.state.name === "" || this.state.name === " ") {
  this.setState({inputvalidatename: 'is-invalid'})
} else if (this.state.model === "" || this.state.model === " ") {

  this.setState({inputvalidatemodel: 'is-invalid'})

} else if (this.state.speed === "" || this.state.speed === " ") {

    this.setState({inputvalidatespeed: 'is-invalid'})
} else {
  this.setState({inputvalidatename: ''});
  this.setState({inputvalidatemodel: ''});
  this.setState({inputvalidatespeed: ''});

const newStarship = {
  name: this.state.name,
  model: this.state.model,
  speed: this.state.speed
}

// Add item via addStarship action

  this.props.addStarship(newStarship);
  alert('Starship Added in Favorites');
}

}


  render() {
    return(
      <Form>
      <Row>
      <Col lg ={6}>
      <FormGroup>
        <Label >Name</Label>
        <Input type="text" id ="name" name="name" className={this.state.inputvalidatename} defaultValue = {this.props.name}  onChange = { event => this.setState({ name: event.target.value })} required/>
        <div className="invalid-feedback">
          Please write a name.
        </div>
        </FormGroup>
        </Col>
      </Row>
      <Row><Col lg ={6}>
      <FormGroup>
        <Label >Model</Label>
        <Input type="text" id="model" name="model" className={this.state.inputvalidatemodel} defaultValue ={this.props.model}  onChange = { event => this.setState({ model: event.target.value })} required/>
        <div className="invalid-feedback">
          Please write a model.
        </div>
      </FormGroup>
      </Col></Row>
      <Row><Col lg ={6}>
      <FormGroup>
        <Label >Speed</Label>
        <Input type="text" name="speed" className={this.state.inputvalidatespeed} defaultValue={this.props.speed} onChange = { event => this.setState({ speed: event.target.value })}  required/>
        <div className="invalid-feedback">
          Please write a speed.
        </div>
      </FormGroup>
      </Col></Row>
      <Row><Col lg ={6}>
      <Button outline color="warning" onClick ={()=> this.sendInfo()}>Add Favorites</Button>
      </Col></Row>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  favstarship: state.favstarship
})

export default connect(mapStateToProps, { addStarship })(FormStarship);
