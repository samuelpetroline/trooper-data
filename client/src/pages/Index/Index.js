import React from 'react';

import "./Index.css";

import CardContainer from '../../components/CardContainer/CardContainer';

import ApiService from '../../services/ApiService';

export default class Index extends React.Component {

  constructor() {
    super();

    this.api = new ApiService();
  }
  promiseFactory(url) {
    return this.api.get(url);
  }

  render() {
    return (
      <div className="index">
        <CardContainer title="Films" entity="films" promise={this.promiseFactory('/films')}></CardContainer>
        <CardContainer title="People" entity="people" promise={this.promiseFactory('/people')}></CardContainer>
        <CardContainer title="Planets" entity="planets" promise={this.promiseFactory('/planets')} ></CardContainer>
        <CardContainer title="Species" entity="species" promise={this.promiseFactory('/species')} ></CardContainer>
        <CardContainer title="Starships" entity="starships" promise={this.promiseFactory('/starships')} ></CardContainer>
        <CardContainer title="Vehicles" entity="vehicles" promise={this.promiseFactory('/vehicles')} ></CardContainer>
      </div>
    );
  }
}
