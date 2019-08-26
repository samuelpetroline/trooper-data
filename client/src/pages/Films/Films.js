import React from 'react';

import './Films.css';

import AsideImage from '../../components/AsideImage/AsideImage';
import CardContainer from '../../components/CardContainer/CardContainer';

import ApiService from '../../services/ApiService';

export default class Films extends React.Component {

    constructor(props) {
        super();

        this.item = props.location.state.item;
        this.api = new ApiService();
    }

    promiseFactory(items, entity) {
        return Promise.all(items.map(item => {
            return this.api.get('/' + item.substring(item.indexOf(entity), item.length - 1))
        }))
    }

    getBaseUrl

    render() {
        return (
            <div className="container">
                <AsideImage entity="films" item={this.item}></AsideImage>
                <div className="content">
                    <div className="title">
                        <h2>{this.item.title}</h2>
                        <span>{this.item.release_date}</span>
                    </div>
                    <p>Director: {this.item.director}</p>
                    <p>Producer(s): {this.item.producer}</p>
                    <p>{this.item.opening_crawl}</p>

                    <div className="cards">
                        <CardContainer title="Characters" entity="people" promise={this.promiseFactory(this.item.characters, 'people')}></CardContainer>
                    </div>
                </div>
            </div>
        )
    }
}