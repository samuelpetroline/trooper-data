import React from 'react';

import "./AsideImage.css";

export default class AsideImage extends React.Component {

    constructor(props) {
        super();
    }

    getImageUrl(entity, url) {
        const baseUrl = this.getBaseUrl(entity, url);

        return `/assets/images/${baseUrl}/aside.jpg`;
    }

    getBaseUrl(entity, url) {
        const baseUrl = url.substring(url.indexOf(entity), url.length - 1);

        return baseUrl;
    }

    render() {
        return (
            <div className="aside" style={{ backgroundImage: `url(${this.getImageUrl(this.props.entity, this.props.item.url)})` }}></div>
        )
    }

}