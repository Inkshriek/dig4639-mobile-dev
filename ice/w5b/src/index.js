import Task from "./components/Task/index.js"
let element;
let input;
function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);
    input = document.getElementById("taskText");
    // Handle adding a new task
    var addTaskButton = document.getElementById("addTask");
    addTaskButton.addEventListener("click", onClick);
}

function onClick() {
    console.log("clicked!");
    if (input.value.trim() != "") {
        var newTask = new Task({content:input.value.trim(),done:false});
        element.appendChild(newTask.render());
    }
    input.value = "";
}

window.addEventListener("DOMContentLoaded", runOnLoad);

// 
// 