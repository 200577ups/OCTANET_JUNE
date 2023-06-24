
function addTask() {

  var taskelm = document.getElementById("taskname");
  var priorityelm = document.getElementById("priority");
  var deadlineelm = document.getElementById("deadline");

  var taskvalue=taskelm.value;
  var priorityvalue=priorityelm.value;
  var deadlinevalue=deadlineelm.value;

  if (taskvalue == "") {
    alert("Please enter a task..");
    return;
  }

  var ol = document.getElementById("tasklist");
  var li = document.createElement("li");

  var taskText = document.createElement("span");
  taskText.innerText = taskvalue;

  var priorityText = document.createElement("span");
  priorityText.innerText = priorityvalue;
  priorityText.classList.add("priority");

  var deadlineText = document.createElement("span");
  deadlineText.innerText = deadlinevalue;

  var removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("remove-button");
  removeButton.addEventListener("click", function () {
    if (confirm("Are You Sure To Remove This Task?")) {
      li.remove();
    };

  });

  var completeCheckbox = document.createElement("input");
  completeCheckbox.type = "checkbox";
  completeCheckbox.addEventListener("change", function () {
    if (this.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  });

  var editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.classList.add("edit-button");
  editButton.addEventListener('click', function editTask() {
    var newTask = prompt('Edit Task:');
    if (newTask !== null) {
      var li = this.parentNode;
      var span = li.querySelector('span');
      span.innerText = newTask;
    };
  });

  li.appendChild(completeCheckbox);
  li.appendChild(taskText);
  li.appendChild(priorityText);
  li.appendChild(deadlineText);
  li.appendChild(editButton);
  li.appendChild(removeButton);
  ol.appendChild(li);

  taskelm.value = "";
  priorityelm.value = "Medium";
  deadlineelm.value = "";

};

function deleteAll() {
  if (confirm("Are You Sure To Delete All Task?")) {
    var taskList = document.getElementById("tasklist");
    while (tasklist.firstChild) {
      taskList.removeChild(tasklist.firstChild);
    };

  };
};
