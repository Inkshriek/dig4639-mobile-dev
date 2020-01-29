class Task {
    
    constructor(props) {
        this.props = props;
    }

    render() {
        return `<span>
        <input type="checkbox"></input>
        <span>${this.props.Content}</span>
        </span>`;
    }

}

export default Task;

