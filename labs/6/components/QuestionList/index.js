import React from 'react';
import data from "../../data.json";
import Question from "../Question/index.js";
import { StyleSheet, Text, Picker } from 'react-native';

class QuestionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionlist: data.questions,
            score: [0,0,0,0,0]
        };
    }

    handleScore = (itemValue, index) => {
        let newscore = this.state.score;
        newscore[index] = itemValue;
        this.setState({score: newscore});
    }

    totalScore() {
        let total = 0;
        for (let i = 0; i <= 4; i++) {
            total = total + parseInt(this.state.score[i]);
        }
        return total;
    }

    render() {
        return (
            <div>
                <Text style={styles.text}>Welcome to the Goth Quiz! (TM)<br/>Just answer these questions honestly and you'll be given a score!</Text>
                <br/>
                <br/>
                {
                    this.state.questionlist.map((item, index) => {
                        return (
                            <div>
                                <Question 
                                question={item.question} 
                                a1={item.a1} 
                                a1score={item.a1score} 
                                a2={item.a2} 
                                a2score={item.a2score} 
                                valchange={(itemValue, itemIndex) => this.handleScore(itemValue, index)}
                                key={index}
                                />
                                <br/>
                            </div>
                        );
                    })
                }
                <br/>
                <Text style={styles.text}>Goth Score<br/>{this.totalScore()}</Text>
            </div>
            
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: 'purple'
    }
});

export default QuestionList;