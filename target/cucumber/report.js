$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("log.feature");
formatter.feature({
  "line": 3,
  "name": "loginGmail",
  "description": "",
  "id": "logingmail",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Successful login",
  "description": "",
  "id": "logingmail;successful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Gmail login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter username as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "logingmail;successful-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "logingmail;successful-login;;1"
    },
    {
      "cells": [
        "srishti.13it066@abes.ac.in",
        "apple@123"
      ],
      "line": 14,
      "id": "logingmail;successful-login;;2"
    },
    {
      "cells": [
        "srishtidrolia44@gmail.com",
        "dhanichowki"
      ],
      "line": 15,
      "id": "logingmail;successful-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3008445863,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Successful login",
  "description": "",
  "id": "logingmail;successful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Gmail login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter username as srishti.13it066@abes.ac.in",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password as apple@123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.goToGmail()"
});
formatter.result({
  "duration": 90052351,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDef.Steps.goToGmail(Steps.java:23)\r\n\tat ✽.Given I am on Gmail login page(log.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "srishti.13it066@abes.ac.in",
      "offset": 20
    }
  ],
  "location": "Steps.enterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "apple@123",
      "offset": 20
    }
  ],
  "location": "Steps.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.checkPass()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 40424660,
  "status": "passed"
});
formatter.before({
  "duration": 2175518582,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Successful login",
  "description": "",
  "id": "logingmail;successful-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Gmail login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter username as srishtidrolia44@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password as dhanichowki",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.goToGmail()"
});
formatter.result({
  "duration": 243396,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDef.Steps.goToGmail(Steps.java:23)\r\n\tat ✽.Given I am on Gmail login page(log.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "srishtidrolia44@gmail.com",
      "offset": 20
    }
  ],
  "location": "Steps.enterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "dhanichowki",
      "offset": 20
    }
  ],
  "location": "Steps.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.checkPass()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 162275167,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Bad login",
  "description": "",
  "id": "logingmail;bad-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on Gmail login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter username as \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Login should be Fail",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "logingmail;bad-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 26,
      "id": "logingmail;bad-login;;1"
    },
    {
      "cells": [
        "srishti.13it066@abes.ac.in",
        "apple"
      ],
      "line": 27,
      "id": "logingmail;bad-login;;2"
    },
    {
      "cells": [
        "srishtidrolia44@gmail.com",
        "dhanicho"
      ],
      "line": 28,
      "id": "logingmail;bad-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2220364555,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Bad login",
  "description": "",
  "id": "logingmail;bad-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on Gmail login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I enter username as srishti.13it066@abes.ac.in",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as apple",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Login should be Fail",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.goToGmail()"
});
formatter.result({
  "duration": 209966,
  "error_message": "java.lang.NullPointerException\r\n\tat StepDef.Steps.goToGmail(Steps.java:23)\r\n\tat ✽.Given I am on Gmail login page(log.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "srishti.13it066@abes.ac.in",
      "offset": 20
    }
  ],
  "location": "Steps.enterUsername(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 20
    }
  ],
  "location": "Steps.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.checkFail()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 60176149,
  "status": "passed"
});
