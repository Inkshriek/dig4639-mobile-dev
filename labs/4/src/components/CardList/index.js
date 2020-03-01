import "./index.css"
import React from 'react';
import Card from "../Card/index.js";
import info from "../../info.json";

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cardslist: info.cards};
    }

    delete = (event) => {
        let cardtitle = event.target.getAttribute("cardtitle");
        let newlist = this.state.cardslist.filter((card) => {
            return card.title !== cardtitle;
        });
        this.setState({cardslist: newlist});
    }

    render() {
        return (
            <div> {
                this.state.cardslist.map((card, index) => {
                    return <Card 
                        title={card.title} 
                        content={card.content}
                        clickfunc={this.delete} 
                        key={index}
                    />
                })
            } </div>
        );
    }
}

export default CardList;