import React,  { Component } from 'react';
import {Container,
        Row,
        Col,
        Card,
        CardText,
        CardTitle,
        CardSubtitle,
        Button } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getFilms } from './../actions/filmActions';
import Proptypes from 'prop-types';

class FilmsList extends Component {

componentDidMount() {
  this.props.getFilms();
}
render() {
  const { films } = this.props.film;
  return (
    <Container>
    <h3 className="text-white">Films</h3>
    <Row>
            { films.map(({episode_id, title, director, producer, opening_crawl })=> (
            <CSSTransition key= {episode_id} timeout={500} classNames ="fade">
            <Col  lg={4} xs ={12}>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333',  height: "560px"  }} className="my-4 text-warning">
            <CardTitle>{ title }</CardTitle>
            <CardSubtitle>Episode: { episode_id }</CardSubtitle>
            <CardText>Director: { director }</CardText>
            <CardText>Producer: { producer }</CardText>
            <CardText>{ opening_crawl }</CardText>
            <Button  outline color="warning">Starships</Button>
            </Card>
            </Col>
          </CSSTransition>
        ))}

        </Row>
    </Container>
  );
}

}

FilmsList.propTypes = {
  getFilms: Proptypes.func.isRequired,
  film: Proptypes.object.isRequired
}

const mapStateToProps = state => ({
  film: state.film
})

export default connect(mapStateToProps, {getFilms})(FilmsList);
