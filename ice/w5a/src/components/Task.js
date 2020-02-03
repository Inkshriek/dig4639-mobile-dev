class Task {
    
    constructor(content, done) {
        this.content = content;
        this.done = done;
    }

    render() {
        return `<span>
        <input type="checkbox"></input>
        <span>${this.props.content}</span>
        </span>`;
    }

}

export default Task;
