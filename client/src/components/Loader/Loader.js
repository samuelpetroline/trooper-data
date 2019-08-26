import React from 'react';

import { MoonLoader } from 'react-spinners';

export default class Loader extends React.Component {

    render() {
        return (
            <MoonLoader
                loading={this.props.loading}
            />
        )
    }
}