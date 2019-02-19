import React,  { Component } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button } from 'reactstrap';
  import Proptypes from 'prop-types';
  import { connect } from 'react-redux';
  import { getStarship } from './../actions/starshipsActions';

class StarshipsSummary extends Component {


open(url) {

    this.props.getStarship(url);

}

  render() {
    const { starships } = this.props.starship;
    return(
      <Card style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardHeader id={"heading"+this.props.id} >
          <h5 className="mb-1 ">
            <button className="btn btn-link collapsed text-warning" data-toggle="collapse" data-target={"#collapse"+this.props.id} aria-expanded="false" aria-controls={"collapse"+this.props.id} onClick={()=> this.open(this.props.url)}>
              Starship #{this.props.id}
            </button>
          </h5>
        </CardHeader>

        <div id= {"collapse"+this.props.id} className="collapse" aria-labelledby={"heading"+this.props.id} data-parent="#accordion">
          <CardBody className= "text-white">
            <p>Name: { starships.name } </p>
            <p>Model: { starships.model } </p>
            <p>Manufacter: {starships.manufacturer}</p>
          </CardBody>
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
