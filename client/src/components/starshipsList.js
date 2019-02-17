import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { getFilm } from './../actions/filmActions';
import Proptypes from 'prop-types';

import StarshipsSummary from './StarshipsSummary';

class starshipsList extends Component {

componentDidMount() {
  this.props.getFilm(this.props.match.params.id);

}
componentWillMount() {
  this.props.getFilm(this.props.match.params.id);

}
render() {
const { films } = this.props.film;
    return(
      <Container>
        <h3 className="text-white"> Starships - {films.title} </h3>
        <Row>
        { films.starships ? films.starships.map((id, e) => (
          <Col lg= {4} xs ={12} key={id}>
          <StarshipsSummary  />
          </Col>
        ))
         : null}
         </Row>
        </Container>
  )
 }



}

starshipsList.propTypes = {
  getFilm: Proptypes.func.isRequired,
  film: Proptypes.object.isRequired
}

const mapStateToProps = state => ({
  film: state.film
})

export default connect(mapStateToProps, { getFilm })(starshipsList);
