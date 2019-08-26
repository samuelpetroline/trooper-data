import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

export default class Card extends React.Component {
    constructor(props) {
        super();
        // console.log(props);
    }

    getImageUrl(entity, url) {
        const baseUrl = this.getBaseUrl(entity, url);

        return `/assets/images/${baseUrl}/card.jpg`;
    }

    getBaseUrl(entity, url) {
        const baseUrl = url.substring(url.indexOf(entity), url.length - 1);

        return baseUrl;
    }

    render() {
        return (
            <Link to={{
                pathname: this.getBaseUrl(this.props.entity, this.props.item.url),
                state: {
                    item: this.props.item
                }
            }}>
                <div className="card" style={{ backgroundImage: `url(${this.getImageUrl(this.props.entity, this.props.item.url)})` }}>
                    <p>{this.props.item.title || this.props.item.name}</p>
                </div>
            </Link>
        )
    }
}