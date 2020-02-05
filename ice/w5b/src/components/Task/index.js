import "./index.css"

class Task {
    constructor(props) {
        this.props = props;
        this.element = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        this.onClick = this.onClick.bind(this);
        checkbox.addEventListener("change",this.onClick);

        this.element.appendChild(checkbox);
        let span = document.createElement("span");
        this.text = span;
        this.element.appendChild(span);
        span.innerHTML = this.props.content;
        this.element.className = "task";
    }
    onClick(e) {
        var myString = "eouaeou"
        if(myString == "") {
            console.log("Input is true");
        }
        console.log(this);
        console.log(e.target);
        console.log(e.target.checked);
        if (e.target.checked) {
            this.props.done = true;
            this.text.classList.add("strike");
        }
        else {
            this.props.done = false;
            this.text.classList.remove("strike");
        }
    }
    render() {
        return this.element;
    }
}

export default Task;