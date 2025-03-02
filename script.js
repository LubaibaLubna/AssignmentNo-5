
function markAsCompleted(task) {
    let taskCountElement = document.getElementById("task-count");
    let navbarCountElement = document.getElementById("navbar-count");
    let activityLog = document.getElementById("activity-log");
    let dateElement = document.querySelector('.task-date');
    let currentDate = new Date().toDateString();
    dateElement.innerText = currentDate; 


    // Update the task count
    let taskCount = parseInt(taskCountElement.innerText);
    let navbarCount = parseInt(navbarCountElement.innerText);
    
    if (taskCount > 0) {
        taskCountElement.innerText = taskCount - 1;
        navbarCountElement.innerText = navbarCount + 1;
    }
    let currentTime = new Date().toLocaleString();
    let logEntry = document.createElement("p");
    logEntry.innerText = "You have completed the task '" + task + "' at " + currentTime + ".";
    logEntry.classList.add("text-sm", "text-gray-700", "mt-5");
    activityLog.appendChild(logEntry);
    
    // Disable the completed button
    let taskButton = document.querySelector(`button[onclick="markAsCompleted('${task}')"]`);
    taskButton.disabled = true;
    taskButton.classList.add("bg-gray-400", "cursor-not-allowed");

    // Show an alert for the first completed task
    if (!firstTaskCompleted) {
        alert("Board updated successfully");
        firstTaskCompleted = true; 
    }


    if (taskCount === 1) {
        alert("Congrats!! You have completed all the current tasks.");
    }
}
let firstTaskCompleted = false;

function clearHistory() {
    let activityLog = document.getElementById("activity-log");
    activityLog.innerHTML = ''; 
}

