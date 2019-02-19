import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Spinner } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { connect } from 'react-redux';
import { getFavStarships, deleteStarship } from './../actions/favoritesActions';
import Proptypes from 'prop-types';

class StarshipsFavorite extends Component {

  componentDidMount() {
    this.props.getFavStarships();
  }


  deleteStarship (id) {
    let response = window.confirm("Are you shore delete the starship?");
    if(response === true ) {
      this.props.deleteStarship(id);
    }

  }

  render() {
    const { favstarships } = this.props.favstarship;
    return (
      <Container>
        <h3 className="text-white">Starship Favorites</h3>
      <ListGroup>
        <TransitionGroup className="shopping-list">
            {favstarships ? favstarships.map(({_id, name, model, speed}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem className="text-warning" style={{ backgroundColor: '#333', borderColor: '#333' }}><p className="form-text text-muted">Id: {_id } </p>
                  <p>Name: { name }</p>
                  <p>Model: { model }</p>
                  <p>Speed: { speed }</p>
                    <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={()=> this.deleteStarship(_id)}
                    ><i className="fas fa-trash-alt"></i></Button>

                  </ListGroupItem>
              </CSSTransition>
            )): <Spinner color="light"/>}
            </TransitionGroup>
      </ListGroup>
      </Container>
    );
  }
}


StarshipsFavorite.propTypes = {
  getFavStarships: Proptypes.func.isRequired,
  deleteStarship: Proptypes.func.isRequired,
  favstarship: Proptypes.object.isRequired
}
const mapStateToProps = state => ({
  favstarship: state.favstarship
})

export default connect(mapStateToProps, {getFavStarships, deleteStarship})(StarshipsFavorite);
