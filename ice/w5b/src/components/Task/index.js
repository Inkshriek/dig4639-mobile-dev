import "./index.css"

class Task {
    constructor(props) {
        // Stores the argument in this.props
        this.props = props;
        // Creates a new HTML DIV element
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

        let del = document.createElement("input");
        del.type = "button";
        this.onDelete = this.onDelete.bind(this);
        del.addEventListener("click",this.onDelete);
        del.className = "delete";
        this.element.appendChild(del);
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
    onDelete(e) {
        this.element.parentNode.removeChild(this.element);
    }

    render() {
        return this.element;
    }
}

export default Task;