$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("todo.feature");
formatter.feature({
  "line": 1,
  "name": "Add new item to ToDO list",
  "description": "",
  "id": "add-new-item-to-todo-list",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Lambdatest ToDO Scenario",
  "description": "",
  "id": "add-new-item-to-todo-list;lambdatest-todo-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is on home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "select First Item",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "select second item",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "add new item",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify added item",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Update the result",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ToDoStepDefinition.user_already_on_home_page()"
});
formatter.result({
  "duration": 14448115525,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDefinition.select_first_item()"
});
formatter.result({
  "duration": 1368014101,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDefinition.select_second_item()"
});
formatter.result({
  "duration": 1589233442,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDefinition.add_new_item()"
});
formatter.result({
  "duration": 4497584412,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDefinition.verify_added_item()"
});
formatter.result({
  "duration": 1366024983,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDefinition.update_result()"
});
formatter.result({
  "duration": 1441529859,
  "status": "passed"
});
formatter.match({
  "location": "ToDoStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1264343953,
  "status": "passed"
});
});