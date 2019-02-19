import React,  { Component } from 'react';
import {Container,
        Row,
        Col,
        Card,
        CardText,
        CardTitle,
        CardSubtitle,
        Button, Spinner  } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getFilms } from './../actions/filmActions';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class FilmsList extends Component {

componentDidMount() {
  this.props.getFilms();
}
render() {
  const { films } = this.props.film;
  films.sort((o1,o2) => {
  if (o1.episode_id > o2.episode_id) {
    return 1;
  } else if (o1.episode_id < o2.episode_id) {
    return -1;
  }
  return 0;
});
  return (
    <Container>
    <h3 className="text-white">Films</h3>
    <Row>
            { films ? films.map(({episode_id, title, director, producer, opening_crawl, url })=> (
            <CSSTransition key= {episode_id} timeout={500} classNames ="fade">
            <Col  lg={4} xs ={12}>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333',  height: "560px"  }} className="my-4 text-warning">
            <CardTitle className="text-white">{ title }</CardTitle>
            <CardSubtitle>Episode: { episode_id }</CardSubtitle>
            <CardText>Director: { director }</CardText>
            <CardText>Producer: { producer }</CardText>
            <CardText>{ opening_crawl}</CardText>
            <Link to = { '/films/'+ url.substr(27,1)} ><Button  outline color="warning">Starships</Button></Link>
            </Card>
            </Col>
          </CSSTransition>
        )): <Spinner color = "light"/> }
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
