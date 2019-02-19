import React, { Component } from 'react';
import { Container, Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import { getFilm } from './../actions/filmActions';
import { getStarship } from './../actions/starshipsActions';
import Proptypes from 'prop-types';

import StarshipsSummary from './StarshipsSummary';

class starshipsList extends Component {

componentDidMount() {
  this.props.getFilm(this.props.match.params.id);

}

render() {
const { movies } = this.props.movie;
    return(
      <Container>
        <h3 className="text-white">Starships {movies.title} </h3>
        <div id="accordion">
        { movies.starships ? movies.starships.map((url, id) => (
              <StarshipsSummary key={`hellohello${id}`} url ={url} id ={ id+1 }/>
          )): <Spinner color ="light"/> }
          </div>
      </Container>
  )
 }

}

starshipsList.propTypes = {
  getFilm: Proptypes.func.isRequired,
  movie: Proptypes.object.isRequired
}

const mapStateToProps = state => ({
  movie: state.movie,
})

export default connect(mapStateToProps, { getFilm, getStarship })(starshipsList);
