import React from 'react';

import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <img alt=""></img>
                <nav>
                    <ul>
                        <li>
                            <label>Search</label>
                            <input type="text" className="input"/>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}