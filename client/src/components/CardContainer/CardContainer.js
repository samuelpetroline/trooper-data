import React from 'react';

import './CardContainer.css';

import Card from '../Card/Card';
import Loader from '../Loader/Loader';

export default class CardContainer extends React.Component {
    constructor(props) {
        super();

        this.cardItems = React.createRef();

        this.handlePromise(props.promise);

        this.state = {
            isLoading: true,
            items: []
        }
    }

    async handlePromise(promise) {
        let result = await promise;

        this.setState({
            isLoading: false,
            items: result
        });
    }

    componentDidMount() {
        this.setState({
            isDown: false,
            isActive: false,
            startX: undefined,
            scrollLeft: undefined,
            slider: this.cardItems.current
        })
    }

    handleMouseDown = (event) => {
        this.setState({
            isDown: true,
            isActive: true,
            startX: event.pageX - this.state.slider.offsetLeft,
            scrollLeft: this.state.slider.scrollLeft
        });
    }

    handleMouseLeave = (event) => {
        this.setState({
            isDown: false,
            isActive: false
        });
    }

    handleMouseUp = (event) => {
        this.setState({
            isDown: false,
            isActive: false
        });
    }

    handleMouseMove = (event) => {
        if (!this.state.isDown)
            return;

        event.preventDefault();
        let slider = this.state.slider;

        const x = event.pageX - slider.offsetLeft;
        const distance = (x - this.state.startX) * 0.07;
        slider.scrollLeft = slider.scrollLeft - distance;

        this.setState({
            slider: slider
        });
    }

    render() {
        return (
            <div className="card-container">
                <h2 className="card-title">
                    {this.props.title}
                </h2>
                <div className={`card-items ${this.state.isActive ? 'active' : ''}`} ref={this.cardItems} onMouseDown={this.handleMouseDown} onMouseLeave={this.handleMouseLeave} onMouseMove={this.handleMouseMove} onMouseUp={this.handleMouseUp}>
                    {
                        this.state.isLoading &&
                        <div className="loader">
                            <Loader loading={this.state.isLoading}></Loader>
                        </div>
                    }
                    {this.state.items.map((item, index) => (
                        <Card key={index} item={item} entity={this.props.entity}></Card>
                    ))}
                </div>
            </div>
        )
    }
}