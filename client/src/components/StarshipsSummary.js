import React,  { Component } from 'react';
import {
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  Button } from 'reactstrap';

class StarshipsSummary extends Component {
  render() {
    return(
      <div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333',  }} className="my-4 text-warning">
      <CardTitle className="text-white">Nombre de la Nave</CardTitle>
      <CardSubtitle>Pasajeros</CardSubtitle>
      <CardText>Modelo</CardText>
      <Button  outline color="warning">Guardar</Button>
      </Card>
      </div>
    );

  }
}

export default StarshipsSummary;
