import React from 'react';
import { StyleSheet, Text, Picker } from 'react-native';

class Question extends React.Component {
    render() {
        return(
            <div>
                <Text style={styles.text}>{this.props.question}</Text>
                <br/>
                <Picker style={styles.picker} onValueChange={this.props.valchange}>
                    <Picker.Item label="" value="0"/>
                    <Picker.Item label={this.props.a1} value={this.props.a1score}/>
                    <Picker.Item label={this.props.a2} value={this.props.a2score}/>
                </Picker>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    picker: {
        height: 30
    },
    text: {
        fontSize: 20,
        color: 'purple'
    }
});

export default Question;