import React,  { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Spinner
 } from 'reactstrap';
  import Proptypes from 'prop-types';
  import { connect } from 'react-redux';
  import { getStarship } from './../actions/starshipsActions';

  import FormStarship from './FormStarship';

class StarshipsSummary extends Component {
constructor(props) {
  super(props);
  this.state = {
    editForm : false,
    id: props.id,
  }
}

componentDidMount () {
  this.props.getStarship(this.props.url, this.props.id);
}

open(url) {
    this.props.getStarship(url, this.props.id);
}

formStarship() {
  this.setState ({editForm: !this.state.editForm})
}

  render() {
    const { starships, id} = this.props.starship;
    return(
      <Card style= {{ backgroundColor: '#333', borderColor: '#333' }} >
        <CardHeader id = {"heading"+this.props.id} >
          <h5 className="mb-1 ">
            <button className="btn btn-link collapsed text-warning" data-toggle="collapse" aria-expanded="false"  data-target={"#collapse"+this.props.id} aria-controls={"collapse"+this.props.id} onClick={()=> this.open(this.props.url)}>
              Starship #{ this.props.id }
            </button>
          </h5>
        </CardHeader>

        <div id= { "collapse"+ this.props.id }  className="collapse" aria-labelledby={"heading"+this.props.id} data-parent="#accordion">
          { starships && id === this.props.id ?
        <CardBody className= "text-white" key={`heyhey${id}`}>
            <p>Name: { starships.name } </p>
            <p>Model: { starships.model } </p>
            <p>Max. atmosphering Speed: { starships.max_atmosphering_speed }</p>
            <Button outline color="warning" onClick ={ ()=> this.formStarship() }>Edit</Button>
            { !this.state.editForm ? null :
              <FormStarship name ={starships.name} model= {starships.model} speed ={starships.max_atmosphering_speed}></FormStarship>
            }
            </CardBody>
            : <Spinner color="light" /> }

        </div>
      </Card>
    );
  }
}

StarshipsSummary.propTypes = {
  getStarship: Proptypes.func.isRequired,
  starship: Proptypes.object.isRequired
}

const mapStateToProps = state => ({
  starship: state.starship
})
export default connect(mapStateToProps, { getStarship }) (StarshipsSummary);
