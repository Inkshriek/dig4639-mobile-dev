import "./index.css"
import React from 'react';
import Card from "../Card/index.js";

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cardslist: []};
    }

    componentDidMount() {
        fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
        .then(res => res.json())
        .then((result) => {
            let periods = result.properties.periods;


            this.setState({
                cardslist: periods.map((period, index) => {
                    return <Card 
                        name={period.name} 
                        temperature={period.temperature}
                        temperatureUnit={period.temperatureUnit}
                        detailedForecast={period.detailedForecast}
                        key={index}
                    />
                })
            })
        })
        .catch((error) => {console.log(error)} );
    }

    /*
    delete = (event) => {
        let cardtitle = event.target.getAttribute("cardtitle");
        let newlist = this.state.cardslist.filter((card) => {
            return card.title !== cardtitle;
        });
        this.setState({cardslist: newlist});
    }
    */

    render() {
        return (
            <div> {this.state.cardslist} </div>
        );
    }
}

export default CardList;