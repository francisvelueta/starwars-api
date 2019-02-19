import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getFavStarships } from './../actions/favoritesActions';
import Proptypes from 'prop-types';

class StarshipsFavorite extends Component {

  componentDidMount() {
    this.props.getFavStarships();
  }

  render() {
    const { favstarships } = this.props.favstarship;
    return (
      <Container>
        <h3 className="text-white">Starship Favorites</h3>
      <ListGroup>
        <TransitionGroup className="shopping-list">
            {favstarships.map(({_id, name, model, speed}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    >&times;</Button>
                  <p>ID: {_id } </p>
                  <p>Name: {name}</p>
                  <p>Model: {model}</p>
                  <p>Speed: {speed}</p>

                </ListGroupItem>
              </CSSTransition>
            ))}
            </TransitionGroup>
      </ListGroup>
      </Container>
    );
  }
}


StarshipsFavorite.propTypes = {
  getFavStarships: Proptypes.func.isRequired,
  favstarship: Proptypes.object.isRequired
}
const mapStateToProps = state => ({
  favstarship: state.favstarship
})

export default connect(mapStateToProps, {getFavStarships})(StarshipsFavorite);
