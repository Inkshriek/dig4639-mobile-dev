class Adder {
    constructor(props) {
        this.props = props;
    }

    sum() {
        if (typeof this.props.a == undefined || typeof this.props.b == undefined) {
            return null;
        }

        return (this.props.a + this.props.b);
    }

    render() {
        return `<p>The sum of ${this.props.a} and ${this.props.b} is ${this.sum()}`;
    }
}

module.exports = Adder;