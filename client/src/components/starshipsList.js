import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { getFilm } from './../actions/filmActions';
import Proptypes from 'prop-types';

class starshipsList extends Component {

componentDidMount() {
  console.log(this.props.match.params.id);
this.props.getFilm(this.props.match.params.id);
}
render() {
  const { films } = this.props.film;

    return(
      <Container>

        <h3 className="text-white">Starships - {films.episode_id} </h3>

      </Container>

    );
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
