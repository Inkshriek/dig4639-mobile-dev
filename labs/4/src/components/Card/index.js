import "./index.css"
import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="close" onClick={this.props.clickfunc} cardtitle={this.props.title}>X</div>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Card;