import "./index.css"
import React from 'react';
import Card from "../Card/index.js";

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.content = props.content;
    }

    render() {
        return <div class="card">{this.content}</div>;
    }
}

export default CardList;